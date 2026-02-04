import { TodosProvider } from "./context/useTodos";
import { HomePage } from "./pages/HomePage";

export const App = () => {
  return (
    <TodosProvider>
      <HomePage />
    </TodosProvider>
  );
};
