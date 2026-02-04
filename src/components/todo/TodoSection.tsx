import { CreateTodoForm } from "./CreateTodoForm";
import { TodoList } from "./TodoList";

export const TodoSection = () => {
  return (
    <div className="main-container main-content">
      <div>
        <CreateTodoForm />
      </div>

      <div className="">
        <TodoList />
      </div>
    </div>
  );
};
