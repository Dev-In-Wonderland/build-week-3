import { useSelector } from "react-redux";


const InputImgProfile = () => {
  const annuncio = useSelector((state) => state.profile);

  return (
    <>
      
          <img src={annuncio.image} className="profilo-news-input" alt="immagine del profilo-news" />
          
    </>
  );
};

export default InputImgProfile;