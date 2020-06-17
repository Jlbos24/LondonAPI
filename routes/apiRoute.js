const apiRoute = require("express").Router();
const userRoute = require("./userRoute.js");

apiRoute.use("/users", userRoute);

module.exports = apiRoute;
