import { useEffect, useState } from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import CardUtenti from "./CardUtenti";
import SpinnerLoad2 from "./SpinnerLoad2";

const Side = () => {
  const [utenti, setUtenti] = useState();
  const [spinner, setSpinner] = useState();

  const SideFetch = async () => {
    setSpinner(true);
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ";

      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUtenti(data);
        setSpinner(false);
      } else {
        console.log("errore nel else di aside");
      }
    } catch (err) {
      console.log("errore nel catch di aside", err);
    }
  };

  useEffect(() => {
    SideFetch();
  }, []);

  console.log(utenti);

  return (
    <>
      <div
        className="mb-2 mt-3 p-2 text-secondary rounded bg-white"
        style={{
          fontSize: "0.95em",
          fontWeight: "500",
          border: "1px solid lightgray",
        }}
      >
        <div className=" linkAside">
          Modifica il tuo profilo pubblico e l'URL
          <span className="ps-2">
            <AiFillQuestionCircle style={{ color: "gray" }} />
          </span>
        </div>

        <hr />

        <div className=" linkAside">
          Aggiungi il tuo profilo in un'altra lingua
          <span className="ps-2">
            <AiFillQuestionCircle style={{ color: "gray" }} />
          </span>
        </div>
      </div>

      <div
        className="mb-2 p-2 text-secondary text-center rounded bg-white"
        style={{
          fontSize: "0.9em",
          fontWeight: "500",
          border: "1px solid lightgray",
        }}
      >
        <div className="mb-2 p-2 rounded bg-white" style={{ border: "1px solid lightgray" }}>
          <div style={{ fontWeight: "600", fontSize: "1.15em" }} className="mb-1">
            Persone che potresti conoscere
          </div>
          <div>
            {spinner && <SpinnerLoad2 />}
            {utenti &&
              utenti
                .reverse()
                .slice(0, 20)
                .map((e) => <CardUtenti profile={e} />)}
          </div>
        </div>

        <div className="mb-2 p-2 rounded bg-white" style={{ border: "1px solid lightgray" }}>
          <div style={{ fontWeight: "600", fontSize: "1.15em" }} className="mb-1">
            Altre aziende consultate
          </div>
          <div>
            {spinner && <SpinnerLoad2 />}
            {utenti &&
              utenti
                .reverse()
                .slice(20, 40)
                .map((e) => <CardUtenti profile={e} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Side;
