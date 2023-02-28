import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Button, Image, Form } from "react-bootstrap";
import { BsFillEyeFill } from "react-icons/bs";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Side from "../components/RightColumn.jsx";
 import  Modal  from "../components/Modal";
import StaticExample from '../components/Modal';


const Jumbotron = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => {
    return state;
  });
  const fetchme = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjYWY0NWYxOTNlNjAwMTM4MDdmNjYiLCJpYXQiOjE2Nzc1MDQzMjYsImV4cCI6MTY3ODcxMzkyNn0.X4RA6RfalvoQ6D9OyEfbbERzS2BFy05UMcjihgNKKMo";
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/me`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({ type: "SETPROFILE", payload: data });
      } else {
        console.log("err if");
      }
    } catch (err) {
      console.log("err catch");
    }
  };

  useEffect(() => {
    fetchme();
  }, []);


  function modalModal() {
    return (
     console.log("modal")
    );
  }
  

  return (
    <>
    
      <Row className="jumbotron">
        <Col xs={9}>
          <Card className="d-flex flex-column  m-3 px-3 ">
            <Card.Body>
              <img
                src="https://images.pexels.com/photos/7134990/pexels-photo-7134990.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="background "
                alt="immagine del background"
              />
              <img
                src={profile.image}
                className="profilo"
                alt="immagine del profilo"
              />
              <Card.Title className="sopra">
                {profile.name} {profile.surname}
              </Card.Title>
              <p className="m-0  p-0">{profile.title}</p>

              <div>
                <Button className="rounded-pill">Disponibile per</Button>
                <button className="ms-2  btn rounded-pill border border-primary text-primary">
                  Aggiungi sezione del profilo
                </button>
                <button className="ms-2 btn rounded-pill border border-secondary text-secondary">
                  Altro
                </button>
              </div>
            </Card.Body>

            <Row className="w-100 cols-2 ms-2 pb-3">
              <Col className="p-2 w-50 ">
                {" "}
                <p className="m-0 p-0">
                  <strong>
                    Mostra ai recuiter se sei disponibile a lavorare:
                  </strong>{" "}
                  sei tu che decidi che può vedere queste informazioni
                </p>
                <a className="text-decoratione-none text-primary">Inizia</a>
              </Col>
              ✖️
              <Col className="p-2 ms-3 w-50 ">
                <p className="m-0 p-0">
                  <strong>Fai sapere che stai facendo selezione </strong>e
                  attrai candidati qualificati
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
              <Card.Title className='d-flex justify-content-between'>
  
                <strong>Esperienze</strong>
                <Button variant="primary" onClick={modalModal}>+</Button>
               
              </Card.Title>









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
