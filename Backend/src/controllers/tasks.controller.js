const Task = require("../models/taskModel");

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id }).populate("user");
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const { tittle, description, date } = req.body;

  const newTask = new Task({ tittle, description, date, user: req.user.id });

  const savedTask = await newTask.save();
  res.json(savedTask);
};

exports.getTask = async (req, res) => {
  const task = await Task.findById(req.params.id).populate("user");
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  return res.sendStatus(204);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
};

