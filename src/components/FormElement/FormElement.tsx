import "./FormElement.scss";

interface FormElementProps {
  id: string;
  label: string;
  value: string;
}

function FormElement({ id, label, value }: FormElementProps) {
  return (
    <div className="form-element">
      <label htmlFor={id}>
        <strong>{label}</strong>
        <input type="text" name={id} id={id} value={value} />
      </label>
    </div>
  );
}

export default FormElement;
