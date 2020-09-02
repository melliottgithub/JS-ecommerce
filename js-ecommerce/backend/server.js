const express = require("express");
const data = require("./data.js");
const cors = require("cors");

const app = express();
app.use(cors());
app.get("/products", (req, res) => {
  res.send(data.results);
});
app.get("/products/:id", (req, res) => {
  const product = data.results.find(x => x.id ===  );
  //const product =
    // data.results.find((x)
    //   => x.name === req.params.name);
// data.results
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});
app.listen(5000, () => {
  console.log("serve at http://localhost:5000");
});
