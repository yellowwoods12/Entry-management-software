// libraries
import React, { useState } from "react";
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core/styles";

// helpers
import { history, store } from "./helpers";

// components
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Fab } from "@material-ui/core";
import { BrowserRouter, Router } from "react-router-dom";

// icons
import { Highlight, HighlightOutlined } from "@material-ui/icons";

// pages
import { LoginSignup, Dashboard } from "./components/pages";

// routes
import { PrivateRoute, PublicRoute } from "./components/routes";

// themes
const lightTheme = createMuiTheme({
  palette: {
    type: "light" // Switching the dark mode
  }
});
const darkTheme = createMuiTheme({
  palette: {
    type: "dark" // Switching the dark mode
  }
});

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fabHolder: {
      position: "fixed",
      bottom: theme.spacing(1),
      right: theme.spacing(1)
    },
    fab: {
      margin: theme.spacing(1)
    }
  })
);

const App: React.FC = () => {
  const classes = useStyles();

  const [light, setLight] = useState(true);

  history.listen((location, action) => {
    // on location change here
  });

  // change theme mode
  const handleLight = () => {
    setLight(!light);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <MuiThemeProvider theme={light ? lightTheme : darkTheme}>
          <div className="App" style={{ width: "100%" }}>
            <CssBaseline />
            <Router history={history}>
              <PublicRoute exact path="/" component={LoginSignup} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </Router>

            {/* icon holder */}
            <div className={classes.fabHolder}>
              {/* github page for this project */}
              

              {/* toggle light/dark theme   */}
              <Fab
                aria-label="change theme"
                color="secondary"
                className={classes.fab}
                onClick={handleLight}
              >
                {light ? <Highlight /> : <HighlightOutlined />}
              </Fab>
            </div>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
