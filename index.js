const express = require("express");
const cors = require("cors");

const courses = require("./data/courses.json");
const blogs = require("./data/blogs.json");

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("This web course learning app");
});

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.get("/blogs", (req, res) => {
  res.json(blogs);
});

app.get("/course/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedCourse = courses.find((course) => course.id === id);
  res.json(selectedCourse);
});

app.listen(port, () => {
  console.log(`Web Course Server is runnig on port ${port}`);
});
