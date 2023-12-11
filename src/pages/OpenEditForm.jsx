import React, { useEffect, useState } from "react";

export default function EditForm({ s, updateStudent }) {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    setStudent(s);
  }, []);

  function updateHandler() {
    updateStudent(student);
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
        <button style={{ marginTop: "10px" }} onClick={updateHandler}>
          Update
        </button>
      </div>
    </div>
  ) : null;
}
