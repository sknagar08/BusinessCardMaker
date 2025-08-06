import BusinessCard from "../BusinessCard/BusinessCard";
import "./Preview.scss";

interface PreviewProps {
  name: string;
  designation: string;
  phone: string;
  email: string;
}

function Preview({ name, designation, phone, email }: PreviewProps) {

  return (
    <section className="preview">
      <h2>Preview Pane</h2>
      <div>
        <BusinessCard
          name={name}
          designation={designation}
          phone={phone}
          email={email}
        />
      </div>
      <button>Save As PDF</button>
      <button>Save As PNG</button>
      <button>Save As JPEG</button>
    </section>
  );
}

export default Preview;
