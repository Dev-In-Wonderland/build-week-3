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
import { BsCardImage } from "react-icons/bs";

const Jumbotron = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const fetchme = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ";
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${param.userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (param.userId === "me") {
          dispatch({ type: "SETPROFILE", payload: data });
        } else if (param.userId !== "me") {
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
  }, [param.userId]);

  const profile = useSelector((state) => state.profile);
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
      prev.delete("profile"); //ricordatevi di svuotare il FormData prima 🙂
      prev.append("profile", ev.target.files[0]); //L'API richiede un "nome" diverso per ogni rotta, per caricare un'immagine ad un post, nel form data andra' inserito un valore con nome "post"
      return prev;
    });
  };

  return (
    <>
      <div className="d-flex mx-auto">
        <Row className="jumbotron d-flex justify-content-center ms-5">
          <Col className="d-flex flex-column align-items-center ms-5" xs={9}>
            <Card className="d-flex flex-column  m-3  ">
              <Card.Body>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}

                <Card.Img
                  src={
                    "https://cdn.discordapp.com/attachments/1079690207714103310/1083419534075117619/Screenshot_2023-03-09_alle_17.00.45.png"
                  }
                  className="background ms-4  img-fluid "
                  alt="immagine del background"
                />
                <img
                  src={param.userId == "me" ? profile.image : currentprofile.image}
                  className="profilo"
                  alt="immagine del profilo"
                />

                <Card.Title className="sopra  ">
                  {/* <EditImageProfile userid={profile._id}></EditImageProfile> */}
                  <div className="d-flex align-items-center justift-content-start">
                    <input id="file" type="file" onChange={handleFile} className="d-none" />
                    <label htmlFor="file">
                      <BsCardImage className="text-primary cursor-pointer fs-5 me-3 "></BsCardImage>
                      <span className="fls text-secondary ">Foto</span>
                    </label>

                    <Button
                      onClick={handleSubmit}
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
                      {param.userId == "me" ? profile.name : currentprofile.name}{" "}
                      {param.userId == "me" ? profile.surname : currentprofile.surname}
                    </div>{" "}
                    <ModalMod></ModalMod>
                  </div>
                </Card.Title>

                <p className="mt-3  p-0">{param.userId == "me" ? profile.title : currentprofile.title}</p>

                <div className="mt-5">
                  <Button className="rounded-pill">Disponibile per</Button>
                  <button className="ms-2  btn rounded-pill border border-primary text-primary">
                    Aggiungi sezione del profilo
                  </button>
                  <button className="ms-2 btn rounded-pill border border-secondary text-secondary">Altro</button>
                </div>
              </Card.Body>

              <div className=" d-flex justify-content-evenly w-100 cols-2 pb-3">
                <div id="cardsss" className="card d-flex p-2 ms-3 ">
                  <p className="m-0 p-0 w-100">
                    <strong>Mostra ai recuiter se sei disponibile a lavorare:</strong>
                    <br /> sei tu che decidi che può vedere queste informazioni
                  </p>
                  <a className="text-decoratione-none text-primary ms-3">Inizia</a>
                </div>
                ✖️
                <div id="cardsss" className="card d-flex p-2 ">
                  <p className="m-0 p-0">
                    <strong>Fai sapere che stai facendo selezione: </strong>
                    <br /> attrai candidati qualificati
                  </p>
                  <a className="text-decoratione-none text-primary ms-3">Inizia</a>
                </div>
                ✖️
              </div>
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

                {profile._id && <Esperienze />}
              </Card.Body>
            </Card>
          </Col>

          <Col className="d-flex flex-column justify-content-center me-5">
            <Side></Side>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Jumbotron;
