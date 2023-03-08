import { useState } from "react";
import { Card, Col, Row, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DeleteComment from "./CommentDelete";

const CommentPost = ({ id }) => {
  const profile = useSelector((state) => state.comment);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ";
  const [cbody, setcbody] = useState({ comment: "", elementId:id });
  const dispatch = useDispatch();

  const CommentsFetch = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cbody),
        }
      );
      if (response.ok) {
        const data = await response.json();
      } else {
        console.log("err in if");
      }
    } catch (err) {
      console.log("err in catch");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "COMMENTPOST", payload: cbody.elementId });
    setcbody({ comment: "" });
  };

  const handleChange = (value) => {
    setcbody({ comment: value, elementId: id, rate: 4 });
  };

  return (
    <>
      <Col>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="m-0">
            <Form.Control
              onChange={(e) => {
                handleChange(e.target.value);
              }}
              className="rounded-pill py-2 px-2"
              type="text"
              placeholder="Comment!"
              value={cbody?.comment}
            />
          </Form.Group>
          <button className="btn btn-primary mt-3" type="submit" onClick={CommentsFetch}>
            Commenta
          </button>
          {/* <DeleteComment id={profile.elementId}></DeleteComment> */}
        </Form>
      </Col>
    </>
  );
};

export default CommentPost;
