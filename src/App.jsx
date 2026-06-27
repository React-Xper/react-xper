import { Routes, Route } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import Home from "./pages/Home";
import Showcase from "./pages/Showcase";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Showcase />} />
        <Route path="/components/:id" element={<Showcase />} />
      </Route>
    </Routes>
  );
}
