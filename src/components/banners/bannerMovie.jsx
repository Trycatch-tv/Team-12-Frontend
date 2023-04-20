import "./bannerMovie.css";
import defaultBannerUrl from "../../assets/cinema.jpg";
import { useState, useEffect } from "react";

export const BannersMovie = ({ movies }) => {
  const hasMovies = movies?.length > 0;
  const [bannerUrls, setBannerUrls] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const checkImage = (url, index) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        setBannerUrls((prevBannerUrls) => {
          const newBannerUrls = [...prevBannerUrls];
          newBannerUrls[index] = url;
          return newBannerUrls;
        });
        resolve();
      };
      img.onerror = () => resolve();
      img.src = url;
    });
  };

  useEffect(() => {
    if (hasMovies) {
      const promises = movies.map((movie, index) =>
        checkImage(movie.banner, index)
      );
      Promise.all(promises).then(() => setLoaded(true));
    }
  }, [hasMovies, movies]);

  return (
    <>
      {hasMovies ? (
        <ul className="movies">
          {movies.map((movie, index) => (
            <li className="movie" key={index}>
              <h4>{movie.titulo}</h4>
              <p>{movie.año}</p>
              {loaded && bannerUrls[index] ? (
                <img
                  className="banner 1"
                  src={bannerUrls[index]}
                  alt={movie.titulo}
                />
              ) : (
                <img
                  className="banner 2"
                  src={defaultBannerUrl}
                  alt="Imagen por defecto"
                />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-movies">No hay películas</p>
      )}
    </>
  );
};
