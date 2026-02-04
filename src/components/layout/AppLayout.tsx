import React from "react";
import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="main-layout">
      <Header />

      <main className="main-flex-grow">{children}</main>

      <Footer />
    </div>
  );
};
