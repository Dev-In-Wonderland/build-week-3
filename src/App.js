
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Jumbotron from "./components/jumbotron";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import News from  "./components/News"
// import SideBar from "./components/SideBar";
import Job from './components/Job';
import { useEffect } from 'react';


function App() {
  useEffect(()=> {
    localStorage.clear()
  }, [])
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
        <Route path="/" element={<News />}></Route>
        <Route path="/Me/:userId" element={<Jumbotron />}></Route>
        <Route path="/job" element={<Job />}></Route>
       
        
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
