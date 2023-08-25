import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

import ToggleColorModeProvider from "./utils/ToggleColorMode.jsx";
import App from "./App.jsx";
import store from "./app/store.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToggleColorModeProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </ToggleColorModeProvider>
  </Provider>
);
