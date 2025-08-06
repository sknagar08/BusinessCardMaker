import "./FormElement.scss";

interface FormElementProps {
  id: string;
  label: string;
  value: string;
  onChange: any;
}

function FormElement({ id, label, value, onChange }: FormElementProps) {
  let inputVal = value

  function handleChange(e) {
    inputVal = e.target.value;
    onChange(inputVal, e.target.name);
  }

  return (
    <div className="form-element">
      <label htmlFor={id}>
        <strong>{label}</strong>
        <input
          type="text"
          name={id}
          id={id}
          value={inputVal}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default FormElement;
