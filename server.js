// Require Express, Logger, and Mongoose
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Set Port to Default or 3000
const PORT = process.env.PORT || 3000;

// Require the models folder
const db = require("./models");

// Call express by using the app variable
const app = express();

// Use Logger
app.use(logger("dev"));

// Express Items to be used
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Points express to the 'public' folder
app.use(express.static("public"));

// Import route files
app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes"));

// Connects to and create the Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
  });

// Starts the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
