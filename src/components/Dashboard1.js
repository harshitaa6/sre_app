import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import AddIcon from "@material-ui/icons/Add";
import AppsIcon from "@mui/icons-material/Apps";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import Modal from "react-modal";
import { Box, Avatar } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
const getLocalItmes = () => {
  let list = localStorage.getItem("lists");
  console.log(list);

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};
const appData = JSON.parse(localStorage.getItem("app3"));
const ids = appData.map((item) => item.id);
// console.log(ids[0]);
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    backgroundColor: "#F0F8FF",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(0, 2),
    // background: theme.palette.primary.main,
    color: theme.palette.common.white,
    background: "#002D62",

    position: "fixed",
    top: 0,
    width: "98%",
    height: "55px",
    zIndex: theme.zIndex.drawer + 1,
  },
}));
// function onButtonClick() {
const selectedDashboardName = localStorage.getItem("selectedDashboardName");

// navigate(selectedDashboardName);
// }
const card = (
  <React.Fragment>
    <CardContent
      style={{
        display: "flex",
        height: "330px",
        justifyContent: "start",
        alignItems: "end",
        backgroundColor: "#F0F8FF",
      }}
    >
      {" "}
      <Typography style={{ paddingTop: "10px" }} variant="h6">
        {/* {localStorage.getItem("lists").map((listItem) => {
          if (listItem === selectedDashboardName) {
            return <span key={selectedDashboardName}>{ids[0]}</span>;
          }
          return null;
        })} */}
        {/* {ids[2]} */}
      </Typography>
      {/* <Link href="/Connect"> */}
      <Button
        variant="contained"
        href="/Connect"
        // href={`/Connect/${selectedDashboardName}`}
        style={{ backgroundColor: "#006400" }}
        // onClick={onButtonClick()}
      >
        Add Widget
      </Button>
      {/* </Link> */}
    </CardContent>
  </React.Fragment>
);

function HomePage() {
  const navigate = useNavigate();

  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [dashboards, setDashboards] = useState(getLocalItmes());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDashboard, setSelectedDashboard] = useState("");
  const avatarStyle = { backgroundColor: "Black" };
  const [isOpen, setIsOpen] = useState(true);
  const [selectedDashboardName, setSelectedDashboardName] = useState("");
  const [modals, setModals] = useState([]);
  // useEffect(() => {
  //   const storedModals = localStorage.getItem("modals");
  //   if (storedModals) {
  //     setModals(JSON.parse(storedModals));
  //   }
  // }, []);
  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  const handleAddDashboard = (data) => {
    const newDashboardName = prompt("Enter new dashboard name");
    const newModals = [...modals, data];
    setModals(newModals);
    // localStorage.setItem("modals", JSON.stringify(newModals));
    if (newDashboardName) {
      setDashboards([...dashboards, newDashboardName]);
      // setSelectedDashboard(newDashboardName);
      setModalIsOpen(true);
    }
  };

  const handleDeleteDashboard = (dashboardName) => {
    setDashboards(dashboards.filter((name) => name !== dashboardName));
    if (dashboardName === selectedDashboard) {
      setSelectedDashboard("");
      setModalIsOpen(false);
    }
    // setItems(updateditems);
  };

  const handleRenameDashboard = (dashboardName, newName) => {
    setDashboards(
      dashboards.map((name) => (name === dashboardName ? newName : name))
    );
    if (dashboardName === selectedDashboard) {
      setSelectedDashboard(newName);
      setSelectedDashboardName(newName); // add this line
    }
  };

  const openModal = (dashboardName) => {
    setSelectedDashboard(dashboardName);
    setSelectedDashboardName(dashboardName); // add this line
    setModalIsOpen(true);
    localStorage.setItem("selectedDashboardName", dashboardName);
  };

  const closeModal = () => {
    setSelectedDashboard("");
    setModalIsOpen(false);
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(dashboards));
  }, [dashboards]);

  return (
    <>
      {/* window.location.reload(false); */}
      <div className={classes.root} style={{ backgroundColor: "#F0F8FF" }}>
        <div className={classes.header}>
          <IconButton onClick={isOpen ? handleDrawerClose : handleDrawerOpen}>
            <AppsIcon />
          </IconButton>
          <Typography align="left">SRE Dashboard</Typography>
          <Avatar style={avatarStyle}></Avatar>
        </div>
        {/* <div className={classes.header}>hii</div> */}

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={isOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={() => setOpen(false)}
        >
          <IconButton
            //  onClick={() => setOpen(true)}
            onClick={isOpen ? handleDrawerClose : handleDrawerOpen}
          >
            <CloseIcon />
          </IconButton>
          <div className={classes.toolbar} />

          <List>
            <Typography variant="h5" align="center">
              DASHBOARDS{" "}
            </Typography>
            {Array.isArray(dashboards) &&
              dashboards.map((dashboardName) => (
                <ListItem button key={dashboardName}>
                  <ListItemText
                    onClick={() => openModal(dashboardName)}
                    primary={dashboardName}
                  />
                  <IconButton
                    onClick={() => handleDeleteDashboard(dashboardName)}
                  >
                    <DeleteIcon style={{ color: " #960018" }} />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      const newName = prompt("Enter new name");
                      if (newName) {
                        handleRenameDashboard(dashboardName, newName);
                      }
                    }}
                  >
                    <CreateIcon style={{ color: "#006400" }} />
                  </IconButton>
                </ListItem>
              ))}
          </List>

          <IconButton
            style={{
              borderRadius: "0",
              backgroundColor: "#ACE1AF",
              color: "#006400",
            }}
            onClick={handleAddDashboard}
          >
            <AddIcon />
            <Typography>Add Dashboard</Typography>
          </IconButton>
        </Drawer>
      </div>
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              width: "70%",
              height: "70%",
              top: "50%",
              left: "60%",
              right: "80%",
              bottom: "80%",
              backgroundColor: "#002244",
              color: "white",
              transform: "translate(-50%, -50%)",
            },
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <CloseIcon
                style={{
                  color: "white",
                  marginTop: "1px",
                }}
                onClick={closeModal}
              />
            </IconButton>
            <h3
              style={{
                marginLeft: "10px",
                marginBottom: "10px",
                marginTop: "5px",
              }}
            >
              {selectedDashboard}
            </h3>
          </div>

          {/* <div
            style={{
              border: "1px solid black",
              padding: "160px",
              backgroundColor: "#7CB9E8",
            }}
          > */}
          <Box
            sx={{
              minWidth: 200,
              height: "300",
              display: "Box",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card variant="outlined">{card}</Card>
          </Box>

          {/* </div> */}
        </Modal>
      )}
    </>
  );
}
export default HomePage;
