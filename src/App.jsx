import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";



function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h1 className="text-center">Movie App</h1>
        <Routes>
          <Route path="/books" element={<Home />} />
          <Route path="/books/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;