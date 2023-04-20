import "./bannerMovie.css";

export const BannersMovie = ({ movies }) => {
  const hasMovies = movies?.length > 0;

  return (
    <>
      {hasMovies ? (
        <ul className="movies">
          {movies?.map((movie, index) => (
            <li className="movie" key={index}>
              <h4>{movie.titulo}</h4>
              <p>{movie.año}</p>
              <img className="banner" src={movie.banner} alt={movie.Title} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-movies">No hay películas</p>
      )}
    </>
  );
};
