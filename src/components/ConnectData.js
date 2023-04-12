import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { CardMedia, Typography } from "@material-ui/core";
import {
  Avatar,
  TextField,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
} from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@material-ui/icons/Search";
import { Grid, Card, CardContent } from "@material-ui/core";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HomePage from "./Home";
const cards = [
  {
    title: "Card 1",
    description: "APP1",
    logo: "documents.png",
    type: "application/vnd.ms-excel",
  },
  {
    title: "Card 2",
    description: "APP2",
    logo: "documents.png",
    type: "application/sql",
  },
  { title: "Card 3", description: "APP3", logo: "documents.png" },
  { title: "Card 4", description: "SQL", logo: "sql-server.png" },
];
const drawerWidth = 350;
const app1 = require("D:/SRE_DASHBOARD/sre_app/src/components/app1.json");
const app2 = require("D:/SRE_DASHBOARD/sre_app/src/components/app2.json");
const app3 = require("D:/SRE_DASHBOARD/sre_app/src/components/app3.json");
const apps = [app1, app2, app3];
apps.forEach((app, index) => {
  const key = `app${index + 1}`;
  localStorage.setItem(key, JSON.stringify(app));
});
const useStyles = makeStyles((theme) => ({
  fileInput: {
    display: "none",
  },
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(0, 2),
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    position: "fixed",
    top: 0,
    width: "97%",
    height: "55px",
    background: "#002D62",
    zIndex: theme.zIndex.drawer + 1,
  },
  h1: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2, 2),
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    position: "fixed",
    top: -30,
    width: "97%",
    height: "44px",
    background: "#002D62",
    zIndex: theme.zIndex.drawer + 1,
    paddingTop: "10px",
    paddingBottom: "15px",
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#F5F5F5",
    paddingTop: theme.spacing(4),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  listItem: {
    marginTop: "15px",
    borderRadius: theme.spacing(10),
    margin: theme.spacing(1, 1),
    backgroundColor: "#FFFFFF",
    padding: theme.spacing(3),
    "&:hover": {
      backgroundColor: "#E0E0E0",
    },
  },
  listItemIcon: {
    minWidth: theme.spacing(4),
  },
  listItemText: {
    color: "#00308F",
  },
  body: {
    overflow: "hidden",
  },
  fileInputElement: {
    marginLeft: theme.spacing(1),
  },
}));

export default function ConnectData() {
  const avatarStyle = { backgroundColor: "Black" };
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedAppData, setSelectedAppData] = useState(null);
  const handleCardClick = (card) => {
    let appData;
    const selectedDashboardName = localStorage.getItem("selectedDashboardName");

    if (card.description === "APP1") {
      appData = JSON.parse(localStorage.getItem("app1"));
    } else if (card.description === "APP2") {
      appData = JSON.parse(localStorage.getItem("app2"));
    } else if (card.description === "APP3") {
      appData = JSON.parse(localStorage.getItem("app3"));
    }

    if (selectedDashboardName) {
      // Check if selectedDashboardName exists
      // Send appData to selectedDashboardName
      // Example: Assuming selectedDashboardName is the key for the selected dashboard
      localStorage.setItem(selectedDashboardName, JSON.stringify(appData));
    } else {
      // If selectedDashboardName does not exist, handle it accordingly
      console.log("No selected dashboard found. Handle it accordingly.");
    }

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };
  const drawer = (
    <div>
      <List>
        <div>
          <h2 className={classes.h1}>App Health Section</h2>
        </div>
        {/* <h3>App Health Section</h3> */}
        <ListItem className={classes.listItem} button>
          <ListItemIcon className={classes.listItemIcon}>
            <Link href="/Home">
              <ArrowBackIosIcon />
            </Link>
          </ListItemIcon>
          <ListItemText
            className={classes.listItemText}
            primary="Availability"
          />
        </ListItem>
        <ListItem className={classes.listItem} button>
          <ListItemIcon className={classes.listItemIcon}>
            <ArrowBackIosIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText} primary="Latency" />
        </ListItem>
        <ListItem className={classes.listItem} button>
          <ListItemIcon className={classes.listItemIcon}>
            <ArrowBackIosIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText} primary="Throughput" />
        </ListItem>
        <ListItem className={classes.listItem} button>
          <ListItemIcon className={classes.listItemIcon}>
            <ArrowBackIosIcon />
          </ListItemIcon>
          <ListItemText
            className={classes.listItemText}
            primary="Error rates"
          />
        </ListItem>
      </List>
    </div>
  );
  const drawer2 = (
    <div>
      <List>
        <div>
          <h2 className={classes.h1}>Connect to SQl</h2>
        </div>
        {/* <h3>App Health Section</h3> */}
        <ListItem className={classes.listItem} button>
          <ListItemIcon className={classes.listItemIcon}>
            <Link href="/Home">
              <ArrowBackIosIcon />
            </Link>
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );
  return (
    <div className="body">
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="right"
        open={open}
        onClose={handleClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {drawer}
        {cards.map((e, index) => {
          console.log(e.description);
        })}
      </Drawer>

      <div className={classes.header}>
        <Link href="/Home">
          <ArrowBackIcon style={{ color: "black" }} />
        </Link>

        <Typography align="left">SRE Dashboard</Typography>
        <Avatar style={avatarStyle}></Avatar>
      </div>
      <div style={{ width: "100%" }}>
        <h2
          style={{
            marginTop: "15vh",
            marginLeft: "5vw",
            display: "inline-block",
          }}
        >
          Connect to App{" "}
          <ArrowForwardIcon
            style={{ verticalAlign: "middle", marginBottom: "0.2em" }}
          />
        </h2>

        <TextField
          label="Search"
          variant="outlined"
          value={query}
          onChange={handleQueryChange}
          InputProps={{
            startAdornment: <SearchIcon />,
            style: { backgroundColor: "#F5F5F5" },
          }}
          style={{ width: "99%", marginLeft: "5px", marginRight: "1px" }}
        />
      </div>
      <TextField
        label="Enter Api key here"
        variant="outlined"
        style={{
          width: "30%",
          marginLeft: "5px",
          marginRight: "1px",
          marginTop: "10px",
        }}
      />
      <main className={classes.content}>
        <Grid container spacing={7.5}>
          {cards
            .filter((card) =>
              card.description.toLowerCase().includes(query.toLowerCase())
            )
            .map((card, index) => (
              <Grid key={index} item xs={3}>
                <Card
                  style={{
                    marginTop: "30px",
                    marginRight: "30px",
                    marginLeft: "30px",
                  }}
                  onClick={() => handleCardClick(card)}
                >
                  <CardContent
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={card.logo}
                      alt={card.title}
                      style={{
                        width: "30%",
                        height: "60px",
                        marginBottom: "16px",
                        marginLeft: "26px",
                        marginRight: "25px",
                      }}
                    />
                    <Typography
                      color="textSecondary"
                      style={{
                        textAlign: "center",
                      }}
                    >
                      {" "}
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </main>
    </div>
  );
}
