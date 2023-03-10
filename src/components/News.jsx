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
import InputImgProfile from "./InputImgProfile.jsx";
import ModalModPost from "./ModPost.jsx";
import { TiArrowSync } from "react-icons/ti";
import { BsSend } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";

const Post = () => {
  // const [esperienze, setEsperienze] = useState()
  //   const dispatch = useDispatch();
  //   const profile = useSelector((state) => {
  //     return state;
  //   });
  const [spinner, setSpinner] = useState();
  const [selected, setSelected] = useState(null);

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
  // console.log("post", post);
  const filteredFriends = useSelector((state) => state.friends);
  // const fffriends = filteredFriends.includes(post);
  // const ff = post.includes(filteredFriends[6]);
  // console.log("fil", ff);

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
        await handleSubmit(data._id);
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
                    className="rounded-pill ms-2"
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
                <label htmlFor="file">
                  <BsCardImage className="text-primary cursor-pointer fs-5 me-3 "></BsCardImage>
                  <span className="fls text-secondary ">Foto</span>
                </label>
                <label>
                  <BsFillPlayBtnFill className="text-success fs-5 me-3"></BsFillPlayBtnFill>
                  <span className="fsl text-secondary">Video</span>{" "}
                </label>
                <label>
                  <AiOutlineCalendar className="text-orange fs-5 me-3"></AiOutlineCalendar>
                  <span className="fsl  text-secondary">Eventi</span>{" "}
                </label>
                <label>
                  <RiArticleLine className="text-danger fs-5 me-3"></RiArticleLine>
                  <span className="fsl  text-secondary">
                    Scrivi un articolo
                  </span>{" "}
                </label>
              </div>

              <Button
                onClick={posttextData}
                variant="primary"
                type="submit"
                className="d-block mx-auto fsl"
              >
                Invia Post
              </Button>
            </Form>
          </Card>
          {spinner && <SpinnerLoad />}
          {post?.map((e, i) => (
            <Card className="mb-2" onClick={() => setSelected(e._id)}>
              <Card.Body className=" d-flex justify-content-center flex-column align-items-center border border-light rounded  bg-light">
                <div className="d-flex w-100 justify-content-end align-items-center">



                <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        . . .
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"><DeletePost id={e._id}></DeletePost> Elimina</Dropdown.Item>
        <Dropdown.Item href="#/action-2"><ModalModPost post={e} refresh={posttextData}></ModalModPost> Modifica</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>

                  
                </div>




                {/* PARTE CENTRALE DEL POST */}


<div className="d-flex flex-column align-items-start  w-100">

<p className=" fsl ms-1 w-100 p-0">
                  <p className="fs-5 m-0 fw-bold p-2 d-flex align-items-center">
                    <img src={e.user.image}  className="profilo-news-input me-3" alt="" />
                    {e.user.name} {e.user.surname}
                  </p>

                  <div className="d-flex justify-content-start"><small className="text-secondary text-start">{e.user.title}</small></div>
                  <div className="mb-3 text-start">
                    
                    {e.text}
                    </div>
                  </p>


                  </div>
                

                {e.image && (
                  <img
                  src={e.image}
                  className="postimages w-100"
                  alt="immagine del commento/post"
                  />
                  )}

                  {/* FINE PARTE CENTRALE DEL POST */}














                <Row className="w-100 d-flex align-items-center justify-content-between mt-5">
                  <Col>
                    <button className="d-flex align-items-center m-0 p-0 justify-content-center text-secondary bg-light border border-none">
                      <Like className="fs-6 m-0 p-0 text-secondary"></Like>
                      <span className="fsl me-4 p-0">Consiglia</span>
                    </button>
                    {/* <div className="d-flex align-items-center"><p><Like /></p><span>Consiglia</span></div> */}
                  </Col>
                  <Col  target="_blank"
          rel="noopener noreferrer">
                    <Accordion defaultActiveKey={"0"}>
                      <Accordion.Item eventKey="1"  >
                        <Accordion.Header className="text-secondary " >
                          <FaRegCommentDots className="me-2 text-secondary">
                            {" "}
                          </FaRegCommentDots>
                          <span className="text-secondary"> Commenta</span>
                        </Accordion.Header>
                        <Accordion.Body>
                          {selected === e._id && (
                            <>
                              <Commenti id={e._id}></Commenti>
                            </>
                          )}
                          <CommentPost id={e._id}></CommentPost>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                  <Col className="">
                    <button className=" border border-none d-flex align-items-center">
                      <TiArrowSync className="fs-3 text-secondary"></TiArrowSync>
                      <span className="word-wrap-normal text-secondary">Diffondi il post</span>
                    </button>{" "}
                  </Col>
                  <Col>
                    <button className="border border-none d-flex p-3 align-items-center">
                      <BsSend className="fs-6 text-secondary"></BsSend>
                      <span>Invia</span>
                    </button>{" "}
                  </Col>
                </Row>

              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col className="col-3 ">
          <Card className="">
            <Card.Title>
              <h3 className="fsl mt-3">LinkedIn Notizie</h3>
            </Card.Title>
            <Card.Body>
              <ul>
                <li>
                  <p className="fsl">
                    Il declino demografico minaccia gli Stati Uniti
                  </p>
                  <small className="fsl text-secondary">
                    un giorno fa - 520 lettori
                  </small>
                </li>

                <li>
                  <p className="fsl">Nuova proroga per lo smart-working</p>
                  <small className=" text-secondary">
                    un giorno fa - 124 lettori
                  </small>
                </li>

                <li>
                  <p className="fsl">Oltre il nuovo logo di Nokia</p>
                  <small className="fs-6 text-secondary">
                    2 giorni fa - 355 lettori
                  </small>
                </li>

                <li>
                  <p className="fsl">L'Ucraina e gli ultimi aggiornamenti</p>
                  <small className="fs-6 text-secondary">
                    12 ore fa - 679 lettori
                  </small>
                </li>

                <li>
                  <p className="fsl">I giovani occupati stanno diminuendo</p>
                  <small className="fs-6 text-secondary">
                    3 ore fa - 543 lettori
                  </small>
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
