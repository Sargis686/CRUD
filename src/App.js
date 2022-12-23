import FormExampleForm from "./components/Create/Create";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Read from "./components/Read/Read";
import Ubdate from "./components/Ubdate/Ubdate";
import Form from "./components/FormField/FormField";








const App = (props) => {










  return (
    <div className="main-form">
      <h2 className="main-header">React Crud Operations</h2>






  

      <br />
      <br />
      <br />
      <button onClick={alert('ewe')}></button>


      <Routes>
        <Route path="Create" element={<FormExampleForm />} />
        <Route path="Read" element={<Read />} />
        <Route path="Ubdate" element={<Ubdate />} />
        <Route path="FormField" element={<Form />} />

      </Routes>
      <Navbar />

    </div>
  );
};

export default App;