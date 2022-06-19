import { useEffect, useState } from "react";
import '../App.css';
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const apiUrl = 'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year';
  const getMovies = async () => {
    const json = await (await fetch(apiUrl)).json();
    const movies = json.data.movies;
    setMovies(movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie 
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
