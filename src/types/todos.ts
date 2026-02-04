export interface ITodo {
  id: number;
  title: string;
  priority: "high" | "medium" | "low";
  completed: boolean;
}

export interface ITodoContext {
  todos: ITodo[];
  handleChangeTodos: (newTodos: ITodo[]) => void;
}
