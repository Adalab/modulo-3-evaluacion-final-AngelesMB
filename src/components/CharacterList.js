import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ filteredData }) => {
  return filteredData.map((eachCharacter, index) => {
    return (
      <li key={index}>
        <Link to={`/character/${eachCharacter.id}`}>
          <CharacterCard eachCharacter={eachCharacter} />
        </Link>
      </li>
    );
  });
};

export default CharacterList;
