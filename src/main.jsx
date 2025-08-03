import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/furniture" element={<div>Furniture</div>} />
        <Route path="/shop" element={<div>Shop</div>} />
        <Route path="/about" element={<div>About Us</div>} />
        <Route path="/contact" element={<div>Contact</div>} />

      </Route>
    </Routes>
  </BrowserRouter>
);
