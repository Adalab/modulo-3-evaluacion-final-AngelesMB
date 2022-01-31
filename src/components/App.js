import "../styles/App.scss";
import { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ls from "../services/localStorage";
import callToApi from "../services/api";
import Header from "./Header";
import Form from "./Form/Form";
import CharacterList from "./List/CharacterList";
import CharacterDetail from "./CharacterDetail";
import ErrorDetail from "./ErrorDetail";
import Footer from "./Footer";

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
  const [statusFilter, setStatusFilter] = useState(true);
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

  // handle filter changes: set states
  const updateFilter = (obj) => {
    if (obj.key === "characterFilter") {
      setCharacterFilter(obj.value);
    } else if (obj.key === "houseFilter") {
      setHouseFilter(obj.value);
    } else if (obj.key === "statusFilter") {
      if (obj.value === "alive") {
        setStatusFilter(true);
      } else {
        setStatusFilter(false);
      }
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

  // filter data
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
    .filter((eachCharacter) => {
      if (statusFilter) {
        return eachCharacter.alive;
      } else {
        return !eachCharacter.alive;
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  // get ancestries from data
  const getAncestries = () => {
    const ancestries = data.map((eachCharacter) => eachCharacter.ancestry);
    const uniqueAncestriesObj = new Set(ancestries);
    const uniqueAncestriesArr = [...uniqueAncestriesObj];
    return uniqueAncestriesArr;
  };

  // reset
  const resetFilters = () => {
    setCharacterFilter("");
    setHouseFilter("gryffindor");
    setAncestryFilter([]);
  };

  // get selected route info: character house + character id
  const routeData = useRouteMatch("/character/:house/:characterId");
  const routeId = routeData ? routeData.params.characterId : null;
  const routeHouse = routeData ? routeData.params.house : houseFilter;
  // if houses do not match, re-fetch to get selected house data
  if (routeHouse !== houseFilter) {
    setHouseFilter(routeHouse);
  }

  // render character detail component or error message
  const renderCharacterDetail = () => {
    // once the data matches the selected house, find selected character id
    const foundCharacter = data.find(
      (eachCharacter) => eachCharacter.id === routeId
    );
    const characterDetailHtml =
      foundCharacter === undefined ? (
        <ErrorDetail />
      ) : (
        <CharacterDetail selectedCharacter={foundCharacter} />
      );
    return characterDetailHtml;
  };

  return (
    <div>
      <Header />
      <main className="main">
        <Form
          characterFilter={characterFilter}
          updateFilter={updateFilter}
          houseFilter={houseFilter}
          statusFilter={statusFilter}
          resetFilters={resetFilters}
          getAncestries={getAncestries()}
          ancestryFilter={ancestryFilter}
        />
        <ul className="main__character--list">
          <CharacterList isLoading={isLoading} filteredData={filteredData} />
          <Footer />
        </ul>
        <Switch>
          <Route exact path="/character/:house/:characterId">
            {renderCharacterDetail()}
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
