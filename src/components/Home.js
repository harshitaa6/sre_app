import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import AppsIcon from "@material-ui/icons/Apps";
import IconButton from "@material-ui/core/IconButton";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import { Drawer } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(0, 2),
    background: "#002D62",
    color: theme.palette.common.white,
    position: "fixed",
    top: 0,
    width: "98%", // Update width to 100% to cover the entire viewport
    height: "55px",
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    marginRight: theme.spacing(1), // Add some spacing between logo/icon and title
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold", // Add bold font weight to title
  },
  avatar: {
    marginLeft: theme.spacing(1), // Add some spacing between title and avatar
    background: "#1976D2", // Update avatar background color
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: "75vh",
    marginTop: "90px",
    border: "1px solid #000000",
    margin: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    boxShadow: "0px 6px 10px grey", // Add shadow
    borderRadius: theme.spacing(1), // Add border radius
  },
  button: {
    backgroundColor: "#FAC344",

    color: "white",
    // backgroundColor: "#ffd330",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: theme.spacing(2),
    borderRadius: "5px",
    border: "4",
    height: "40px",
    color: "#5f3d1d",
    fontWeight: "bold",
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)",
    "&:hover": {
      backgroundColor: "#E49B32",
    },
  },
  contentContainer: {
    flex: 1,
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    textAlign: "left",
  },
  drawer: {
    width: 240,
    flexShrink: 0,
    alignContent: "left",
  },
  drawerPaper: {
    width: 240,
    backgroundColor: "#F0F8FF",
    alignContent: "left",
  },

  bottomButton: {
    margin: theme.spacing(2),
    textAlign: "left",
  },
  alignLeft: {
    alignItems: "flex-start",
  },
}));

function HomePage() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const avatarStyle = { backgroundColor: "Black" };
  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        open={isOpen}
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          {" "}
          {/* Add className to align text */}
          <Typography variant="h5" align="center">
            DASHBOARDS
          </Typography>
          {/* Logout */}
          <Button
            className={classes.bottomButton}
            startIcon={<ExitToAppIcon />}
            fullWidth
          >
            Logout
          </Button>
          {/* Profile */}
          <Button
            className={classes.bottomButton}
            startIcon={<PersonIcon />}
            fullWidth
          >
            Profile
          </Button>
          {/* Settings */}
          <Button
            className={classes.bottomButton}
            startIcon={<SettingsIcon />}
            fullWidth
          >
            Settings
          </Button>
        </div>

        {/* Add Dashboard */}
      </Drawer>

      <div className={classes.root}>
        <div className={classes.header}>
          <IconButton>
            <AppsIcon
              className={classes.logo}
              onClick={isOpen ? handleDrawerClose : handleDrawerOpen}
            />
          </IconButton>
          <Typography align="left" variant="h6" className={classes.title}>
            SRE Dashboard
          </Typography>
          <Avatar className={classes.avatar} style={avatarStyle}>
            {/* Update avatar to display initials */}
            <Typography variant="subtitle1">SD</Typography>
          </Avatar>
        </div>
      </div>

      <Card className={classes.card} elevation={3}>
        {/* Add elevation prop to specify the shadow level */}
        <div className="background-image"></div>
        <CardContent className={classes.contentContainer}>
          <div className={classes.contentText}>
            <Button
              variant="contained"
              href="/Connect"
              className={classes.button}
            >
              Connect to Data
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default HomePage;
