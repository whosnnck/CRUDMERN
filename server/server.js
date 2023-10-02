require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db");

const app = express();
const PORT = process.env.PORT || 8080

//Database connection
connection();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
	res.locals.path = req.path;
	next();
});

//Routes
app.use("/api/CRUD", crudRoutes);

//Listeting port
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
