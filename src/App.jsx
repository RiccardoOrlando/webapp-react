import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import GraficLayoutPage from "./pages/GraficLayoutPage";



function App() {
  return (
    <Router>
        <Routes>
          <Route path="/layout" element={<GraficLayoutPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/books/:id" element={<MovieDetail />} />
        </Routes>
    </Router>
  );
}

export default App;