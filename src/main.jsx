import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Estimator from "./pages/Estimator";
import Careers from "./pages/Careers";
import "./App.css";
import OurServices from "./pages/OurServices";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/services" element={<OurServices />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/estimator" element={<Estimator />} />
      <Route path="/apply" element={<div>Apply Online Page</div>} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
