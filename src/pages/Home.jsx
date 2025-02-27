import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/books").then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/books/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;