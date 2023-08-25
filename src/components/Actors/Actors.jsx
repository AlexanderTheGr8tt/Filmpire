import React, { useState } from "react";
import { Typography, Button, Grid, Box, CircularProgress } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import { useNavigate, useParams } from "react-router-dom";

import { useGetActorQuery, useGetActorMoviesQuery } from "../../services/TMDB";
import { MovieList, Pagination } from "..";

import useStyles from "./styles";

function Actors() {
  const { id } = useParams();
  const navigate = useNavigate();
  const classes = useStyles();
  const [page, setPage] = useState(1);

  const { data, isFetching, error } = useGetActorQuery(id);
  const { data: actorMovies } = useGetActorMoviesQuery({ id, page });

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          color="primary"
        >
          Go Back
        </Button>
      </Box>
    );
  }
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xl={4} lg={5}>
          <img
            className={classes.image}
            src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`}
            alt={data?.name}
          />
        </Grid>
        <Grid
          item
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
          lg={7}
          xl={8}
        >
          <Typography variant="h2" gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            {data?.biography || "Sorry, no biography yet ..."}
          </Typography>
          <Box marginTop="2rem" display="flex" justifyContent="space-around">
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.imdb.com/name/${data?.imdb_id}/`}
            >
              IMDB
            </Button>
            <Button
              startIcon={<ArrowBack />}
              onClick={() => navigate(-1)}
              color="primary"
            >
              Go Back
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box margin="2rem 0">
        <Typography variant="h2" gutterBottom align="center">
          Movies
        </Typography>
        {actorMovies && <MovieList movies={actorMovies} numberOfMovies={12} />}
        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={actorMovies?.total_pages}
        />
      </Box>
    </>
  );
}

export default Actors;
