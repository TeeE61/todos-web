import { useCallback } from "react";
import { useTodosContext } from "../context/useTodosContext";
import type { ITodo } from "../types/todos";

export const useTodos = () => {
  const { todos, handleChangeTodos } = useTodosContext();

  const getTodos = useCallback(() => {
    // Use localStorage to get todos instead of fetch api todos
    const localTodos = localStorage.getItem("todos");

    if (localTodos) {
      const newTodos = JSON.parse(localTodos) as ITodo[];
      handleChangeTodos(newTodos);
    } else {
      handleChangeTodos([]);
    }
  }, [handleChangeTodos]);

  const createTodo = useCallback(
    (todo: ITodo) => {
      const updatedTodos = [...todos, todo];
      handleChangeTodos(updatedTodos);

      // Use localStorage to create todos instead of post api todos
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    },
    [todos, handleChangeTodos],
  );

  const editTodo = useCallback(
    (updatedTodo: ITodo) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo,
      );
      handleChangeTodos(updatedTodos);

      // Use localStorage to edit todos instead of put api todos
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    },
    [todos, handleChangeTodos],
  );

  const deleteTodo = useCallback(
    (id: number) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      handleChangeTodos(updatedTodos);

      // Use localStorage to delete todos instead of delete api todos
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    },
    [todos, handleChangeTodos],
  );

  return {
    todoList: todos,

    getTodos,
    createTodo,
    editTodo,
    deleteTodo,
  };
};
