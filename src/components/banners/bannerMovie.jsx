import React from "react";
import Data from "../../assets/catalogo.json";
import "./bannerMovie.css";

export const BannersMovie = ({ img, title }) => {
  return <img className="banner" src={img} alt={title} />;
};
