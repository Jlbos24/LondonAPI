const express = require("express");
const server = express();
const apiRoute = require("../routes/apiRoute");
const cors = require("cors");

server.use(cors());
server.use(express.json());

server.use("/api", apiRoute);

// Error handler

module.exports = server;
