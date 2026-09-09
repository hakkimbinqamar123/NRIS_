import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import HealthInsurance from "./pages/HealthInsurance";
import MotorInsurance from "./pages/MotorInsurance";
import Engineering from "./pages/Engineering";
import Property from "./pages/Property";
import Marine from "./pages/Marine";
import News from "./pages/News";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/health-insurance" element={<HealthInsurance />} />
          <Route path="/motor-insurance" element={<MotorInsurance />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/property" element={<Property />} />
          <Route path="/marine" element={<Marine />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
