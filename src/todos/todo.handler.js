export function updateTodoHandler(logger, todoService) {
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

export function createTodoHandler(logger, todoService) {
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

export function getTodoHandler(logger, todoService) {
  return (req, res) => {
    const todoId = req.params.todoId;
    const result = todoService.getTodo(todoId);

    if (result.success) {
      logger.info('Todo fetched');
      res.json(result.todo);
    } else {
      logger.error('Failed to fetch the todo');
      res.status(500).send('Failed to fetch the todo');
    }
  };
}

export function getAllTodosHandler(logger, todoService) {
  return (req, res) => {
    const result = todoService.getAllTodos();

    if (result.success) {
      logger.info('Todos fetched');
      res.json(result.todos);
    } else {
      logger.error('Failed to fetch todos');
      res.status(500).send('Failed to fetch todos');
    }
  };
}
