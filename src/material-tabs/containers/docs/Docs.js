import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import AppBar from "./AppBar";
//import Tabs from "./Tabs";
import Content from "./Content";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // appBar: {
  //   zIndex: theme.zIndex.drawer + 1,
  // },
}));

const Docs = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar />
      {/* <Tabs /> */}
      <Content />
    </div>
  );
};

export default Docs;
