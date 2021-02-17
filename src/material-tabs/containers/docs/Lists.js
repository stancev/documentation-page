import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import FolderIcon from "@material-ui/icons/Folder";
import FolderOpenOutlinedIcon from "@material-ui/icons/FolderOpenOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
    color: "rgb(145, 155, 174)",
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Postpaid" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        style={{ marginTop: "15px", marginBottom: "15px" }}
      >
        <List
          dense
          component="div"
          disablePadding
          subheader={
            <ListSubheader
              disableSticky
              style={{
                color: "#fff",
                lineHeight: "30px",
                fontSize: "12px",
                display: "flex",
              }}
              component="div"
              id="nested-list-subheader"
            >
              <FolderOpenOutlinedIcon
                fontSize="small"
                style={{ paddingRight: "5px", marginTop: "2px" }}
              />
              <div>KARAKTERISTIKE POSTPAID SISTEMA NAPLATE</div>
            </ListSubheader>
          }
        >
          <ListItem button className={classes.nested}>
            <ListItemText primary="Uvod u postpaid za pravna lica" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Biznis portal" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Digititalni servisi" />
          </ListItem>
        </List>
        <List
          dense
          component="div"
          disablePadding
          subheader={
            <ListSubheader
              disableSticky
              style={{
                color: "#fff",
                lineHeight: "30px",
                fontSize: "12px",
                display: "flex",
              }}
              component="div"
              id="nested-list-subheader"
            >
              <FolderOpenOutlinedIcon
                fontSize="small"
                style={{ paddingRight: "5px", marginTop: "2px" }}
              />
              <div>VOICE TARIFNI PAKETI</div>
            </ListSubheader>
          }
        >
          <ListItem button className={classes.nested}>
            <ListItemText primary="Biynis Total i Start paketi" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Tender paket" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Biznis Konekt" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Prodajne aktivnosti" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={false} timeout="auto" unmountOnExit>
        <List
          dense
          component="div"
          disablePadding
          subheader={
            <ListSubheader
              style={{ color: "#fff", lineHeight: "30px", fontSize: "11px" }}
              component="div"
              id="nested-list-subheader"
            >
              KARAKTERISTIKE POSTPAID SISTEMA NAPLATE
            </ListSubheader>
          }
        >
          <ListItem button className={classes.nested}>
            <ListItemText primary="Uvod u postpaid za pravna lica" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Postprodajne aktivnosti" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={false} timeout="auto" unmountOnExit>
        <List
          dense
          component="div"
          disablePadding
          subheader={
            <ListSubheader
              style={{ color: "#fff", lineHeight: "30px", fontSize: "11px" }}
              component="div"
              id="nested-list-subheader"
            >
              KARAKTERISTIKE POSTPAID SISTEMA NAPLATE
            </ListSubheader>
          }
        >
          <ListItem button className={classes.nested}>
            <ListItemText primary="Uvod u postpaid za pravna lica" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Napredna mobilna i fiksna resenja" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={false} timeout="auto" unmountOnExit>
        <List
          dense
          component="div"
          disablePadding
          subheader={
            <ListSubheader
              style={{ color: "#fff", lineHeight: "30px", fontSize: "11px" }}
              component="div"
              id="nested-list-subheader"
            >
              KARAKTERISTIKE POSTPAID SISTEMA NAPLATE
            </ListSubheader>
          }
        >
          <ListItem button className={classes.nested}>
            <ListItemText primary="Uvod u postpaid za pravna lica" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Napredna mobilna i fiksna resenja" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          dense
          component="div"
          disablePadding
          subheader={
            <ListSubheader
              style={{ color: "#fff", lineHeight: "30px", fontSize: "11px" }}
              component="div"
              id="nested-list-subheader"
            >
              KARAKTERISTIKE POSTPAID SISTEMA NAPLATE
            </ListSubheader>
          }
        >
          <ListItem button className={classes.nested}>
            <ListItemText primary="Uvod u postpaid za pravna lica" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Napredna mobilna i fiksna resenja" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          dense
          component="div"
          disablePadding
          subheader={
            <ListSubheader
              style={{ color: "#fff", lineHeight: "30px", fontSize: "11px" }}
              component="div"
              id="nested-list-subheader"
            >
              KARAKTERISTIKE POSTPAID SISTEMA NAPLATE
            </ListSubheader>
          }
        >
          <ListItem button className={classes.nested}>
            <ListItemText primary="Uvod u postpaid za pravna lica" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
