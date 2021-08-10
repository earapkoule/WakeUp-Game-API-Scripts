const axios = require("axios");

axios
  .delete("http://localhost:443/calculations")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
