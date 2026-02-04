import { AppLayout } from "../components/layout/AppLayout";
import { TodoSection } from "../components/todo/TodoSection";
import { WelcomeBanner } from "../components/ui/WelcomeBanner";

export const HomePage = () => {
  return (
    <AppLayout>
      {/* Title */}
      <section>
        <WelcomeBanner />
      </section>

      {/* Main Content todos */}
      <section className="content-center">
        <TodoSection />
      </section>
    </AppLayout>
  );
};
