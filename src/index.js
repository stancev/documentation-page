import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
//import App from './App';
import SidebarApp from "./multilevel-sidebar/SideBarApp";
import TabsApp from "./material-tabs/TabsApp";
import Docs from "./material-tabs/containers/docs/Docs";

import reportWebVitals from "./reportWebVitals";

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      //main: purple[500],
      //main: "#007bff", // Strapi blue
      main: "#1976d2", // Material UI blue
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <TabsApp />
          </Route>
          <Route path="/docs">
            <Docs />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
