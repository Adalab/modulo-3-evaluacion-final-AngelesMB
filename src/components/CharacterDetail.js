import "../styles/core/modal.scss";
import "../styles/core/preview_image.scss";
import "../styles/CharacterDetail.scss";
import { Link } from "react-router-dom";
import translateSpecies from "../services/translateSpecies";
import checkImageUrl from "../services/checkImageUrl";
import translateAncestries from "../services/translateAncestries";
import setHouseAvatar from "../services/setHouseAvatar";

const CharacterDetail = ({ selectedCharacter }) => {
  const defineAvatar = (species) => {
    switch (species) {
      case "human":
        species = "fas fa-user-alt";
        break;
      case "half-giant":
        species = "fas fa-star-half-alt";
        break;
      case "werewolf":
        species = "fab fa-wolf-pack-battalion";
        break;
      case "ghost":
        species = "fas fa-ghost";
        break;
      default:
        species = "No conocida";
    }
    return species;
  };
  return (
    <div className="modal">
      <article className="character__detail">
        <img
          className="preview__image"
          src={checkImageUrl(selectedCharacter.image)}
          alt={selectedCharacter.name}
          title={selectedCharacter.name}
        />
        <div>
          <span className="character__detail--text">
            {selectedCharacter.name.toUpperCase()}
          </span>
          <span className="character__detail--text">
            Estado: {selectedCharacter.alive ? "con vida" : "sin vida"}
            <i
              className={`fas fa-${
                selectedCharacter.alive ? "heartbeat" : "skull"
              } character__detail--iconSM`}
            ></i>
          </span>
          <span className="character__detail--text">
            Ascendencia: {translateAncestries(selectedCharacter.ancestry)}
          </span>
          <span className="character__detail--text">
            Especie: {translateSpecies(selectedCharacter.species)}
            <i
              className={`${defineAvatar(
                selectedCharacter.species
              )} character__detail--iconSM`}
            ></i>
          </span>
          <span className="character__detail--text">
            Género:{" "}
            {selectedCharacter.gender === "female" ? "Femenino" : "Masculino"}
          </span>
          <span className="character__detail--text houseAvatar">
            Casa: {selectedCharacter.house}
            <img
              className="character__detail--houseAvatar"
              src={setHouseAvatar(selectedCharacter.house)}
              alt={selectedCharacter.house}
              title={selectedCharacter.house}
            />
          </span>
        </div>
      </article>
      <div className="character__detail--back">
        <Link to="/">
          <i className="fas fa-arrow-left character__detail--icon"></i>
        </Link>
        <span className="character__detail--backText">Volver al listado</span>
      </div>
    </div>
  );
};

export default CharacterDetail;
