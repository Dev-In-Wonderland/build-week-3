import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Image } from "react-bootstrap";
import { BsFillEyeFill } from "react-icons/bs";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Side from "../components/RightColumn.jsx";
import Example from "../components/ModalEsp.jsx";
import ModalModEsp from "../components/ModalModEsp.jsx"
import EditImageEsp from "./EditImageEsp.jsx";
import { useParams } from "react-router-dom";





const Esperienze = () => {
  // const [esperienze, setEsperienze] = useState()
  //   const dispatch = useDispatch();
    const profile = useSelector((state) => {
      return state;
    });
const param = useParams()

const [esperienze, setEsperienze] = useState(
  []
    
  );

  const fetchEsperienze = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ";
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${param.id === 'me'? profile._id : param.id }/experiences`,
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
      <Card.Body className="  border-bottom ">
        <div className="mb-4 ">
        <img
          src={e.image}
          className="w-100"
          alt="immagine dell'esperienza"
        />
        <EditImageEsp id={e._id} userid={e.user}></EditImageEsp>
        </div>
        <div>
          <Card.Title className=" mb-5">
            <div className=" d-flex"><h3 className="me-5"><strong>Impiego: </strong> {e.role} </h3> <ModalModEsp id={e._id}></ModalModEsp></div>
            
          </Card.Title>

          <p className="m-0  p-0"><strong>Azienda: </strong>{e.company}</p>
          <p className="m-0  p-0"><strong>Luogo: </strong>{e.area}</p>
          <p className="m-0  p-0"><strong>Descrizione: </strong>{e.description}</p>
          
          
        </div>
        

      </Card.Body>))}
      
    </>
  );
};

export default Esperienze;
