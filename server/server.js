const express = require("express");
const { connect } = require("./connect");
const { router } = require("./routes"); // Importez le router correctement

const app = express();

connect();
app.use(express.json());
app.use("/", router); // Utilisez le router correctement

app.get("/", (req, res) => {
  res.send("Hello, welcome to my server!");
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
