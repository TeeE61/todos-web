import { useTodos } from "../../context/useTodos";
import { DeleteIcon } from "../ui/icon/DeleteIcon";

export const TodoList = () => {
  const { todos } = useTodos();

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`todo-item ${todo.completed ? "completed" : ""}`}
        >
          <div className="todo-item-content">
            <input
              type="checkbox"
              className="todo-checkbox"
              checked={todo.completed}
              readOnly
            />
            <span className="todo-title">{todo.title}</span>
          </div>
          <div className="todo-item-actions">
            <span className={`todo-priority ${todo.priority}`}>
              {todo.priority}
            </span>

            <button
              className="btn-icon"
              // onClick={}
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
