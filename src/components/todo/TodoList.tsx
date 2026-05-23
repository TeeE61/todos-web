import { useTodos } from "../../hooks/useTodos";
import { useTodosContext } from "../../context/useTodosContext";
import { DeleteIcon } from "../ui/icon/DeleteIcon";

export const TodoList = () => {
  const { editTodo, deleteTodo } = useTodos();
  const { filteredTodos } = useTodosContext();

  if (!filteredTodos || filteredTodos.length === 0) {
    return (
      <div className="todo-list">
        <p>No items in your list.</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {filteredTodos.map((todo) => (
        <div
          key={todo.id}
          className={`todo-item ${todo.completed ? "completed" : ""}`}
        >
          <div className="todo-item-content">
            <input
              type="checkbox"
              className="todo-checkbox"
              checked={todo.completed}
              onChange={() => editTodo({ ...todo, completed: !todo.completed })}
            />
            <span className="todo-title">{todo.title}</span>
          </div>
          <div className="todo-item-actions">
            <span className={`todo-priority ${todo.priority}`}>
              {todo.priority}
            </span>

            <button className="btn-icon" onClick={() => deleteTodo(todo.id)}>
              <DeleteIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
