const { fetchAllUsers, fetchRegLdnUsers } = require("../models/users");

exports.getAllUsers = (req, res, next) => {
  fetchAllUsers()
    .then((users) => {
      res.status(200).send({ users });
    })
    .catch(next);
};

exports.getLondonUsers = (req, res, next) => {
  fetchAllUsers()
    .then((users) => {
      return fetchRegLdnUsers(users);
    })
    .then((users) => {
      res.status(200).send({ users });
    })
    .catch(next);
};
