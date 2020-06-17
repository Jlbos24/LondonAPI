const axios = require("axios");

exports.fetchAllUsers = () => {
  return axios
    .get("https://bpdts-test-app.herokuapp.com/users")
    .then(({ data }) => {
      return data;
    });
};
