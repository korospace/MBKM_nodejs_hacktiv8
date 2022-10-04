const express = require("express");
const router = express.Router();
const TodoController = require('../controllers/Todos');

// Get all todos
router.get('/', TodoController.getTodos);

// Create a todo
router.post('/todo', TodoController.createTodo)

// Update a todo
router.put('/todo/:todoId', TodoController.updateTodo)

// Delete a todo
router.delete('/todo/:todoId', TodoController.deleteTodo)

module.exports = router;

