import { Link } from "react-router-dom";
import translateSpecies from "../services/translateSpecies";
import checkImageUrl from "../services/checkImageUrl";
import translateAncestries from "../services/translateAncestries";

const CharacterDetail = ({ selectedCharacter }) => {
  return (
    <>
      <article className="character__detail">
        <img
          className="preview__image"
          src={checkImageUrl(selectedCharacter.image)}
          alt={selectedCharacter.name}
        />
        <div>
          <span className="character__detail--text">
            {selectedCharacter.name}
          </span>
          <span className="character__detail--text">
            Ascendencia: {translateAncestries(selectedCharacter.ancestry)}
          </span>
          <span className="character__detail--text">
            Especie: {translateSpecies(selectedCharacter.species)}
          </span>
          <span className="character__detail--text">
            Género: {selectedCharacter.gender}
          </span>
          <span className="character__detail--text">
            Casa: {selectedCharacter.house}
          </span>
        </div>
      </article>
      <div className="character__detail--back">
        <Link to="/">
          <i class="fas fa-arrow-left character__detail--icon"></i>
        </Link>
        <span className="character__detail--backText">Volver al inicio</span>
      </div>
    </>
  );
};

export default CharacterDetail;
