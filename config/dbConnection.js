const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGIDB_URL);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("✓ Database Connected...");
});
