import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Award from "./pages/Award";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Interest from "./pages/Interest";
import Skill from "./pages/Skill";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/award" element={<Award />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
