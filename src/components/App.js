import "../styles/App.scss";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import ls from "../services/localStorage";
import callToApi from "../services/api";
import CharacterFilter from "./CharacterFilter";
import HouseFilter from "./HouseFilter";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import ErrorDetail from "./ErrorDetail";
import Header from "./Header";

// import PropTypes from 'prop-types';

function App() {


  // states
  const [data, setData] = useState(ls.get("data", []));
  const [characterFilter, setCharacterFilter] = useState("");
  const [houseFilter, setHouseFilter] = useState(
    ls.get("houseFilter", "gryffindor")
  );

  const URL = "http://hp-api.herokuapp.com/api/characters/house/";

  // effect ls
  useEffect(() => {
    ls.set("data", data);
    ls.set("houseFilter", houseFilter);
  }, [data, houseFilter]);

  // effect api
  useEffect(() => {
    if (data.length === 0 || data[0].house.toLowerCase() !== houseFilter) {
      callToApi(URL, houseFilter).then((response) => {
        setData(response);
      });
    }
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

  const renderCharacterDetail = ({ match }) => {
    const routeId = match.params.characterId;
    const foundCharacter = data.find(
      (eachCharacter) => eachCharacter.id === parseInt(routeId)
    );
    // si es undefined, la ruta no existe, return componente de error
    if (foundCharacter === undefined) {
      return <ErrorDetail />;
    } else {
      return <CharacterDetail selectedCharacter={foundCharacter} />;
    }
  };

  return (
    <div>
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/">
            <form
              action=""
              className="main__form"
              onSubmit={(ev) => ev.preventDefault()}
            >
              <CharacterFilter
                characterFilter={characterFilter}
                updateFilter={updateFilter}
              />
              <HouseFilter
                houseFilter={houseFilter}
                updateFilter={updateFilter}
              />
            </form>
            <ul className="character__list">
              <CharacterList filteredData={filteredData} />
            </ul>
          </Route>
          <Route
            exact
            path="/character/:characterId"
            render={renderCharacterDetail}
          ></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
