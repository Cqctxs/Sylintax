require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");
const mongoose = require("mongoose");
const connectDB = require("./config/connectMongo");

const app = express();
const PORT = 8080;

connectDB();
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/refresh", require("./routes/refresh"));
app.use("/logout", require("./routes/logout"));

app.use("/api/lesson", require("./routes/api/lesson"));
app.use("/api/user", require("./routes/api/user"));

app.use("/", function (req, res) {
  res.json({ error: "endpoint not found" });
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
