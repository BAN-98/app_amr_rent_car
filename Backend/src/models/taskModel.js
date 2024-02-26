const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    tittle: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "Date", default: Date.now() },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;