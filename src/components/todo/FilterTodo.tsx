import { useEffect, useState } from "react";
import { useTodosContext } from "../../context/useTodosContext";
import { useDebounce } from "../../hooks/useDebounce";
import type { IPriority } from "../../types/todos";

export const FilterTodo = () => {
  const { filter, setFilter } = useTodosContext();

  const [searchTodo, setSearchTodo] = useState<string>("");
  const debouncedSearch = useDebounce(searchTodo, 500);

  useEffect(() => {
    setFilter((prev) => ({ ...prev, name: debouncedSearch }));
  }, [debouncedSearch, setFilter]);

  const handlePriorityChange = (e: string) => {
    setFilter({
      ...filter,
      priority: e as IPriority | "",
    });
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTodo}
        onChange={(e) => setSearchTodo(e.target.value)}
        className="filter-input"
      />
      <button onClick={() => setFilter({ ...filter, name: searchTodo })}>
        Search
      </button>

      <select
        value={filter.priority as string}
        onChange={(e) => handlePriorityChange(e.target.value)}
        className="filter-select"
      >
        <option value="">All priorities</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
};
