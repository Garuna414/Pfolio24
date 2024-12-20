import Home from "./components/Home";
import ProjectView from "./components/ProjectView";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="overflow-x-hidden bg-gradient-to-br from-[#ffd4d4] to-[#f5f5f5]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/projects/:name" element={<ProjectView />} />
        </Routes>
      </div>
    </Router>
  );
}
