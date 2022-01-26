const callToApi = (URL, value) => {
  return fetch(URL + value)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((eachData) => {
        return {
          name: eachData.name,
          alive: eachData.alive,
          gender: eachData.gender,
          house: eachData.house,
          species: eachData.species,
          image: eachData.image,
          ancestry: eachData.ancestry,
          id: Math.floor(Math.random() * 10000),
        };
      });
      return cleanData;
    });
};

export default callToApi;
