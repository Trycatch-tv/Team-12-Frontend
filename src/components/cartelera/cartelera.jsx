import React from "react";
import { BannersMovie } from "../banners/bannerMovie";
import Data from "../../assets/catalogo.json";
import Options from '../../assets/options.json';
import "./cartelra.css";
import "../banners/bannerMovie";

export const CineList = () => {
  return (
    <main className="containerListCartelera">
      <div className="searchSection">
        <input className="searchInput" type="searchInput" />
        <select className="selectInput" name="" id="" placeholder="Genero">
          {Options.map((i) => {
            return (
            i.Genero.map((i) => {
              return (<option value={i}>{i}</option>)
            })
            )
          })}
        </select>
      </div>

      <br />
      <hr />
      <div className="bannerSection">
        {Data.map((i) => {
          return (
            <div className="marcoBanner">
              <BannersMovie img={i.banner} title={i.titulo} />
              <div className="description">
                <p>{i.titulo}</p>
                {i.genero.map(i => <span className="des">{i}</span>)}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
