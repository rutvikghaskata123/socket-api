const { Server } = require("socket.io");

const io = new Server(4000, {
  cors: true,
});

io.on("connection", (socket) => {
  console.log("A client connected");
  socket.on("on-stake", (data) => {
    io.emit("on-stake", data);
  });
  socket.on("on-reset", () => {
    io.emit("on-reset");
  });
  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });
});
