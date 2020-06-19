const axios = require("axios");
const {
  calcUserDistance,
  findUsersWithinLondon,
} = require("../utils/utils.js");

exports.fetchAllUsers = () => {
  return axios
    .get("https://bpdts-test-app.herokuapp.com/users")
    .then(({ data }) => {
      let users = calcUserDistance(data);
      return users;
    });
};

exports.fetchRegLdnUsers = (allUsers) => {
  return axios
    .get("https://bpdts-test-app.herokuapp.com/city/London/users")
    .then(({ data: users }) => {
      let livingInLondon = calcUserDistance(users);
      let allListedUsers = findUsersWithinLondon(allUsers);

      let usersWithinLondon = [...livingInLondon, ...allListedUsers];

      return usersWithinLondon;
    });
};
