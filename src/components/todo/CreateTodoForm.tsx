const priorityOptions = [
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

export const CreateTodoForm = () => {
  return (
    <form className="create-todo-form">
      <input type="text" className="default-input" placeholder="Add new todo" />

      <select className="default-select">
        {priorityOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <button type="submit" className="btn-primary">
        Add
      </button>
    </form>
  );
};
