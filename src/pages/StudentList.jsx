import { useEffect, useState } from "react";
import "../App.css";
import SubmitButton from "../components/SubmitButton";
import { getData, setData } from "../utils/storageHandler";
import { useNavigate } from "react-router-dom";

export default function StudentList() {
  const [studentdata, setStudentData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const allStudent = getData();
    setStudentData(allStudent);
  }, []);

  function Addstudent() {
    navigate("/student-add");
  }

  function editHandler(studentId) {
    navigate(`/student-edit/${studentId}`);
  }

  function deleteStudent(studentId) {
    const allStudent = getData();
    const updatedAllStudent = allStudent.filter((s) => s.id != studentId);
    setData(updatedAllStudent);
    setStudentData(updatedAllStudent);
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
                      editHandler(s.id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => {
                      deleteStudent(s.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
        <div>
          <SubmitButton onClickHandeler={Addstudent} name={"ADD"} />
        </div>
      </div>
    </div>
  );
}
