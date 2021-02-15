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
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    top: "48px",
  },
  indicator: {
    backgroundColor: "#fff",
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      //indicatorColor="primary"
      classes={{
        indicator: classes.indicator,
      }}
      //textColor="primary"
      //variant="centered"
      //centered
      aria-label="full width tabs example"
    >
      <Tab label="Postpaid" {...a11yProps(0)} />
      <Tab label="Prepaid" {...a11yProps(1)} />
      <Tab label="Layout" {...a11yProps(2)} />
      <Tab label="Uređaji" {...a11yProps(3)} />
      <Tab label="Mobi Banka" {...a11yProps(4)} />
    </Tabs>
  );

  // return (
  //   // <div className={classes.root}>
  //   //   <AppBar position="fixed" className={classes.appBar} color="primary">
  //       <Tabs
  //         value={value}
  //         onChange={handleChange}
  //         indicatorColor="primary"
  //         classes={{
  //           indicator: classes.indicator,
  //         }}
  //         //textColor="primary"
  //         //variant="centered"
  //         //centered
  //         aria-label="full width tabs example"
  //       >
  //         <Tab label="Postpaid" {...a11yProps(0)} />
  //         <Tab label="Pripaid" {...a11yProps(1)} />
  //         <Tab label="Layout" {...a11yProps(2)} />
  //         <Tab label="Uređaji" {...a11yProps(3)} />
  //         <Tab label="Mobi Banka" {...a11yProps(4)} />
  //       </Tabs>
  //     // /* </AppBar> */
  //     {/* <SwipeableViews
  //       axis={theme.direction === "rtl" ? "x-reverse" : "x"}
  //       index={value}
  //       onChangeIndex={handleChangeIndex}
  //     > */}
  //     {/* <TabPanel value={value} index={0} dir={theme.direction}>
  //       Item One
  //     </TabPanel>
  //     <TabPanel value={value} index={1} dir={theme.direction}>
  //       Item Two
  //     </TabPanel>
  //     <TabPanel value={value} index={2} dir={theme.direction}>
  //       Item Three
  //     </TabPanel>
  //     <TabPanel value={value} index={3} dir={theme.direction}>
  //       Item Four
  //     </TabPanel>
  //     <TabPanel value={value} index={4} dir={theme.direction}>
  //       Item Five
  //     </TabPanel> */}
  //     {/* </SwipeableViews> */}
  //   {/* </div> */}
  // );
}
