const CharacterList = ({ filteredData }) => {
  return filteredData.map((eachCharacter, index) => {
    return <li key={index}>{eachCharacter.name}</li>;
  });
};

export default CharacterList;
