import { useState } from "react";
import Header from "./components/Header/Header";
import "./App.scss";
import Form from "./components/Form/Form";
import Preview from "./components/Preview/Preview";

function App() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function onInputChange(val: string, inputName: string) {
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
  return (
    <div className="app">
      <Header dark={true} />
      <main>
        <Form
          onInputChange={onInputChange}
          name={name}
          designation={designation}
          phone={phone}
          email={email}
        />
        <Preview
          name={name}
          designation={designation}
          phone={phone}
          email={email}
        />
      </main>
    </div>
  );
}

export default App;
