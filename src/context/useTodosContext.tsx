import { createContext, use, useCallback, useState } from "react";
import type { ITodo, ITodoContext } from "../types/todos";

const defaultTodosValue: ITodo[] = [];

const TodosContext = createContext<ITodoContext>({
  todos: defaultTodosValue,
  handleChangeTodos: () => {},
});

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<ITodo[]>(defaultTodosValue);

  const handleChangeTodos = useCallback((newTodos: ITodo[]) => {
    setTodos(newTodos);
  }, []);

  return (
    <TodosContext value={{ todos, handleChangeTodos }}>{children}</TodosContext>
  );
};

export const useTodosContext = () => {
  const context = use(TodosContext);

  if (context === undefined) {
    throw new Error("TodosContext was used outside of the TodosProvider");
  }

  return context;
};
