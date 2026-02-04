import { Toaster } from "react-hot-toast";
import { TodosProvider } from "./context/useTodosContext";
import { HomePage } from "./pages/HomePage";

export const App = () => {
  return (
    <>
      <Toaster />
      <TodosProvider>
        <HomePage />
      </TodosProvider>
    </>
  );
};
