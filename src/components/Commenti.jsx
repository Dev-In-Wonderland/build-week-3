import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
const Commenti = (props) => {
  const [commenti, setCommenti] = useState();

  const CommentiFetch = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ";

      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + props.id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setCommenti(data);
      } else {
        console.log("errore nel else di commenti");
      }
    } catch (err) {
      console.log("errore nel catch di aside", err);
    }
  };

  useEffect(() => {
    CommentiFetch();
  }, []);

  console.log(commenti);

  return (
    <>
      {commenti?.map((e, i) => (
        <div className="mt-2">
          {/* <h3>Commenti:</h3> */}
          <Card.Body className=" d-flex justify-content-center flex-column align-items-center border border-light rounded p-5 m-2 bg-light">
            <Card.Title className=" m-0">
              <p className="m-0  p-2">
                <strong>Nickname: </strong>
                {e.author}
              </p>
              <p className="m-0  p-0">
                <strong>Commento: </strong>
                {e.comment}
              </p>
            </Card.Title>
          </Card.Body>
        </div>
      ))}
    </>
  );
};

export default Commenti;
