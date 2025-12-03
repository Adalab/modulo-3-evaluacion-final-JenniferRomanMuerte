const callToApi = () => {
  // Llamamos a la API
  return fetch("https://hp-api.onrender.com/api/characters/") // Url para hacer la peticion
    .then((response) => response.json())
    .then((response) => {
      // Asignamos response a la variable que queramos
      const personages = response.map((eachPersonage) => {
        return {
          id: eachPersonage.id,
          name: eachPersonage.name,
          species: eachPersonage.species,
          gender: eachPersonage.gender,
          house: eachPersonage.house,
          images: eachPersonage.image,
          alive: eachPersonage.alive,
        };
      });

      return personages;
    });
};

export default callToApi;
