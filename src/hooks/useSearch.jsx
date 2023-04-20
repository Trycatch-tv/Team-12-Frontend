import React, { useEffect, useRef, useState } from "react";

export const useSearch = () => {
  const [search, setQuery] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("El campo esta vacio");
      return;
    }

    if (search.length < 3) {
      setError("El campo debe tener al menos 3 caracteres");
      return;
    }

    setError(null);
  }, [search]);
  return { search, setQuery, error };
};
