const express = require("express");
const uuid = require("uuid");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const users = [];

const idIndex = (req, res, next) => {
  const { id } = req.params;

  const index = users.findIndex((user) => user.id === id);

  if (index < 0) {
    return res.status(404).json({ msg: "User not found" });
  }

  req.userIndex = index;
  req.userId = id;

  next();
};

app.get("/users", (req, res) => {
  return res.json(users);
});

app.post("/users", (req, res) => {
  const { name, age } = req.body;

  const user = { id: uuid.v4(), name, age };

  users.push(user);

  return res.status(201).json(user);
});

app.put("/users/:id", idIndex, (req, res) => {
  const { name, age } = req.body;
  const index = req.userIndex;
  const id = req.userId;

  const updateUser = { id, name, age };

  users[index] = updateUser;

  return res.json(updateUser);
});

app.delete("/users/:id", idIndex, (req, res) => {
  const index = req.userIndex;

  users.splice(index, 1);

  return res.status(204).json();
});

app.listen(3333, () => {
  console.log("server running 🚀");
});
