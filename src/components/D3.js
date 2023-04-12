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
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@material-ui/icons/Search";
import { Grid, Card, CardContent } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
const cards = [
  {
    title: "Card 1",
    description: "Excel",
    logo: "excel.png",
    type: "application/vnd.ms-excel",
  },
  {
    title: "Card 2",
    description: "SQL",
    logo: "sql-server.png",
    type: "application/sql",
  },
  { title: "Card 3", description: "Google sheets", logo: "sheets.png" },
  { title: "Card 4", description: "GitHub", logo: "github-sign.png" },
  { title: "Card 5", description: "Spreadsheets", logo: "spreadsheet.png" },
  { title: "Card 6", description: "CSV", logo: "csv.png", type: "text/csv" },
  {
    title: "Card 7",
    description: "Google analytics",
    logo: "google-analytics.png",
  },
  { title: "Card 8", description: "Shopify", logo: "shopify.png" },
];
const drawerWidth = 350;

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
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };
  const handleCardClick = (card) => {
    if (card.description === "Excel") {
      setOpen(true);
    }
    if (card.description === "Google sheets") {
      setOpen(true);
    }
    if (card.description === "GitHub") {
      setOpen(true);
    }
    if (card.description === "Spreadsheets") {
      setOpen(true);
    }
    if (card.description === "CSV") {
      setOpen(true);
    }
    if (card.description === "Google analytics") {
      setOpen(true);
    }
    if (card.description === "Shopify") {
      setOpen(true);
    }
    if (card.description === "SQL") {
      setOpen(true);
    }
  };
  const handleFileRead = (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      console.log(fileReader.result);
    };
    fileReader.readAsText(file);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // TODO: upload file to server
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };
  // const handleCardClick = (cardType) => {
  //   document.getElementById("fileInput").click();
  // };
  const drawer = (
    <div>
      <List>
        <div>
          <h2 className={classes.h1}>Choose File</h2>
        </div>
        <ListItem
          className={classes.listItem}
          button
          onClick={() => fileInputRef.current.click()}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <DriveFolderUploadIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText} primary="Open files" />

          <input
            className={classes.fileInputElement}
            type="file"
            style={{ display: "none" }}
            onChange={handleFileUpload}
            ref={fileInputRef}
          />
        </ListItem>
        <ListItem className={classes.listItem} button>
          <ListItemIcon className={classes.listItemIcon}>
            <CloudCircleIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText} primary="One Drive" />
        </ListItem>
        <ListItem className={classes.listItem} button>
          <ListItemIcon className={classes.listItemIcon}>
            <CloudUploadIcon />
          </ListItemIcon>
          <ListItemText
            className={classes.listItemText}
            primary="Google Drive"
          />
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
          Connect to Data{" "}
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
      {/* <div className="body"> */}
      <input
        type="file"
        id="fileInput"
        className={classes.fileInput}
        onChange={handleFileRead}
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
                  <CardContent>
                    <img
                      src={card.logo}
                      alt={card.title}
                      style={{
                        width: "30%",
                        height: "60px",
                        marginBottom: "16px",
                        marginLeft: "26px",
                      }}
                    />

                    <Typography color="textSecondary">
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
