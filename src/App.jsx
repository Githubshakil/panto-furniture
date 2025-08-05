import React from "react";
import { Outlet } from "react-router-dom";
import NavbarSection from "./components/NavbarSection";
import FooterSection from "./components/FooterSection";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <NavbarSection />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <FooterSection />
    </ThemeProvider>
  );
};

export default App;
