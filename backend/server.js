import express from "express";
import data from "./data.js";
const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app._router.get("/api/products", (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port} `);
});
