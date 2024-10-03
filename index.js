const server = require("./api/server");

const port = 9000;

// START YOUR SERVER HERE
server.get("/", (req, res) => {
  res.send("Hello from Express!");
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
