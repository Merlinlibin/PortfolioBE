const app = require("./server");
const PORT = 3000;
try {
    console.log("Connecting to server....");
  app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`)
  );
} catch (error) {
  console.log(error);
}
