import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import HealthInsurance from "./pages/HealthInsurance";
import MotorInsurance from "./pages/MotorInsurance";
import Engineering from "./pages/Engineering";
import Property from "./pages/Property";
import Marine from "./pages/Marine";
import Contact from "./pages/Contact";
import CyberInsurance from "./pages/CyberInsurance";

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/cyber" element={<CyberInsurance />} />
          <Route path="/cyber-insurance" element={<CyberInsurance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
