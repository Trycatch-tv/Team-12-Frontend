import defaultBannerUrl from "../../assets/cinema.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./bannerMovie.css";

export const BannerMovieDetails = ({ movies }) => {
  const hasMovies =
    typeof movies === "object" &&
    movies !== null &&
    Object.keys(movies).length > 0;

  const [bannerUrl, setBannerUrl] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const checkImage = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        setBannerUrl(url);
        resolve();
      };
      img.onerror = () => resolve();
      img.src = url;
    });
  };

  useEffect(() => {
    if (hasMovies) {
      checkImage(movies.poster_url).then(() => setLoaded(true));
    }
  }, [hasMovies, movies]);

  return (
    <>
      {hasMovies ? (
        <ul className="movies details">
          <li className="movie">
            <h4>{movies.title}</h4>
            {loaded && bannerUrl ? (
              <img className="banner 1" src={bannerUrl} alt={movies.titulo} />
            ) : (
              <img
                className="banner 2"
                src={defaultBannerUrl}
                alt="Imagen por defecto"
              />
            )}
          </li>
          <li className="info">
            <p>Director: {movies.director}</p>
            <p>Fecha de lanzamiento: {movies.release_date}</p>
            <p>Sinopsis: {movies.sinopsis}</p>
          </li>
        </ul>
      ) : (
        <p className="no-movies">No hay películas</p>
      )}
    </>
  );
};