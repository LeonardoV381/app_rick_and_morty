const axios = require("axios");
const URL= "https://rickandmortyapi.com/api/character/"
const getCharById = (res, id)  => {
  axios
  .get(URL + id)
  .then((response) => {
  
  const {id, name, gender, species, origin, status, image} = response.data
 
  // console.log(response.data.name)
  
  res.writeHead(200, {"Content-Type": "application/json"})
  res.end(JSON.stringify({id, name, gender, species, origin, status, image}));
  }) 
  .catch((reason) => {
    res.writeHead(500, {"Content-Type": "text/plain"});
    res.end(reason.message)
  });
  
};

// getCharById(null, 1);
module.exports = getCharById;