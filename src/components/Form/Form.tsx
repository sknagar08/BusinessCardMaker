import { useState } from "react";
import FormElement from "../FormElement/FormElement";
import "./Form.scss";

function Form({}) {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function onInputChange(val:string, inputName:string) {
    switch (inputName) {
      case "name":
        setName(val);
        break;
      case "designation":
        setDesignation(val);
        break;
      case "phone":
        setPhone(val);
        break;
      case "email":
        setEmail(val);
        break;
    }
  }

  const formInputs = [
    { id: "name", label: "Name", value: name },
    { id: "designation", label: "Designation", value: designation },
    { id: "phone", label: "Phone", value: phone },
    { id: "email", label: "Email", value: email },
  ];

  return (
    <section className="form">
      <h2>Enter Your Details</h2>
      <form>
        {formInputs.map((input, key) => (
          <FormElement
            id={input.id}
            label={input.label}
            value={input.value}
            key={key}
            onChange={onInputChange}
          />
        ))}
      </form>
    </section>
  );
}

export default Form;
