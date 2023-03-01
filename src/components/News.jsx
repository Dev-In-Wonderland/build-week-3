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
        setPost(data.reverse());
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

    <Row className="cols-3 text-center">
      <Col className="col-3">colsx</Col>
    <Col className="col-6">
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
            <Card.Body className=" d-flex justify-content-center align-items-center border border-light rounded p-5 m-2 bg-light">
              <Card.Title className=" m-0">
                {" "}
                <p className="m-0  p-2">
                  <strong>Nickname: </strong>
                  {e.username}
                </p>
                <p className="m-0  p-0">
                  <strong>Text: </strong>
                  {e.text}
                </p>
              </Card.Title>

              {/*<img
          src={e.image}
          className="profilo"
          alt="immagine dell'esperienza" />*/}
            </Card.Body>
      ))}
      </>
      </>

      </Col>
      <Col className="col-3">colsx</Col>
      
        </Row>
  );
};

export default Post;
