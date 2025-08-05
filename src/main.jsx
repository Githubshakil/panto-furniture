
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import ShopPage from "./pages/shop/ShopPage.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import 'sweetalert2/dist/sweetalert2.min.css'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<HomePage/>} />
        <Route path="/furniture" element={<div>Furniture</div>} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />

      </Route>
    </Routes>
  </BrowserRouter>
);
