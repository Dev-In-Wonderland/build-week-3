import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Button, Image, Form, Modal } from "react-bootstrap";
import { BsFillEyeFill } from "react-icons/bs";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Side from "../components/RightColumn.jsx";
import Example from "./Modal.jsx";
import Esperienze from "../components/Esperienze.jsx";
import ModalMod from "../components/ModalMod.jsx";
import EditImageProfile from "../components/EditImageProfile.jsx";
import { useParams } from "react-router-dom";
import {BsCardImage } from 'react-icons/bs'

const Jumbotron = () => {
  // const [esperienze, setEsperienze] = useState()

  // const handleChange = function(field, value){
  //   setEsperienze((prev)=>{return {...prev, [field]:value}})
  // //le quadre sostituiscono
  // }

  const param = useParams();
  const dispatch = useDispatch();
  const fetchme = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ";
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${param.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (param.id === "me") {
          dispatch({ type: "SETPROFILE", payload: data });
        } else if (param.id !== "me") {
          dispatch({ type: "ADDPROFILE", payload: data });
        }
      } else {
        console.log("err if");
      }
    } catch (err) {
      console.log("err catch");
    }
  };

  useEffect(() => {
    fetchme();
  }, [param.id]);

  const profile = useSelector((state) => {
    return state.profile;
  });
  const currentprofile = useSelector((state) => {
    return state.currentprofile;
  });















  
    // const profile = useSelector((state) => state.profile);
  
    // useEffect(() => {
    //   console.log(props.userid, profile._id);
    // });
    const [fd, setFd] = useState(new FormData()); //FormData e' una classe usata per raccogliere dati non stringa dai form
    //E' formata da coppie chiave/valore => ["post", File], ["exp", File]
    const handleSubmit = async (ev) => {
      ev.preventDefault();
      let res = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + profile._id + "/picture", {
        //qui l'id andra' sostituito con un id DINAMICO!!!!!
        method: "POST",
        body: fd, //non serve JSON.stringify
        headers: {
          //NON serve ContentType 🙂
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ",
        },
      });
    };
    const handleFile = (ev) => {
      setFd((prev) => {
        //per cambiare i formData, bisogna "appendere" una nuova coppia chiave/valore, usando il metodo .append()
        prev.delete("post"); //ricordatevi di svuotare il FormData prima 🙂
        prev.append("profile", ev.target.files[0]); //L'API richiede un "nome" diverso per ogni rotta, per caricare un'immagine ad un post, nel form data andra' inserito un valore con nome "post"
        return prev;
      });
    };
    
  
  
  
  




















  return (
    <>
      <Row className="jumbotron">
        <Col xs={9}>
          <Card className="d-flex flex-column  m-3 px-3 ">
            <Card.Body>
              <img
                src="https://images.pexels.com/photos/7134990/pexels-photo-7134990.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="background img-fluid"
                alt="immagine del background"
              />
              <img
                src={param.id == "me" ? profile.image : currentprofile.image}
                className="profilo"
                alt="immagine del profilo"
              />

              <Card.Title className="sopra  ">

                {/* <EditImageProfile userid={profile._id}></EditImageProfile> */}
<div className="d-flex align-items-center justift-content-start">
                <input
                  id="file"
                  type="file"
                  onChange={handleFile}
                  className="d-none"
                />
                <label htmlFor="file" >
                  <BsCardImage className="text-primary cursor-pointer fs-5 me-3 "></BsCardImage>
                  <span className="fls text-secondary ">Foto</span> 
                </label>

                <Button
                onClick={fetchme}
                variant="primary"
                type="submit"
                className="d-block  fsl ms-3 rounded-pill" 
              >
                Salva immagine
              </Button>
              </div>



                <div className="d-flex justify-content-between mt-3">
                  <div>
                    {" "}
                    {param.id == "me" ? profile.name : currentprofile.name} {" "}
                    {param.id == "me" ? profile.surname : currentprofile.surname}
                  </div>{" "}
                  <ModalMod></ModalMod>
                </div>
              </Card.Title>

              <p className="mt-3  p-0">{param.id == "me" ? profile.title : currentprofile.title}</p>

              <div className="mt-5">
                <Button className="rounded-pill">Disponibile per</Button>
                <button className="ms-2  btn rounded-pill border border-primary text-primary">
                  Aggiungi sezione del profilo
                </button>
                <button className="ms-2 btn rounded-pill border border-secondary text-secondary">Altro</button>
              </div>
            </Card.Body>

            <Row className="w-100 cols-2 ms-2 pb-3">
              <Col className="p-2 w-50 ">
                {" "}
                <p className="m-0 p-0">
                  <strong>Mostra ai recuiter se sei disponibile a lavorare:</strong> sei tu che decidi che può vedere
                  queste informazioni
                </p>
                <a className="text-decoratione-none text-primary">Inizia</a>
              </Col>
              ✖️
              <Col className="p-2 ms-3 w-50 ">
                <p className="m-0 p-0">
                  <strong>Fai sapere che stai facendo selezione </strong>e attrai candidati qualificati
                </p>

                <a className="text-decoratione-none">Inizia</a>
              </Col>
              ✖️
            </Row>
          </Card>

          <Card className="d-flex m-3 position-relative">
            <Card.Body>
              <Card.Title>
                <strong>Consigliato per te</strong>
              </Card.Title>
              <p className="m-0 p-0 d-flex align-items-center ">
                <BsFillEyeFill className="me-3" />
                Solo per te
              </p>
            </Card.Body>
          </Card>

          <Card className="d-flex m-3 position-relative">
            <Card.Body>
              <Card.Title className="d-flex justify-content-between">
                <h2>
                  <strong className="fs-5">Esperienze</strong>
                </h2>
                <div className="">
                  <Example />
                </div>
              </Card.Title>

              <Esperienze ></Esperienze>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Side></Side>
        </Col>
      </Row>
    </>
  );
};

export default Jumbotron;
