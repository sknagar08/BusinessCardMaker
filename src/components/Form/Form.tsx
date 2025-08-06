import FormElement from "../FormElement/FormElement";
import "./Form.scss";

function Form({ onInputChange, name, designation, phone, email }) {
  const formInputs = [
    { id: "name", label: "Name", value: name, onChange: onInputChange },
    { id: "designation", label: "Designation", value: designation, onChange: onInputChange },
    { id: "phone", label: "Phone", value: phone, onChange: onInputChange },
    { id: "email", label: "Email", value: email, onChange: onInputChange },
  ];

  return (
    <section className="form">
      <h2>Enter Your Details</h2>
      <form>
        {formInputs.map((input, key) => (
          <FormElement {...input} key={key} />
        ))}
      </form>
    </section>
  );
}

export default Form;
