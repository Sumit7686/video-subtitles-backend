const express = require("express");
const cors = require("cors");
const path = require("path");
const routes = require("./router");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 5500;

// for db connection
require("./config/dbConnection");

app.use(cors());
app.use(express.json());
app.use("./public", express.static(path.join(__dirname, "public")));
// global.appRoot = path.resolve(__dirname);

// API Health check
app.all("/api/health-check", (req, res) =>
  res.status(200).json({
    status: 200,
    message: `Working Fine`,
  })
);
// Routes initialization
routes(app);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
