import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BannerMovieDetails } from "../components/banners/BannerMovieDetails";
import { getMovieId } from "../api/getMovieId";

export const Pdp = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieId(id)
      .then((selectedMovie) => setMovie(selectedMovie))
      .catch((error) => console.log(error));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return <BannerMovieDetails movie={movie} />;
};
