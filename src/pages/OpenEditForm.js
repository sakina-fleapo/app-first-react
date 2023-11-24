import React, { useEffect, useState } from "react";

export default function EditForm({ s }) {
  const [student, setStudent] = useState(null);
  useEffect(() => {
    setStudent(s);
  }, []);
  function updateHandler() {}

  return student ? (
    <div className="inputData">
      <input type="text" name="fullName" value={student.name}></input>
      <input type="number" name="contact" value={student.phone}></input>
      <input type="email" name="email" value={student.email}></input>
      <input type="text" name="address" value={student.address}></input>
      <div>
        <button style={{ marginTop: "10px" }} onClick={updateHandler}>
          Update
        </button>
      </div>
    </div>
  ) : null;
}
