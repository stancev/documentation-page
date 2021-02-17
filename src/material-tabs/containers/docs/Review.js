import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    //backgroundColor: "aqua",
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <div style={{ backgroundColor: "white" }}>
        <Typography paragraph>Oceni</Typography>
      </div>
      <div style={{ backgroundColor: "white" }}> */}
      <Typography className={classes.margin} paragraph>
        Oceni stranicu
      </Typography>
      <IconButton
        color="primary"
        aria-label="like"
        className={classes.margin}
        size="small"
      >
        <ThumbUpIcon fontSize="default" />
      </IconButton>
      <IconButton
        aria-label="dont-like"
        className={classes.margin}
        size="small"
      >
        <ThumbDownIcon fontSize="default" />
      </IconButton>
      {/* </div> */}
    </div>
  );
}
