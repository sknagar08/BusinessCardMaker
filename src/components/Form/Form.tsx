import FormElement from "../FormElement/FormElement";
import "./Form.scss";

function Form() {
  const formInputs = [
    { id: "name", label: "Name", value: "" },
    { id: "designation", label: "Designation", value: "" },
    { id: "phone", label: "Phone", value: "" },
    { id: "email", label: "Email", value: "" },
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
          />
        ))}
      </form>
    </section>
  );
}

export default Form;
