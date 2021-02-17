import React, { useState, useEffect, Fragment } from "react";
//import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FolderOpenOutlinedIcon from "@material-ui/icons/FolderOpenOutlined";

const useStyles = makeStyles((theme) => ({
  collapse: {
    marginTop: "15px",
    marginBottom: "15px",
  },
  subHeader: {
    color: "#fff",
    lineHeight: "30px",
    fontSize: "12px",
    display: "flex",
  },
  folderIcon: {
    paddingRight: "5px",
    marginTop: "2px",
  },
  nested: {
    paddingLeft: theme.spacing(4),
    color: "rgb(145, 155, 174)",
  },
}));

const ExpandIcon = ({ expanded }) =>
  expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />;

export default function NestedLists() {
  const classes = useStyles();

  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  console.log("TestList", categories);

  useEffect(() => {
    let categories = JSON.parse(localStorage.getItem("categories"));
    console.log("Lista", categories.children[0].children);
    let results = categories.children[0].children;

    const kul = results.map((obj) => ({ ...obj, expanded: false }));

    setCategories(kul);
  }, []);

  useEffect(() => {
    if (categories) {
      setItems(categories);
    }
  }, [categories]);

  const onClick = (index) => () => {
    const newItems = [...items];
    const item = items[index];

    newItems[index] = { ...item, expanded: !item.expanded };
    setItems(newItems);
  };

  return (
    <List>
      {items.map((item, index) => (
        <Fragment key={index}>
          <ListItem button onClick={onClick(index)}>
            <ListItemText primary={item.title} />
            <ExpandIcon expanded={item.expanded} />
          </ListItem>
          <Collapse
            in={item.expanded}
            timeout="auto"
            unmountOnExit
            className={classes.collapse}
          >
            {item.children.map((child) => (
              <List
                key={child.title}
                dense
                component="div"
                disablePadding
                subheader={
                  <ListSubheader
                    disableSticky
                    component="div"
                    className={classes.subHeader}
                    id={child.title}
                  >
                    <FolderOpenOutlinedIcon
                      fontSize="small"
                      className={classes.folderIcon}
                    />
                    <div>{child.title}</div>
                  </ListSubheader>
                }
              >
                {child.pages &&
                  child.pages.map((page) => (
                    <ListItem
                      key={page.title}
                      button
                      className={classes.nested}
                    >
                      <ListItemText primary={page.title} />
                    </ListItem>
                  ))}
              </List>
            ))}
            {item.pages &&
              item.pages.map((page) => (
                <ListItem key={page.title} button className={classes.nested}>
                  <ListItemText primary={page.title} />
                </ListItem>
              ))}
          </Collapse>
        </Fragment>
      ))}
    </List>
  );
}
