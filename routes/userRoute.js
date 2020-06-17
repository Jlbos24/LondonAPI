const userRoute = require("express").Router();
const { getAllUsers } = require("../controllers/users.js");
const { error405s } = require("../errors/errors");

userRoute.route("/").get(getAllUsers).all(error405s);

module.exports = userRoute;
