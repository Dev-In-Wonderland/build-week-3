import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";



const LeftColumnNews = () => {

    const annuncio = useSelector((state) => 
        state
      );



      return(

<>

<Card className="d-flex flex-column ">
            <Card.Body>
              {/* <img
                src="https://images.pexels.com/photos/7134990/pexels-photo-7134990.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="background "
                alt="immagine del background"
              /> */}
              {/* <img
                src="https://res.cloudinary.com/dmqsfltrf/image/upload/v1677324929/linkedin/jgpagosxcxrryalmjchr.jpg"
                className="profilo"
                alt="immagine del profilo"
              /> */}
              <Card.Title className="">
                Benvenuto a te, {annuncio.name}
              </Card.Title>
            </Card.Body>
          </Card>







</>





      )









}














export default LeftColumnNews