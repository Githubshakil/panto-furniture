import React from "react";
import { Outlet } from "react-router-dom";
import NavbarSection from "./components/NavbarSection";
import FooterSection from "./components/FooterSection";

const App = () => {
  return (
    <>
      <NavbarSection />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <FooterSection/>
    </>
  );
};

export default App;
