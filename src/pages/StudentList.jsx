import { useState } from "react";
import "../App.css";
import SubmitButton from "../components/SubmitButton";
import EditForm from "./OpenEditForm";
import { AddStudent } from "./AddStudent";

export default function StudentList() {
  const [studentdata, setStudentData] = useState([]);
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedstudent, setSelectedStudent] = useState(null);

  function Addstudent() {
    setShow(true);
  }

  function onSubmit(newStudent) {
    setStudentData((currentValue) => {
      newStudent["id"] = currentValue.length + 1;
      currentValue.push(newStudent);
      return [...currentValue];
    });

    setShow(false);
  }

  function onCancel() {
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
              <tr key={index}>
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
      {show && <AddStudent onSubmit={onSubmit} onCancel={onCancel} />}

      {showForm && (
        <div className="">
          <EditForm s={selectedstudent} updateStudent={updateStudent} />
          <SubmitButton onClickHandeler={cancelUpdateData} name={"CANCEL"} />
        </div>
      )}
    </div>
  );
}
