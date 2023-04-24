import { useCallback, useEffect, useState } from "react";
import debounce from "just-debounce-it";
import { Loading } from "@nextui-org/react";
import { useSearch } from "../hooks/useSearch";
import { useMovies } from "../hooks/useMovies";
import { BannersMovie } from "../components/banners/bannerMovie";
import Options from "../assets/options.json";
import "../components/banners/bannerMovie";
import "../styles/CineList.css";

export const CineList = () => {
  const [sort, setSort] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const { search, setQuery, error } = useSearch("");
  const { movies, getMovies, loading } = useMovies({ search, sort });

  useEffect(() => {
    if (!search) {
      getMovies({ search: null });
    }
  }, [getMovies, search]);

  const debonceGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies({ search });
  };

  const handleSort = (genero) => {
    setSort(genero);
  };

  const handleChange = (e) => {
    const newSearch = e.target.value;
    setQuery(newSearch);
    debonceGetMovies(newSearch);
  };

  return (
    <main className="containerListCartelera">
      <form className="searchSection" onSubmit={handleSubmit}>
        <input
          className="searchInput"
          type="text"
          placeholder="Avenger, Start Wars, etc..."
          name="query"
          value={search}
          onChange={handleChange}
          autoComplete="off"
        />
        <select
          className="selectInput"
          name="genero"
          value={selectedOption}
          onChange={(event) => {
            setSelectedOption(event.target.value);
            handleSort(event.target.value);
          }}
          placeholder="Genero"
        >
          {Options.map((option) =>
            option.Genero.map((genero) => (
              <option key={genero} value={genero}>
                {genero}
              </option>
            ))
          )}
        </select>
      </form>
      <br />
      <hr />
      <div className="bannerSection">
        {loading ? <Loading /> : <BannersMovie movies={movies} />}
      </div>
    </main>
  );
};
