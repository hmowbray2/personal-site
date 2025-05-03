import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home.tsx";
import { Projects } from "./pages/Projects.tsx";

import { NavBar } from "./components/NavBar.jsx";
import { About } from "./pages/About.js";
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";

function App() {
  return (
    <>
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
