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

import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Like from "./Like.jsx";

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
        fetchPost();
      } else {
        console.log("err if");
      }
    } catch (err) {
      console.log("err catch");
    }
  };
  return (
    <>
      <Row className="cols-3 text-center mt-3 p-3">
        <Col className="col-3">
          <LeftColumnNews></LeftColumnNews>
        </Col>

        <Col className="col-6 ">
          <Card className="p-3 mb-3">
            <Form>
              <Form.Group className="mb-3">
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

                <EditImagePost id={e._id} userid={e.user._id}></EditImagePost>
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
                        <Accordion.Header>Commenti</Accordion.Header>
                        <Accordion.Body>
                          <Commenti id={e._id}></Commenti>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                  <Col>Condividi ⤴️</Col>
                </Row>
              </Card.Body>
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
