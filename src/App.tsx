import Header from "./components/Header/Header";
import "./App.scss";
import Form from "./components/Form/Form";
import Preview from "./components/Preview/Preview";

function App() {
  return (
    <div className="app">
      <Header dark={true} />
      <main>
        <Form />
        <Preview />
      </main>
    </div>
  );
}

export default App;
