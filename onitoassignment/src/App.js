import "./App.css";
import Form from "./components/form/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Table from "./components/form/Table";

function App() {
  return (
    <div className=" ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />}></Route>
          <Route exact path="/users" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
