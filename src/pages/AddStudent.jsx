import { useState } from "react";
import SubmitButton from "../components/SubmitButton";

export const AddStudent = ({ onSubmit, onCancel }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  function submitData() {
    const newStudent = { name, phone, email, address };
    onSubmit(newStudent);

    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
  }

  return (
    <div>
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

      <div className="button-design">
        <SubmitButton onClickHandeler={submitData} name={"SUBMIT"} />
        <SubmitButton onClickHandeler={onCancel} name={"CANCEL"} />
      </div>
    </div>
  );
};
