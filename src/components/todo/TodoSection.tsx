import { useEffect } from "react";
import { CreateTodoForm } from "./CreateTodoForm";
import { TodoList } from "./TodoList";
import { useTodos } from "../../hooks/useTodos";

export const TodoSection = () => {
  const { getTodos } = useTodos();

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <div className="main-container main-content">
      <div>
        <CreateTodoForm />
      </div>

      <div>
        <TodoList />
      </div>
    </div>
  );
};
