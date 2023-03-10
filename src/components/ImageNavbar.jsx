import { useSelector } from "react-redux";


const ImageNavbar = () => {
  const annuncio = useSelector((state) => state.profile);

  return (
    <>
      
          <img src={annuncio.image} className="profilo-news-navbar" alt="immagine del profilo-navbar" />
          
    </>
  );
};

export default ImageNavbar ;