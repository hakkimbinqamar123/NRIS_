import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import HealthInsurance from "./pages/HealthInsurance";
import MotorInsurance from "./pages/MotorInsurance";
import GeneralInsurance from "./pages/GeneralInsurance";
import News from "./pages/News";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/health-insurance" element={<HealthInsurance />} />
          <Route path="/motor-insurance" element={<MotorInsurance />} />
          <Route path="/general-insurance" element={<GeneralInsurance />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
