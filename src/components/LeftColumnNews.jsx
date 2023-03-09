import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

const LeftColumnNews = () => {
  const annuncio = useSelector((state) => state.profile);

  return (
    <>
      <Card className="d-flex flex-column align-items-center">
        <Card.Body className="">
          {/* <img
                src="https://images.pexels.com/photos/7134990/pexels-photo-7134990.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="background "
                alt="immagine del background"
              /> */}
          <img src={annuncio.image} className="profilo-news" alt="immagine del profilo-news" />
          <h3 className="fsl mt-3">Ti diamo il benvenuto {annuncio.name}!</h3>
        </Card.Body>
      </Card>
    </>
  );
};

export default LeftColumnNews;
