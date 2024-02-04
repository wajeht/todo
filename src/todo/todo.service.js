export function todoService(db) {
  return {
    updateTodo: (todoId, data) => {
      const todoIndex = db.findIndex((todo) => todo.id === todoId);
      if (todoIndex !== -1) {
        db[todoIndex].text = data.text;
        return { success: true };
      } else {
        return { success: false };
      }
    },
    createTodo: (todoData) => {
      const newTodo = {
        id: todoData.id,
        text: todoData.text
      };
      db.push(newTodo);
      return { success: true };
    },
    getTodo: (todoId) => {
      const todo = db.find((t) => t.id === todoId);
      if (todo) {
        return { success: true, todo };
      } else {
        return { success: false };
      }
    },
    getAllTodos: () => {
      return { success: true, todos: db };
    }
  };
}
