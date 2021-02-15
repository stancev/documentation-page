import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
//import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
  heroImage: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.bizlife.rs/wp-content/uploads/2019/10/telenor-spanovic-promo1.jpg)`,
    height: "50vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
  heroText: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    "& button": {
      border: "none",
      outline: 0,
      display: "inline-block",
      padding: "10px 25px",
      color: "black",
      backgroundColor: "#ddd",
      textAlign: "center",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#555",
        color: "white",
      },
    },
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          //variant="centered"
          centered
          aria-label="full width tabs example"
        >
          <Tab component={Link} to="/docs" label="Postpaid" {...a11yProps(0)} />
          <Tab component={Link} to="/docs" label="Pripaid" {...a11yProps(1)} />
          <Tab component={Link} to="/docs" label="Layout" {...a11yProps(2)} />
          <Tab component={Link} to="/docs" label="Uređaji" {...a11yProps(3)} />
          <Tab
            component={Link}
            to="/docs"
            label="Mobi Banka"
            {...a11yProps(4)}
          />
        </Tabs>
      </AppBar>

      <div className={classes.heroImage}>
        <div className={classes.heroText}>
          <h1 style={{ fontSize: "50px" }}>I am John Doe</h1>
          <p>And I'm a Photographer</p>
          <button>Hire me</button>
        </div>
      </div>
    </div>
  );
}
