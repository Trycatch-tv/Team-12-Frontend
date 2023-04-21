import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BannerMovieDetails } from "../components/banners/BannerMovieDetails";

export const Pdp = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const moviesCache = localStorage.getItem("moviesCache");
    if (moviesCache) {
      const movies = JSON.parse(moviesCache);
      const selectedMovie = movies.find((movie) => movie.title === id);
      setMovie(selectedMovie);
    }
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return <BannerMovieDetails movies={movie} />;
};
