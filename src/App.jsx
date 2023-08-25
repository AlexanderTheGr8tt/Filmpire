import React, { useRef } from "react";

import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import {
  Actors,
  MovieInformation,
  Movies,
  NavBar,
  Profile,
} from "./components/index.js";

import useAlan from "./Alan.jsx";

import useStyles from "./styles.js";

function App() {
  const classes = useStyles();
  const alanBtnContainer = useRef();

  useAlan();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar}></div>
        <Routes>
          <Route exact path="/" element={<Movies />}></Route>
          <Route exact path="/approved" element={<Movies />}></Route>
          <Route exact path="/movie/:id" element={<MovieInformation />}></Route>
          <Route exact path="/actors/:id" element={<Actors />}></Route>
          <Route exact path="/profile/:id" element={<Profile />}></Route>
        </Routes>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
}

export default App;
