const express = require("express");
const app = express();
const cors = require("cors");
const emailRouter = require("./controllers/emailController");

app.use(cors());
app.use(express.json());
app.use("/api/email", emailRouter);

module.exports = app;
