// routes/todo.js
const express = require('express');
const { createTodo, getTodos, updateTodo, deleteTodo } = require('../controllers/todoController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getTodoById } = require('../controllers/todoController');

router.use(authMiddleware);

router.post('/', createTodo);
router.get('/', getTodos);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.get('/:id', getTodoById);

module.exports = router;
