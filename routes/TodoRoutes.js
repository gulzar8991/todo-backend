const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

// GET all todos
router.get("/", todoController.getAllTodos);

// GET a single todo by ID
router.get("/:id", todoController.getTodoById);

// CREATE a new todo
router.post("/", todoController.createTodo);

// UPDATE a todo by ID
router.put("/:id", todoController.updateTodo);

// DELETE a todo by ID
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
