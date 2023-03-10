import { Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const CardUtenti = ({ profile }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Row className="p-1">
        <Col xs={3} className="d-flex justify-content-center align-items-start">
          <Image className="rounded-circle" style={{ width: "100%" }} src={profile.image}></Image>
        </Col>
        <Col xs={9}>
          <div>
            <h6 className="mb-0">
              <Link to={`/Me/${profile._id}`}>
                {profile.name} {profile.surname}
              </Link>
              <span className="text-secondary"> ···</span>
            </h6>
          </div>
          <div>
            <p>{profile.title}</p>
          </div>
          <div className="ms-4">
            <Button
              onClick={() => dispatch({ type: "ADDFRIEND", payload: profile._id })}
              variant="outline-dark"
              className="rounded-pill"
            >
              Segui
            </Button>
            <hr />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CardUtenti;
