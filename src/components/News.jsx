import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card,} from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
// import { useSelector } from "react-redux";
import Example from "../components/ModalEsp.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Post = () => {
  // const [esperienze, setEsperienze] = useState()
  //   const dispatch = useDispatch();
  //   const profile = useSelector((state) => {
  //     return state;
  //   });

  const [post, setPost] = useState([]);

  const fetchPost = async () => {
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
        setPost(data.slice(0,10));
        console.log(data);
      } else {
        console.log("err if");
      }
    } catch (err) {
      console.log("err catch");
    }
  };

  useEffect(() => {
    fetchPost();
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
          body: JSON.stringify( posttext ),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.log("err if");
      }
    } catch (err) {
      console.log("err catch");
    }
  };
  return (
    <>
    <>
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
     
  </>
    <>
      {post?.map((e, i) => (
        <Row className="cols-3">
          <Col className="col-3">col1</Col>
          <Col className="col-6">
            <Card.Body className="d-flex border border-danger rounded m-2 bg-light-subtle">
              <div>
                <Card.Title className="sopra">
                  <p className="m-0  p-0">{e.username}</p>{" "}
                  <button className="btn border border-none bg-secondary">
                    <Example />
                  </button>
                  <p className="m-0  p-0">{e.text}</p>
                </Card.Title>
              </div>
              {/*<img
          src={e.image}
          className="profilo"
          alt="immagine dell'esperienza"
  />*/}
            </Card.Body>
          </Col>
          <Col className="col-3">col2</Col>
        </Row>
      ))}
    </>
    </>
  );
};

export default Post;
