const SIMPLE_CALCULATIONS = require("./data");
const axios = require("axios");

SIMPLE_CALCULATIONS.forEach((calculation) => {
  axios
    .post("http://localhost:443/calculations", calculation)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
