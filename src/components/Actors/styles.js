import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  image: {
    maxWidth: "80%",
    borderRadius: "20px",
    objectFit: "cover",
    boxShadow: "0.5em 0.5em 1em",
    display: "flex",
    alignItems: "center",
    // marginBottom: "30px",

    [theme.breakpoints.down("lg")]: {
      alignItems: "center",
      width: "70%",
      marginLeft: "24px",
    },
    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
      margin: "0 auto",
      width: "70%",

      marginBottom: "30px",
    },
  },
}));

// margin-left: -24px
