import "../../styles/Form.scss";
import CharacterFilter from "./CharacterFilter";
import HouseFilter from "./HouseFilter";
import AncestryFilter from "./AncestryFilter";
import Button from "./Button";

const Form = ({
  characterFilter,
  updateFilter,
  houseFilter,
  resetFilters,
  getAncestries,
  ancestryFilter,
}) => {
  return (
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
        <HouseFilter houseFilter={houseFilter} updateFilter={updateFilter} />
        <Button resetFilters={resetFilters} />
      </div>
      <div className="main__form--ancestry">
        <AncestryFilter
          getAncestries={getAncestries}
          updateFilter={updateFilter}
          ancestryFilter={ancestryFilter}
        />
      </div>
    </form>
  );
};
export default Form;
