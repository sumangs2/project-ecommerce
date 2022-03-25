import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready"); //res = response
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port} `);
});
