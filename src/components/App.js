import "../styles/App.scss";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import ls from "../services/localStorage";
import callToApi from "../services/api";
import CharacterFilter from "./Form/CharacterFilter";
import HouseFilter from "./Form/HouseFilter";
import AncestryFilter from "./Form/AncestryFilter";
import CharacterList from "./List/CharacterList";
import CharacterDetail from "./CharacterDetail";
import ErrorDetail from "./ErrorDetail";
import Header from "./Header";
import Button from "./Form/Button";
import Footer from "./Footer";

// import PropTypes from 'prop-types';

function App() {
  // states
  const [data, setData] = useState(ls.get("data", []));
  const [characterFilter, setCharacterFilter] = useState(
    ls.get("characterFilter", "")
  );
  const [houseFilter, setHouseFilter] = useState(
    ls.get("houseFilter", "gryffindor")
  );
  const [ancestryFilter, setAncestryFilter] = useState(
    ls.get("ancestryFilter", [])
  );
  const [isLoading, setIsLoading] = useState(false);

  const URL = "https://hp-api.herokuapp.com/api/characters/house/";

  // effect ls
  useEffect(() => {
    ls.set("data", data);
    ls.set("houseFilter", houseFilter);
    ls.set("characterFilter", characterFilter);
    ls.set("ancestryFilter", ancestryFilter);
  }, [data, houseFilter, characterFilter, ancestryFilter]);

  // effect api
  useEffect(() => {
    if (data.length === 0 || data[0].house.toLowerCase() !== houseFilter) {
      setIsLoading(true);
      callToApi(URL, houseFilter).then((response) => {
        setData(response);
        setIsLoading(false);
      });
    }
  }, [houseFilter]);

  const updateFilter = (obj) => {
    if (obj.key === "characterFilter") {
      setCharacterFilter(obj.value);
    } else if (obj.key === "houseFilter") {
      setHouseFilter(obj.value);
    } else {
      if (ancestryFilter.includes(obj.value)) {
        const cleanFilteredAncestries = ancestryFilter.filter(
          (eachAncestry) => eachAncestry !== obj.value
        );
        setAncestryFilter(cleanFilteredAncestries);
      } else {
        setAncestryFilter([...ancestryFilter, obj.value]);
      }
    }
  };

  const filteredData = data
    .filter((eachCharacter) => {
      return eachCharacter.name
        .toLowerCase()
        .includes(characterFilter.toLowerCase());
    })
    .filter((eachCharacter) => {
      if (ancestryFilter.length === 0) {
        return eachCharacter;
      } else {
        return ancestryFilter.includes(eachCharacter.ancestry);
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const getAncestries = () => {
    const ancestries = data.map((eachCharacter) => eachCharacter.ancestry);
    const uniqueAncestriesObj = new Set(ancestries);
    const uniqueAncestriesArr = [...uniqueAncestriesObj];
    return uniqueAncestriesArr;
  };

  const resetFilters = () => {
    setCharacterFilter("");
    setHouseFilter("gryffindor");
    setAncestryFilter([]);
  };

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
        {/* <Route exact path="/"> */}
        <form
          action=""
          className="main__form"
          onSubmit={(ev) => ev.preventDefault()}
        >
          <div className="main__form--name">
            <CharacterFilter
              characterFilter={characterFilter}
              updateFilter={updateFilter}
            />
            <HouseFilter
              houseFilter={houseFilter}
              updateFilter={updateFilter}
            />
            <Button resetFilters={resetFilters} />
          </div>
          <div className="main__form--ancestry">
            <AncestryFilter
              getAncestries={getAncestries()}
              updateFilter={updateFilter}
              ancestryFilter={ancestryFilter}
            />
          </div>
        </form>
        <ul className="main__character--list">
          <CharacterList isLoading={isLoading} filteredData={filteredData} />
          <Footer />
        </ul>
        {/* </Route> */}
        <Switch>
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
