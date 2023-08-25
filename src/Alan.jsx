import React, { useEffect, useContext } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import { ColorModeContext } from "./utils/ToggleColorMode";
import { fetchToken } from "./utils";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectGenreOrCategory,
  searchMovie,
} from "./features/currentGenreOrCategory";

function useAlan() {
  const { setMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    alanBtn({
      key: import.meta.env.VITE_MY_ALAN_KEY,
      onCommand: ({ command, mode, genres, genreOrCategory, query }) => {
        if (command === "chooseGenre") {
          const foundGenre = genres.find(
            (g) => g.name.toLowerCase() === genreOrCategory.toLowerCase()
          );

          if (foundGenre) {
            navigate("/");
            dispatch(selectGenreOrCategory(foundGenre.id));
          } else {
            // top rated upcoming
            const category = genreOrCategory.startsWith("top")
              ? "top_rated"
              : genreOrCategory;
            navigate("/");
            dispatch(selectGenreOrCategory(category));
          }
        } else if (command === "changeMode") {
          if (mode === "light") {
            setMode("light");
          } else {
            setMode("dark");
          }
          // Call the client code that will react to the received command
        } else if (command === "login") {
          fetchToken();
        } else if (command === "logout") {
          localStorage.clear();
          navigate("/");
        } else if (command === "search") {
          dispatch(searchMovie(query));
        }
      },
    });
  }, []);

  return <div>Aln</div>;
}

export default useAlan;
