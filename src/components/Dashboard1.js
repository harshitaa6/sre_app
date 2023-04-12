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
  { title: "Card 3", description: "APP 3", logo: "documents.png" },
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
export default function ConnectData() {
  const avatarStyle = { backgroundColor: "Black" };
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };
  const handleCardClick = (card) => {
    if (card.description === "APP1") {
      const appData = JSON.parse(localStorage.getItem("app1"));
      console.log(appData);
    }
    if (card.description === "APP2") {
      const appData = JSON.parse(localStorage.getItem("app2"));
      const ids = appData.map((item) => item.id);

      console.log(ids[0]);
    }
    if (card.description === "APP3") {
      const appData = JSON.parse(localStorage.getItem("app3"));
      // console.log(appData);

      const ids = appData.map((item) => item.id);
      console.log("id");
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="body">
      <main>
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
