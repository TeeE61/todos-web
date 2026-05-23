import type React from "react";

export interface IPriority {
  high: "high";
  medium: "medium";
  low: "low";
}

export interface ITodo {
  id: number;
  title: string;
  priority: IPriority;
  completed: boolean;
}

export interface IFilter {
  name: string;
  priority: IPriority | "";
}

export interface ITodoContext {
  todos: ITodo[];
  handleChangeTodos: (newTodos: ITodo[]) => void;
  filter: IFilter;
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>;
  filteredTodos: ITodo[];
}
