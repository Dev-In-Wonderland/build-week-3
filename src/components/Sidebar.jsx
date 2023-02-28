import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col,} from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPersone from "./CardPersone"

const SideBar= () => {
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
        
    <CardPersone></CardPersone>
          
        </Col>
      </Row>
    </>
  );
};

export default SideBar;
