const express = require("express");
const server = express();
const apiRoute = require("../routes/apiRoute");
const cors = require("cors");
const { error404s, error405s, serverErrors } = require("../errors/errors");

server.use(cors());
server.use(express.json());

server.use("/api", apiRoute);

server.use(error404s);
server.use(error405s);
server.use(serverErrors);

module.exports = server;
