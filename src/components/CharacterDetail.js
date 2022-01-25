import { Link } from "react-router-dom";
import translateSpecies from "../services/translateSpecies";
import checkImageUrl from "../services/checkImageUrl";

const CharacterDetail = ({ selectedCharacter }) => {
  return (
    <>
      <Link to="/">Volver al inicio</Link>
      <img
        className="preview__image"
        src={checkImageUrl(selectedCharacter.image)}
        alt={selectedCharacter.name}
      />
      <h2>Detalle del usuario:</h2>
      <div>{selectedCharacter.name}</div>
      <p>{translateSpecies(selectedCharacter.species)}</p>
    </>
  );
};

export default CharacterDetail;
