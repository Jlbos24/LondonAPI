const userRoute = require("express").Router();
const { getAllUsers } = require("../controllers/users.js");

//405 error handler

// get all users
userRoute.route("/").get(getAllUsers);

module.exports = userRoute;
