import { Row, Col, Card, Button, Image } from "react-bootstrap";
import { BsFillEyeFill } from "react-icons/bs";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Jumbotron = () => {
  const dispatch = useDispatch()
   const profile = useSelector((state)=>{return state})
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
        console.log(data)
        dispatch({type:'SETPROFILE',payload: data});
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
  
  return (
    <>
      <Row className="jumbotron">
        <Col xs={9}>


          <Card className="d-flex flex-column  m-3 ">
            
            <Card.Body>
                <Image
                  
                  alt="background"
                
                />
            <img src="https://1.bp.blogspot.com/-qxpQhrAf71I/UGLraxbJpRI/AAAAAAAAQF4/jvVGIiOMuEA/s320/facebookanonimo.jpg" className="profilo" alt="immagine del profilo" />
              <Card.Title className="mt-5  ">

                {profile.name}
              </Card.Title>
              <p className="m-0 p-0">Web developer</p>
              
              <div>
                <Button>Disponibile per</Button>
                <Button className="ms-2" >
                  Aggiungi sezione del profilo
                </Button>
                <Button className="ms-2" >
                  Altro
                </Button>
              </div>
            </Card.Body>

            <Row className="w-100 cols-2 ms-2 pb-3">

              <Col className="p-2 w-50 ">
                
                <p className="m-0 p-0"><strong>Mostra ai recuiter se sei disponibile a lavorare:</strong> sei tu che decidi che può vedere queste informazioni</p>
                <a className="text-decoratione-none text-primary" >inizia</a>
              </Col>

              <Col className="p-2 ms-3 w-50 ">
                
                <p className="m-0 p-0"><strong>Fai sapere che stai facendo selezione </strong>e attrai candidati qualificati</p>

                <a className="text-decoratione-none"  >inizia</a>
              </Col>
            </Row>


          </Card>




          <Card className="d-flex m-3 position-relative">
            <Card.Body>
              <Card.Title><strong>Consigliato per te</strong></Card.Title>
              <p className="m-0 p-0 d-flex align-items-center ">
                <BsFillEyeFill className="me-3" />
                Solo per te
              </p>
            </Card.Body>
          </Card>




        </Col>
      </Row>
    </>
  );
};

export default Jumbotron;