
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const logger = require("morgan");
const connectDB = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const registersRoutes = require("./routes/registersRoutes");
const { errorHandler } = require('./middleware/errorMiddleware');



//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

//Static Folder
// app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(session());

//Use flash messages for errors, info, ect...
// app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use('/api/users', userRoutes);
app.use('/api/registers', registersRoutes);

//Error handdling
app.use(errorHandler);

//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});
