import { createContext, use, useCallback, useMemo, useState } from "react";
import type { IFilter, ITodo, ITodoContext } from "../types/todos";

const defaultTodosValue: ITodo[] = [];
const defaultFilter: IFilter = { name: "", priority: "" };

const TodosContext = createContext<ITodoContext>({
  todos: defaultTodosValue,
  handleChangeTodos: () => {},
  filter: defaultFilter,
  setFilter: () => {},
  filteredTodos: defaultTodosValue,
});

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<ITodo[]>(defaultTodosValue);
  const [filter, setFilter] = useState<IFilter>(defaultFilter);

  const handleChangeTodos = useCallback((newTodos: ITodo[]) => {
    setTodos(newTodos);
  }, []);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      const matchesName = todo.title
        .toLowerCase()
        .includes(filter.name.toLowerCase());
      const matchesPriority = filter.priority
        ? todo.priority === filter.priority
        : true;
      return matchesName && matchesPriority;
    });
  }, [todos, filter]);

  return (
    <TodosContext
      value={{
        todos,
        handleChangeTodos,
        filter,
        setFilter,
        filteredTodos,
      }}
    >
      {children}
    </TodosContext>
  );
};

export const useTodosContext = () => {
  const context = use(TodosContext);

  if (context === undefined) {
    throw new Error("TodosContext was used outside of the TodosProvider");
  }

  return context;
};
