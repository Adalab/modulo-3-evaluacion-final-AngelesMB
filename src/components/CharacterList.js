import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ filteredData }) => {
  if (filteredData.length === 0) {
    return (
      <li key={"no-data"} className="character__errorMessage">
        Ningún personaje coincide con tu búsqueda.
      </li>
    );
  } else {
    return filteredData.map((eachCharacter, index) => {
      return (
        <li key={index}>
          <Link to={`/character/${eachCharacter.id}`}>
            <CharacterCard eachCharacter={eachCharacter} />
          </Link>
        </li>
      );
    });
  }
};

export default CharacterList;
