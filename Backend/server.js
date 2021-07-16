const express = require("express");
const server = express();

const dotenv = require("dotenv").config({ path: "./config/config.env" });
const db = require("./config/db");

const PORT = process.env.PORT || 8180;

const users = require("./routes/users");

//Connect to mongoose database
db();

server.use(express.json());
// Accesibility middleware
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "*"); // Indica que permite el ingreso de todos los metodos
  res.header("Access-Control-Allow-Origin", "*"); // Solo recibe peticiones de la URL indicada
  res.header("Access-Control-Allow-Credentials", "true"); // Setea en true las credenciales de las peticiones
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Use of route
server.use("/api/users", users);

//Open server
server.listen(PORT, () => {
  console.log("$$$ Listening at port " + PORT);
});
