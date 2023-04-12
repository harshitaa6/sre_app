import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  CardMedia,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Link,
} from "@material-ui/core";
import { Avatar, Grid, Card, CardContent } from "@material-ui/core";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@material-ui/icons/Search";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const cards = [
  {
    title: "Card 1",
    description: "Excel",
    logo: "excel.png",
  },
];

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ConnectData() {
  const classes = useStyles();
  const avatarStyle = { backgroundColor: "Black" };
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCardClick = (card) => {
    if (card.description === "Excel") {
      setOpen(true);
    }
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
  const drawer = (
    <div>
      <List>
        <ListItem button onClick={() => fileInputRef.current.click()}>
          <ListItemIcon>
            <CloudUploadIcon />
          </ListItemIcon>
          <ListItemText primary="Upload file" />
          <input
            type="file"
            style={{ display: "none" }}
            onChange={handleFileUpload}
            ref={fileInputRef}
          />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
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
      <main className={classes.content}>
        <Grid container spacing={8}>
          {cards
            .filter((card) =>
              card.description.toLowerCase().includes(query.toLowerCase())
            )
            .map((card, index) => (
              <Grid key={index} item xs={3}>
                <Card onClick={() => handleCardClick(card)}>
                  <CardContent>
                    <img src={card.logo} alt={card.title} />

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
