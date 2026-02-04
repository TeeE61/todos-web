import { useCallback } from "react";
import { useTodos } from "../../hooks/useTodos";
import toast from "react-hot-toast";

const priorityOptions = [
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

export const CreateTodoForm = () => {
  const { todoList, createTodo } = useTodos();

  const handleAddTodo = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      const form = e.currentTarget.form;
      if (!form) return;

      if (!form["todo-title"].value) {
        toast.error("Please enter a todo title.");
        return;
      }

      createTodo({
        id: todoList.length + 1,
        title: form["todo-title"].value,
        priority: form["todo-priority"].value,
        completed: false,
      });
      toast.success("Todo created successfully.");
    },
    [createTodo, todoList.length],
  );

  return (
    <form className="create-todo-form">
      <input
        id="todo-title"
        type="text"
        className="default-input"
        placeholder="Add new todo"
      />

      <select id="todo-priority" className="default-select">
        {priorityOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <button onClick={handleAddTodo} className="btn-primary">
        Add
      </button>
    </form>
  );
};
