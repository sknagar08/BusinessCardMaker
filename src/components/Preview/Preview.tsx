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
    </section>
  );
}

export default Preview;
