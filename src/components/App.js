import "../styles/App.css";
import { useEffect, useState } from "react";
// import ls from "../services/localStorage";
import callToApi from "../services/api";
import CharacterFilter from "./CharacterFilter";
import HouseFilter from "./HouseFilter";
import CharacterList from "./CharacterList";
// import PropTypes from 'prop-types';

function App() {
  // //LOCAL STORAGE
  // const [name, setName] = useState(ls.get("name", ""));
  // const [email, setEmail] = useState(ls.get("email", ""));

  // useEffect(() => {
  //   ls.set("name", name);
  //   ls.set("email", email);
  // }, [name, email]);

  // // LOCAL STORAGE OBJETO
  // // const [name, setName] = useState(ls.get("data", {}).name || "");
  // // const [email, setEmail] = useState(ls.get("data", {}).email || "");
  // const [data, setData] = useState(
  //   ls.get("data", { name: "", email: "" })
  // );
  // useEffect(() => {
  //   ls.set("data", data);
  // }, [data]);

  // DEFAULT PROPS
  // Input.defaultProps = {
  //   inputType: 'text'
  // };

  // PROP TYPES
  // Input.propTypes = {
  //   id: PropTypes.string,
  //   labelText: PropTypes.string.isRequired,
  //   inputType: PropTypes.string,
  //   inputName: PropTypes.string.isRequired,
  //   inputPlaceholder: PropTypes.string,
  //   inputValue: PropTypes.string,
  //   handleChange: PropTypes.func.isRequired,
  // };
  // PROP TYPES para OBJETOS
  // MyComponent.propTypes = {
  //   data: PropTypes.shape({
  //     title: PropTypes.string,
  //     id: PropTypes.string.isRequired,
  //   }),
  // };
  // PROP TYPES para ARRAYS
  // MyComponent.propTypes = {
  //   myArrProp: PropTypes.arrayOf(PropTypes.number),
  // };

  // ROUTES Y LINKS
  // <Route path="/contacto">
  //   <h2>
  //     Este título solo aparece en contacto
  //   </h2>
  // </Route>;
  // <Link to="/contacto">Ir a contacto</Link>

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

  const updateFilter = (obj) => {
    if (obj.key === "characterFilter") {
      setCharacterFilter(obj.value);
    } else {
      setHouseFilter(obj.value);
    }
  };

  const filteredData = data.filter((eachCharacter) => {
    return eachCharacter.name
      .toLowerCase()
      .includes(characterFilter.toLowerCase());
  });

  return (
    <div>
      <header>
        <h1>Harry Potter</h1>
      </header>
      <main>
        <form action="" onSubmit={(ev) => ev.preventDefault()}>
          <CharacterFilter
            characterFilter={characterFilter}
            updateFilter={updateFilter}
          />
          <HouseFilter houseFilter={houseFilter} updateFilter={updateFilter} />
        </form>
        <ul>
          <CharacterList filteredData={filteredData} />
        </ul>
      </main>
    </div>
  );
}

export default App;
