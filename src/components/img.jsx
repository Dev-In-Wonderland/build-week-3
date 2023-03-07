import { useSelector } from "react-redux";
const Imgpro = () => {
  const annuncio = useSelector((state) => state);

  return (
    <>
      <img src={annuncio.image} className="profilo-img" alt="immagine del profilo-news" />
    </>
  );
};

export default Imgpro;
