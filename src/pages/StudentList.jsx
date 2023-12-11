import { useState } from "react";
import "../App.css";
import SubmitButton from "../components/SubmitButton";
import EditForm from "./OpenEditForm";

export default function StudentList() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [studentdata, setStudentData] = useState([]);
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedstudent, setSelectedStudent] = useState(null);

  function Addstudent() {
    setShow(true);
  }

  function submitData() {
    // const newStudent={
    //   name:name,
    //   phone:phone
    // }
    const newStudent = { name, phone, email, address };

    setStudentData((currentValue) => {
      newStudent["id"] = currentValue.length + 1;
      currentValue.push(newStudent);
      return [...currentValue];
    });
  }

  function cancelData() {
    setShow(false);
  }

  function cancelUpdateData() {
    setShowForm(false);
  }

  function editHandler(s) {
    setShowForm(true);
    setSelectedStudent(s);
  }

  function updateStudent(updatedData) {
    studentdata.map((student, index) => {
      if (student.id === selectedstudent.id) {
        setStudentData((currentdata) => {
          currentdata[index] = updatedData;
          return [...currentdata];
        });
      }
      return student;
    });
  }

  return (
    <div>
      <h1>List of Student</h1>
      <div>
        <table border="2" width="80%">
          <tr>
            <th>Sl No.</th>
            <th>Name</th>
            <th>Phone No</th>
            <th>Email Id</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
          {studentdata.map((s, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{s.name}</td>
                <td>{s.phone}</td>
                <td>{s.email}</td>
                <td>{s.address}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => {
                      editHandler(s);
                    }}
                  >
                    Edit
                  </button>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
            );
          })}
        </table>
        <div>
          <SubmitButton onClickHandeler={Addstudent} name={"ADD"} />
        </div>
      </div>
      {show ? (
        <div className="inputData">
          <input
            type="text"
            name="fullName"
            placeholder="Enter your Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <input
            type="number"
            name="contact"
            placeholder="Enter your Phone Number"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email Id"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            type="text"
            name="address"
            placeholder="Enter your Address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          ></input>
        </div>
      ) : null}
      {show ? (
        <div className="button-design">
          <SubmitButton onClickHandeler={submitData} name={"SUBMIT"} />
          <SubmitButton onClickHandeler={cancelData} name={"CANCEL"} />
        </div>
      ) : null}

      {showForm && (
        <div className="">
          <EditForm s={selectedstudent} updateStudent={updateStudent} />
          <SubmitButton onClickHandeler={cancelUpdateData} name={"CANCEL"} />
        </div>
      )}
    </div>
  );
}
