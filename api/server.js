const express = require("express");
const cors = require("cors");

const authRouter = require("./routes/authRoutes");
const vocabRouter = require("./routes/vocabRoutes");
const profileRouter = require("./routes/profileRoutes");

const server = express();

server.use(express.json());
server.use(cors());

server.use("/auth", authRouter);
server.use("/vocab", vocabRouter);
server.use("/profile", profileRouter);

server.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

server.get("/", (req, res) => {
  res.send(`Welcome to my mongoDB and Rest API!!`);
});

module.exports = server;
