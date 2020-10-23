const createServer = require("./server");

const app = createServer();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.info("\n---- server listen on port: " + PORT + " ----");
  console.info("\x1b[36m%s\x1b[0m", "\nhttp://localhost:" + PORT + "\n");
});
