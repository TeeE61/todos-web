import { createContext, use } from "react";

const defaultTodosValue = {
  // TODO: Replace with actual todo data
  todos: [
    {
      id: 1,
      title: "Complete project documentation",
      priority: "high",
      completed: false,
    },
    {
      id: 2,
      title: "Review pull requests",
      priority: "medium",
      completed: true,
    },
  ],
};

const TodosContext = createContext(defaultTodosValue);

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  return <TodosContext value={defaultTodosValue}>{children}</TodosContext>;
};

export const useTodos = () => {
  const context = use(TodosContext);

  if (context === undefined) {
    throw new Error("TodosContext was used outside of the TodosProvider");
  }

  return context;
};
