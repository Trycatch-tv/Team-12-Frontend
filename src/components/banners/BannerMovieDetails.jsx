import defaultBannerUrl from "../../assets/cinema.jpg";
import { useState, useEffect } from "react";

import "./bannerMovie.css";

export const BannerMovieDetails = ({ movie }) => {
  console.log("BannerMovieDetails:", movie);
  const hasMovies =
    typeof movie === "object" &&
    movie !== null &&
    Object.keys(movie).length > 0;

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
      checkImage(movie.poster_url).then(() => setLoaded(true));
    }
  }, [hasMovies, movie]);


  return (
    <>
      {hasMovies ? (
        <ul className="movies details">
          <li className="movie">
            <h4>{movie.title}</h4>
            {loaded && bannerUrl ? (
              <img className="banner 1" src={bannerUrl} alt={movie.titulo} />
            ) : (
              <img
                className="banner 2"
                src={defaultBannerUrl}
                alt="Imagen por defecto"
              />
            )}
          </li>
          <li className="info">
            <p>Director: {movie.director}</p>
            <p>Fecha de lanzamiento: {movie.release_date}</p>
            <p>Sinopsis: {movie.sinopsis}</p>
          </li>
        </ul>
      ) : (
        <p className="no-movies">No hay películas</p>
      )}
    </>
  );
};
