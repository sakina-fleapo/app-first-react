import { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import { useNavigate } from "react-router-dom";
import { getData, setData } from "../utils/storageHandler";

export const AddStudent = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  function submitData() {
    const newStudent = { name, phone, email, address };
    const allStudent = getData();
    newStudent["id"] = allStudent.length + 1;
    allStudent.push(newStudent);
    setData(allStudent);
    closeForm();
  }

  const closeForm = () => {
    navigate("/");
  };

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
        <SubmitButton onClickHandeler={closeForm} name={"CANCEL"} />
      </div>
    </div>
  );
};
