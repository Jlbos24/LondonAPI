const axios = require("axios");

exports.fetchAllUsers = () => {
  return axios
    .get("https://bpdts-test-app.herokuapp.com/users")
    .then(({ data }) => {
      return data;
    });
};

exports.fetchRegLdnUsers = (allUsers) => {
  return axios
    .get("https://bpdts-test-app.herokuapp.com/city/London/users")
    .then(({ data: users }) => {
      let registeredLdn = users;
      let allRegisteredUsers = allUsers;

      return {
        ldnRegUsers: [...registeredLdn],
        allRegUsers: [...allRegisteredUsers],
      };
    });
};
