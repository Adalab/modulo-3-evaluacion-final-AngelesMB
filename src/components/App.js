import "../styles/App.css";
import { useEffect, useState } from "react";
// import ls from "../services/localStorage";
import callToApi from "../services/api";
// import PropTypes from 'prop-types';

function App() {
  // states
  const [data, setData] = useState([]);
  const [characterFilter, setCharacterFilter] = useState("");
  const [houseFilter, setHouseFilter] = useState("gryffindor");

  const URL = "http://hp-api.herokuapp.com/api/characters/house/";

  // effect api
  useEffect(() => {
    callToApi(URL, houseFilter).then((response) => {
      setData(response);
    });
  }, [houseFilter]);

  const updateFilter = (ev) => {
    if (ev.currentTarget.id === "characterFilter") {
      setCharacterFilter(ev.currentTarget.value);
    } else {
      setHouseFilter(ev.currentTarget.value);
    }
  };

  const characterListHtml = data
    .filter((eachCharacter) => {
      return eachCharacter.name
        .toLowerCase()
        .includes(characterFilter.toLowerCase());
    })
    .map((eachCharacter, index) => {
      return <li key={index}>{eachCharacter.name}</li>;
    });

  return (
    <div>
      <header>
        <h1>Harry Potter</h1>
      </header>
      <main>
        <form action="" onSubmit={(ev) => ev.preventDefault()}>
          <label htmlFor="characterFilter">Busca por personaje: </label>
          <input
            type="text"
            name="characterFilter"
            id="characterFilter"
            value={characterFilter}
            onChange={updateFilter}
          />
          <label htmlFor="houseFilter">Selecciona la casa: </label>
          <select
            name="houseFilter"
            id="houseFilter"
            value={houseFilter}
            onChange={updateFilter}
          >
            <option value="gryffindor">Gryffindor</option>
            <option value="ravenclaw">Ravenclaw</option>
            <option value="slytherin">Slytherin</option>
            <option value="hufflepuff">Hufflepuff</option>
          </select>
        </form>
        <ul>{characterListHtml}</ul>
      </main>
    </div>
  );
}

export default App;
