import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Image } from "react-bootstrap";
import { BsFillEyeFill } from "react-icons/bs";
import { useEffect } from "react";
import { useState } from "react";
// import { useSelector } from "react-redux";
import Side from "../components/RightColumn.jsx";
import Example from "../components/ModalEsp.jsx";
import ModalMod from "../components/ModalMod.jsx"




const Esperienze = () => {
  // const [esperienze, setEsperienze] = useState()
  //   const dispatch = useDispatch();
  //   const profile = useSelector((state) => {
  //     return state;
  //   });

const [esperienze, setEsperienze] = useState(
  []
    
  );

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
        setEsperienze(data)
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
  {esperienze?.map((e, i) => (
      <Card.Body className="d-flex ">
        {/* <img
          src={e.image}
          className="profilo"
          alt="immagine dell'esperienza"
        /> */}
        <div>
          <Card.Title className="sopra mb-5 d-flex">
            <h3 className="me-5"> {e.role} </h3> <button className='btn border border-none '><Example/></button>
          </Card.Title>

          <p className="m-0  p-0">{e.company}</p>
          <p className="m-0  p-0">{e.area}</p>
          <p className="m-0  p-0">{e.description}</p>
          <ModalMod></ModalMod>
        </div>
      </Card.Body>))}
    </>
  );
};

export default Esperienze;
