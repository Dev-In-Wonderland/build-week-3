import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Image } from "react-bootstrap";
import { BsFillEyeFill } from "react-icons/bs";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Side from "../components/RightColumn.jsx";
import Example from "../components/ModalEsp.jsx";
import ModalModEsp from "../components/ModalModEsp.jsx";
import EditImageEsp from "./EditImageEsp.jsx";
import { useParams } from "react-router-dom";
import ExpDelete from "./ExpDelete.jsx";
import { BsCardImage } from "react-icons/bs";

const Esperienze = () => {
  // const [esperienze, setEsperienze] = useState()
  //   const dispatch = useDispatch();
  const profile = useSelector((state) => {
    return state.profile;
  });
  const param = useParams();

  const [esperienze, setEsperienze] = useState([]);

  const fetchEsperienze = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ";
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${param.id === "me" ? profile._id : param.id}/experiences`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.ok) {
        const data = await response.json();
        handleSubmit(data._id);
        setEsperienze(data);
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









  // const profile = useSelector((state) => state.profile);

  // useEffect(() => {
  //   console.log(props.userid, profile._id);
  // });

  const [fd, setFd] = useState(new FormData()); //FormData e' una classe usata per raccogliere dati non stringa dai form
  //E' formata da coppie chiave/valore => ["post", File], ["exp", File]
  const handleSubmit = async (id, userid) => {
    id.preventDefault();
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" + userid + "/experiences/" + id + "/picture",
      {
        //qui l'id andra' sostituito con un id DINAMICO!!!!!
        method: "POST",
        body: fd, //non serve JSON.stringify
        headers: {
          //NON serve ContentType 🙂
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ",
        },
      }
    );
  };


  const handleFile = (ev) => {
    setFd((prev) => {
      //per cambiare i formData, bisogna "appendere" una nuova coppia chiave/valore, usando il metodo .append()
      prev.delete("post"); //ricordatevi di svuotare il FormData prima 🙂
      prev.append("experience", ev.target.files[0]); //L'API richiede un "nome" diverso per ogni rotta, per caricare un'immagine ad un post, nel form data andra' inserito un valore con nome "post"
      return prev;
    });

  }














  return (
    <>
      {esperienze?.map((e, i) => (
        <Card.Body className="  border-bottom ">
          <div className="mb-4 ">
            <img src={e.image} className="w-100" alt="immagine dell'esperienza" />
            {/* <EditImageEsp id={e._id} userid={e.user}></EditImageEsp> */}
            <div className="mt-3">
            <input id="file" type="file" onChange={handleFile} className="d-none" />
          <label htmlFor="file" className="">Foto <BsCardImage className="text-primary cursor-pointer"></BsCardImage></label>
          </div>
          </div>
          <div>
            <Card.Title className=" mb-5">
              <div className=" d-flex">
                <h3 className="me-5">
                  <strong>Impiego: </strong> {e.role}{" "}
                </h3>{" "}
                <ModalModEsp id={e._id}></ModalModEsp>
              </div>
            </Card.Title>

            <p className="m-0  p-0">
              <strong>Azienda: </strong>
              {e.company}
            </p>
            <p className="m-0  p-0">
              <strong>Luogo: </strong>
              {e.area}
            </p>
            <p className="m-0  p-0">
              <strong>Descrizione: </strong>
              {e.description}
            </p>
          </div>
        </Card.Body>
      ))}
    </>
  );
};

export default Esperienze;
