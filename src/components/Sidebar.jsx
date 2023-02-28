import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col,} from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Side= () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => {
    return state;
  });
  const fetchme = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjhlMmYxOTNlNjAwMTM4MDdmNTAiLCJpYXQiOjE2Nzc0ODYzMDYsImV4cCI6MTY3ODY5NTkwNn0.zISvpNCnyAT6Gud9asFHNbAGQC8lWmzxECVBhw1xfrM";
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.ok) {
        const data = await response.json();
        const datasliced = data.slice(0,6)
        console.log(datasliced);
        dispatch({ type: "SETSIDEBAR", payload: datasliced });
      } else {
        console.log("err");
      }
    } catch (err) {
      console.log("err");
    }
  };

  useEffect(() => {
    fetchme();
  }, []);

  return (
    <>
      <Row className="Sidebar">
        <Col xs={3}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
          
        </Col>
      </Row>
    </>
  );
};

export default Side;
