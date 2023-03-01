import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Image } from "react-bootstrap";
import { BsFillEyeFill } from "react-icons/bs";
import { useEffect } from "react";
import { useState } from "react";
// import { useSelector } from "react-redux";
import Side from "../components/RightColumn.jsx";
import Example from "./Modal.jsx";

const Esperienze = () => {
  // const [esperienze, setEsperienze] = useState()
  //   const dispatch = useDispatch();
  //   const profile = useSelector((state) => {
  //     return state;
  //   });

  const [esperienze, setEsperienze] = useState({
    role: "",
    company: "",
    // startDate: "",
    // endDate: "",
    description: "",
    area: "",
  });

  const fetchEsperienze = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ";
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/63fe2788579c6300137cf8c3/experiences`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // dispatch({ type: "SETPROFILE", payload: data });
      } else {
        console.log("err if");
      }
    } catch (err) {
      console.log("err catch");
    }
  };

  useEffect(() => {
    fetchEsperienze();
  }, []);

  // const handleChange = function(field, value){
  //   setEsperienze((prev)=>{return {...prev, [field]:value}})
  // //le quadre sostituiscono
  // }
  return (
    <>
      <Card.Body className="d-flex ">
        <img
          src={esperienze.image}
          className="profilo"
          alt="immagine dell'esperienza"
        />
        <div>
          <Card.Title className="sopra">
            <h3> {esperienze.role} </h3>
          </Card.Title>

          <p className="m-0  p-0">{esperienze.company}</p>
          <p className="m-0  p-0">{esperienze.area}</p>
          <p className="m-0  p-0">{esperienze.description}</p>
        </div>
      </Card.Body>
    </>
  );
};

export default Esperienze;
