import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getData, setData } from "../utils/storageHandler";
import SubmitButton from "../components/SubmitButton";

export default function EditForm() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    console.log(params.id);
    getStudent(params.id);
  }, []);

  const navigate = useNavigate();
  const params = useParams();

  const getStudent = (studentId) => {
    const allStudent = getData();
    console.log(allStudent);
    const foundStudent = allStudent.find((student) => student.id == studentId);
    console.log("foundStudent", foundStudent);
    if (foundStudent) {
      setStudent(foundStudent);
    }
  };

  function updateStudent() {
    const allStudent = getData();
    const updatedStudent = allStudent.map((s) => {
      if (s.id == params.id) {
        return student;
      } else {
        return s;
      }
    });
    setData(updatedStudent);
    closeUpdateForm();
  }

  function closeUpdateForm() {
    navigate("/");
  }

  return student ? (
    <div className="inputData">
      <input
        type="text"
        name="fullName"
        value={student.name}
        onChange={(e) => {
          setStudent((currentvalue) => {
            return {
              ...currentvalue,
              ...{
                name: e.target.value,
              },
            };
          });
        }}
      ></input>
      <input
        type="number"
        name="contact"
        value={student.phone}
        onChange={(e) => {
          setStudent((currentvalue) => {
            return {
              ...currentvalue,
              ...{
                phone: e.target.value,
              },
            };
          });
        }}
      ></input>
      <input
        type="email"
        name="email"
        value={student.email}
        onChange={(e) => {
          setStudent((currentvalue) => {
            return {
              ...currentvalue,
              ...{
                email: e.target.value,
              },
            };
          });
        }}
      ></input>
      <input
        type="text"
        name="address"
        value={student.address}
        onChange={(e) => {
          setStudent((currentvalue) => {
            return {
              ...currentvalue,
              ...{
                address: e.target.value,
              },
            };
          });
        }}
      ></input>
      <div>
        <button style={{ marginTop: "10px" }} onClick={updateStudent}>
          Update
        </button>
        <SubmitButton onClickHandeler={closeUpdateForm} name={"CANCEL"} />
      </div>
    </div>
  ) : null;
}
