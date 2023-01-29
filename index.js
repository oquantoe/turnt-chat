const express = require("express");
var http = require("http");
const app = express();
const port = process.env.PORT || 5000;
var server = http.createServer(app);
var io = require("socket.io")(server);

app.use(express.json());

app.route("/").get((req, res) => {
  res.json("Hey there welcome to turnt chat")
});

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("sendMsg", (msg) => {
    console.log("here is message", msg);
  }
});

server.listen(port, "0.0.0.0", () => {
  console.log("server started");
});
