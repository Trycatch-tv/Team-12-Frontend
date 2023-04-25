import { useRef, useState, useCallback, useMemo } from "react";
import { searchMovies } from "../api/movies";

export const useMovies = ({ search, sort }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const previusSearch = useRef(search);

  const getMovies = useCallback(async ({ search }) => {
    if (search === previusSearch.current) return;
    try {
      setLoading(true);
      setError(null);
      previusSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const sortMovies = useMemo(() => {
    if (sort === "Género") {
      return movies;
    }
    let sortedMovies = [...movies];
    if (sort) {
      sortedMovies = sortedMovies.filter((movie) => {
        return movie.genero.includes(sort);
      });
    }
    return sortedMovies;
  }, [sort, movies]);

  return { movies: sortMovies, getMovies, loading, error };
};
