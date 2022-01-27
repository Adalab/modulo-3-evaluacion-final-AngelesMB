import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import Loader from "../Loader";

const CharacterList = ({ isLoading, filteredData }) => {
  if (!isLoading) {
    if (filteredData.length === 0) {
      return (
        <li key="no-data" className="list__message--empty">
          Ningún personaje coincide con tu búsqueda.
        </li>
      );
    } else {
      return filteredData.map((eachCharacter, index) => {
        return (
          <li key={index}>
            {/* house + id in order to re-fetch by house if necessary */}
            <Link
              to={`/character/${eachCharacter.house.toLowerCase()}/${
                eachCharacter.id
              }`}
            >
              <CharacterCard eachCharacter={eachCharacter} />
            </Link>
          </li>
        );
      });
    }
  } else {
    return (
      <li key="loading-data" className="list__message--empty">
        <Loader />
      </li>
    );
  }
};

export default CharacterList;
