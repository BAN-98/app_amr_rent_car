const { Router } = require("express");
const authRequired = require("../middlewares/validateToken");
const {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.controller");
const { createTaskSchema } = require("../schemas/taskSchema");
const { validateSchema } = require("../middlewares/validatorMiddleware");

const router = Router();
router.get("/", (req, res) => {
  res.redirect("/");
});
router.get("/tasks", authRequired, getTasks);
router.get("/tasks/:id", authRequired, getTask);
router.post(
  "/tasks",
  authRequired,
  validateSchema(createTaskSchema),
  createTask
);
router.delete("/tasks/:id", authRequired, deleteTask);
router.put("/tasks/:id", authRequired, updateTask);

module.exports = router;
