import "./BusinessCard.scss";

interface BusinessCardProps {
  name: string;
  designation: string;
  phone: string;
  email: string;
}

function BusinessCard({ name, designation, phone, email }: BusinessCardProps) {
  return (
    <article className="business-card">
      <h3>{name}</h3>
      <p className="designation">{designation}</p>
      <p className="phone">{phone}</p>
      <p className="email">{email}</p>
    </article>
  );
}

export default BusinessCard;
