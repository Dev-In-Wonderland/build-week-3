import { useEffect, useState } from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import CardUtenti from "./CardUtenti";


const Side = () => {
  const [utenti, setUtenti] = useState();



  const SideFetch = async () => {
    try {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjYWY0NWYxOTNlNjAwMTM4MDdmNjYiLCJpYXQiOjE2Nzc1MDQzMjYsImV4cCI6MTY3ODcxMzkyNn0.X4RA6RfalvoQ6D9OyEfbbERzS2BFy05UMcjihgNKKMo";

      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );


      if (response.ok) {
        const data = await response.json();
        setUtenti(data);
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
        className="mb-2 p-2 text-secondary rounded bg-white"
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



        
      <div
        className="mb-2 p-2 rounded bg-white"
        style={{ border: "1px solid lightgray" }}
      >



        <div style={{ fontWeight: "600", fontSize: "1.15em" }} className="mb-1">
          Altre aziende consultate
        </div>
<div>

        {utenti &&
          utenti
            .filter((_, i) => i < 5)
            .map((e) => <CardUtenti profile={e} />)}
      </div>

      </div>
      



      <div
        className="mb-2 p-2 rounded bg-white"
        style={{ border: "1px solid lightgray" }}
      >

        <div style={{ fontWeight: "600", fontSize: "1.15em" }} className="mb-1">
          Persone che potresti conoscere
        </div>
<div>
        {utenti &&
          utenti
            .filter((_, i) => i < 5)
            .map((e) => <CardUtenti profile={e} />)}
      </div>
    </div>




    </div>
    </>
  );
};

export default Side;