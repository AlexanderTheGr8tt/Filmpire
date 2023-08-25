import React, { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { searchMovie } from "../../features/currentGenreOrCategory";

import useStyles from "./styles";

function Search() {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      dispatch(searchMovie(query));
    }
  };

  const handleClick = () => {
    if (query !== "") {
      dispatch(searchMovie(query));
    }
  };

  if (location.pathname !== "/") return null;

  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyUp={handleKeyUp}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon onClick={handleClick} style={{ cursor: "pointer" }} />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default Search;
