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
    .catch((error) => {
      console.log(error);
      return next(error);
    });
};

// 1. done get users on city/london/user registered london
// 2. done pass all users through endpoint
// 3. Pass users through - function to calculate dstance
// 3. send it back either with miles key or just return users back
// 4. need tests on calculations
// 5. need central london calcu
