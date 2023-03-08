import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Accordion } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Example from "../components/ModalEsp.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import LeftColumnNews from "./LeftColumnNews.jsx";
import EditImagePost from "./Jimmy.jsx";
import SpinnerLoad from "./Spinner";
import Commenti from "./Commenti.jsx";
import { FaRegCommentDots } from "react-icons/fa";
import DeletePost from "./deletePost.jsx";

import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Like from "./Like.jsx";

import { BsFillPlayBtnFill } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";
import { BsCardImage } from "react-icons/bs";
import CommentPost from "./PostComment.jsx";
import InputImgProfile from "./InputImgProfile.jsx"

const Post = () => {
  // const [esperienze, setEsperienze] = useState()
  //   const dispatch = useDispatch();
  //   const profile = useSelector((state) => {
  //     return state;
  //   });
  const [spinner, setSpinner] = useState();

  const dispatch = useDispatch();

  const fetchme = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ";
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/me`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
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

  const [post, setPost] = useState([]);

  const fetchPost = async () => {
    setSpinner(true);

    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ";
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setPost(data.reverse().slice(0, 10));
        console.log(data);
        setSpinner(false);
      } else {
        console.log("err if");
      }
    } catch (err) {
      console.log("err catch");
    }
  };

  useEffect(() => {
    fetchPost();
    fetchme();
  }, []);

  // const handleChange = function(field, value){
  //   setEsperienze((prev)=>{return {...prev, [field]:value}})
  // //le quadre sostituiscono
  // }

  const [posttext, setText] = useState({
    text: "",
  });

  const handleChange = function (field, value) {
    setText((prev) => {
      return { ...prev, [field]: value };
    });
    //le quadre sostituiscono
  };
  const PostInput = useSelector((state) => state);
  console.log("PostInput", PostInput);
  const posttextData = async (e) => {
    e.preventDefault();
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ";
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(posttext),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        handleSubmit(data._id);
        fetchPost();
      } else {
        console.log("err if");
      }
    } catch (err) {
      console.log("err catch");
    }
  };

  const profile = useSelector((state) => state);

  const [fd, setFd] = useState(new FormData()); //FormData e' una classe usata per raccogliere dati non stringa dai form
  //E' formata da coppie chiave/valore => ["post", File], ["exp", File]
  const handleSubmit = async (id) => {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/posts/" + id,
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
      prev.append("post", ev.target.files[0]); //L'API richiede un "nome" diverso per ogni rotta, per caricare un'immagine ad un post, nel form data andra' inserito un valore con nome "post"
      return prev;
    });
  };

  return (
    <>
      <Row className="cols-3 text-center mt-3 p-3">
        <Col className="col-3">
          <LeftColumnNews></LeftColumnNews>
        </Col>

        <Col className="col-6 ">
          <Card className="p-3 mb-3">
            
            <Form className="">
              <div className="d-flex justify-content-center">
            <InputImgProfile></InputImgProfile>
              <Form.Group className="mb-3 w-75">
                <Form.Control
                  type="text"
                  placeholder="Avvia un post"
                  value={posttext.text}
                  onChange={(e) => {
                    console.log(e.target.value);

                    handleChange("text", e.target.value);
                  }}
                />
              </Form.Group>
              </div>
              {/* <EditImagePost userid={PostInput.user._id}></EditImagePost> */}

              <div className="d-flex w-100 justify-content-around mb-5">
                <input
                  id="file"
                  type="file"
                  onChange={handleFile}
                  className="d-none"
                />
                <label htmlFor="file" className="">
                  Foto{" "}
                  <BsCardImage className="text-primary cursor-pointer"></BsCardImage>
                </label>
                <label>
                  <span>Video</span>{" "}
                  <BsFillPlayBtnFill className="text-success"></BsFillPlayBtnFill>
                </label>
                <label>
                  <span>Eventi</span>{" "}
                  <AiOutlineCalendar className="text-orange"></AiOutlineCalendar>
                </label>
                <label>
                  <span>Scrivi un articolo</span>{" "}
                  <RiArticleLine className="text-danger"></RiArticleLine>
                </label>
              </div>

              <Button
                onClick={posttextData}
                variant="primary"
                type="submit"
                className="d-block mx-auto "
              >
                Invia Post
              </Button>
            </Form>
          </Card>
          {spinner && <SpinnerLoad />}
          {post?.map((e, i) => (
            <Card>
              <Card.Body className=" d-flex justify-content-center flex-column align-items-center border border-light rounded p-5 m-2 bg-light">
                <Card.Title className=" m-0">
                  <p className="m-0  p-2">
                    <strong>Nickname: </strong>
                    {e.username}
                  </p>
                  <p className="m-0  p-0">
                    <strong>Text: </strong>
                    {e.text}
                  </p>
                </Card.Title>

                {e.image && (
                  <img
                    src={e.image}
                    className="postimages w-100"
                    alt="immagine del commento"
                  />
                )}

                <Row className="d-flex mt-5">
                  <Col>
                    <Like />
                  </Col>
                  <Col>
                    <Accordion defaultActiveKey={["0"]}>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <FaRegCommentDots></FaRegCommentDots>
                        </Accordion.Header>
                        <Accordion.Body>
                          <CommentPost id={e._id}></CommentPost>
                          <Commenti id={e._id}></Commenti>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                  <Col>Condividi ⤴️</Col>
                </Row>
              </Card.Body>
              <DeletePost id={e._id}></DeletePost>
            </Card>
          ))}
        </Col>
        <Col className="col-3">
          <Card className="">
            <Card.Title>
              <h3>LinkedIn Notizie</h3>
            </Card.Title>
            <Card.Body>
              <ul>
                <li>
                  <p className="fs-5">
                    Il declino demografico minaccia gli Stati Uniti
                  </p>
                  <p className="fs-6 text-secondary">
                    un giorno fa - 520 lettori
                  </p>
                </li>

                <li>
                  <p className="fs-5">Nuova proroga per lo smart-working</p>
                  <p className="fs-6 text-secondary">
                    un giorno fa - 124 lettori
                  </p>
                </li>

                <li>
                  <p className="fs-5">Oltre il nuovo logo di Nokia</p>
                  <p className="fs-6 text-secondary">
                    2 giorni fa - 355 lettori
                  </p>
                </li>

                <li>
                  <p className="fs-5">L'Ucraina e gli ultimi aggiornamenti</p>
                  <p className="fs-6 text-secondary">12 ore fa - 679 lettori</p>
                </li>

                <li>
                  <p className="fs-5">I giovani occupati stanno diminuendo</p>
                  <p className="fs-6 text-secondary">3 ore fa - 543 lettori</p>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Post;
