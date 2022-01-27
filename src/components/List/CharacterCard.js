import "../../styles/CharacterCard.scss";
import translateSpecies from "../../services/translateSpecies";
import checkImageUrl from "../../services/checkImageUrl";

const CharacterCard = ({ eachCharacter }) => {
  return (
    <article className="character__preview">
      <img
        className="preview__image"
        src={checkImageUrl(eachCharacter.image)}
        alt={eachCharacter.name}
        title={eachCharacter.name}
      />
      <div className="preview__text">
        <h4 className="preview__title">{eachCharacter.name}</h4>
        <p className="preview__species">
          {translateSpecies(eachCharacter.species)}
        </p>
      </div>
    </article>
  );
};

export default CharacterCard;
