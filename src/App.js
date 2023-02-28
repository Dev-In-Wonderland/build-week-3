
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Jumbotron from "./components/jumbotron";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>

        <Route path="/" element={<Jumbotron />}></Route>
        <SideBar></SideBar>
        
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
