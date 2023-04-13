import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Button, CardMedia, Typography } from "@material-ui/core";
import { Avatar, TextField, Link } from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./ConnectData.css";
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

  button: {
    backgroundColor: "#EE9949",

    color: "#5f3d1d",
    // backgroundColor: "#ffd330",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: theme.spacing(2),
    borderRadius: "5px",
    border: "4",
    height: "50px",
    fontWeight: "bold",
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)",
    "&:hover": {
      backgroundColor: "#be7a3a",
    },
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
  const [apiKey, setApiKey] = useState("");

  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
  };

  const handleConnectClick = () => {
    if (apiKey.trim() !== "") {
      // Do something with the API key and navigate to the dashboard
      window.location.href = "/home";
    }
  };

  return (
    <div className="body">
      <div className={classes.header}>
        <Typography align="left" variant="h6" className={classes.title}>
          SRE Dashboard
        </Typography>
        <Avatar className={classes.avatar} style={avatarStyle}>
          {/* Update avatar to display initials */}
          <Typography variant="subtitle1">SD</Typography>
        </Avatar>
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
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="data-background-image"></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "2rem",
            alignItems: "center",
            alignContent: "center",
            width: "50vw",
            marginBottom: "70%",
          }}
        >
          <TextField
            label="Enter API key here"
            variant="outlined"
            style={{
              width: "70%",
              marginTop: "80px",
            }}
            value={apiKey}
            onChange={handleApiKeyChange}
          />
          <Button
            variant="contained"
            href="/home"
            className={classes.button}
            disabled={apiKey.trim() === ""}
            onClick={handleConnectClick}
          >
            Connect to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
