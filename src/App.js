import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProjectView from "./components/ProjectView";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter basename="/Pfolio24">
      <div className="overflow-x-hidden">
        <div>
          <Navbar />
        </div>
        <div className="overflow-x-hidden mt-[68px] bg-gradient-to-br from-[#ffd4d4] to-[#f5f5f5]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/projects/:name" element={<ProjectView />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
