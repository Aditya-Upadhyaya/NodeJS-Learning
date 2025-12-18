const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

app.listen(port, () => {
  console.log(`App is running on port - ${port}`);
});

const health = (req, res) => {
  res.send({ code: "0000", messsage: "Health" });
};

const getToutById = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  const tour = data.find((ele) => ele.id === id);
  res.status(200).send({ code: "0000", messsage: "Sucess", data: tour });
};

const updateTour = (req, res) => {
  // req.body contains the parsed JSON data
  console.log(req.body);
  res.status(201).json({ message: "User created", user: req.body });
};

const data = JSON.parse(fs.readFileSync("tours-simple.json"));

// app.get("/api/v1/tours", health);
// app.get("/api/v1/tours/:id", getToutById);
// // POST route that uses JSON middleware
// app.post("/api/v1/tours", updateTour);

app.route("/api/v1/tours").get(health).post(updateTour);
app.route("/api/v1/tours/:id").get(getToutById);
