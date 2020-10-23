const axios = require("axios");

const serviceToGetLocation = () => {
  return axios.get(
    "http://ip-api.com/json/?lang=es&fields=country,region,city"
  );
};

module.exports = serviceToGetLocation;
