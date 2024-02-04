
import express from 'express';
const app = express();

const todoService = {
  updateTodo: (todoId, data) => {
    return { success: true };
  },
  createTodo: (todoData) => {
    return { success: true };
  },
  authenticateUser: (credentials) => {
    return { success: true };
  },
};

const logger = {
  info: (message) => {
    console.log(`[INFO] ${message}`);
  },
  error: (message) => {
    console.error(`[ERROR] ${message}`);
  },
};

export function createUpdateTodoHandler(logger, todoService) {
  return (req, res) => {
    const todoId = req.params.todoId;
    const updatedData = req.body;
    const result = todoService.updateTodo(todoId, updatedData);

    if (result.success) {
      logger.info('Todo updated');
      res.send('Todo updated');
    } else {
      logger.error('Failed to update the todo');
      res.status(500).send('Failed to update the todo');
    }
  };
}

export function createCreateTodoHandler(logger, todoService) {
  return (req, res) => {
    const todoData = req.body;
    const result = todoService.createTodo(todoData);

    if (result.success) {
      logger.info('Todo created');
      res.send('Todo created');
    } else {
      logger.error('Failed to create the todo');
      res.status(500).send('Failed to create the todo');
    }
  };
}

app.post('/todos/:todoId/update', createUpdateTodoHandler(logger, todoService));
app.post('/todos/create', createCreateTodoHandler(logger, todoService));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
