import React from "react";
import { Outlet } from "react-router-dom";
import NavbarSection from "./components/NavbarSection";
import FooterSection from "./components/FooterSection";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <NavbarSection />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <FooterSection />
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
