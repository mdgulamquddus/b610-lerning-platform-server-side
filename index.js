const express = require("express");
const cors = require("cors");

const courses = require("./data/courses.json");

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("This web course learning app");
});

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.listen(port, () => {
  console.log(`Web Course Server is runnig on port ${port}`);
});
