import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/books/${id}`).then((response) => {
      setMovie(response.data);
    });
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
    </div>
  );
}

export default MovieDetail;
