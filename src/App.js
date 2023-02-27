import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Jumbotron from "./components/jumbotron";

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>

        <Route path="/" element={<Jumbotron />}></Route>{" "}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
