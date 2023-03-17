import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import HowToRegIcon from "@mui/icons-material/HowToReg";

import NightShelterSharpIcon from "@mui/icons-material/NightShelterSharp";
import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";

import DatasetIcon from "@mui/icons-material/Dataset";

import ListRoundedIcon from "@mui/icons-material/ListRounded";

import CreditScoreIcon from "@mui/icons-material/CreditScore";

import { Link } from "react-router-dom";

import { Context } from "./Context";

export default function Navbarpg() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const { bool2 } = Context();
  // const { bool3 } = Context();
  // const { bool4 } = Context();

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{ backgroundColor: "rgb(162, 179, 139)", height: "100vh" }}>
        {bool2 === true ? (
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeRoundedIcon />
                </ListItemIcon>
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  <ListItemText primary={" Home "} />
                </Link>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HowToRegIcon />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/registration"
                >
                  <ListItemText primary={" Registration "} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ExitToAppTwoToneIcon />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/login"
                >
                  <ListItemText primary={" Login "} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NightShelterSharpIcon />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/firstroom"
                >
                  <ListItemText primary={" 5star Room "} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NightShelterSharpIcon />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/secondroom"
                >
                  <ListItemText primary={" 7star Room "} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NightShelterSharpIcon />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/deluxeroom"
                >
                  <ListItemText primary={" Deluxe Room "} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DatasetIcon />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/userdata"
                >
                  <ListItemText primary={" User Data "} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DatasetIcon />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/firstroomdata"
                >
                  <ListItemText primary={" 5star Room Data "} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DatasetIcon />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/secondroomdata"
                >
                  <ListItemText primary={" 7star Room Data "} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DatasetIcon />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/deluxeroomdata"
                >
                  <ListItemText primary={" Deluxe Room Data "} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CreditScoreIcon />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/firstroompaydata"
                >
                  <ListItemText primary={"5star Room Pay Data "} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CreditScoreIcon />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/secondroompaydata"
                >
                  <ListItemText primary={" 7star Room Pay Data "} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CreditScoreIcon />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/deluxeroompaydata"
                >
                  <ListItemText primary={" Deluxe Room Pay Data "} />
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
        ) : (
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeRoundedIcon />
                </ListItemIcon>
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  <ListItemText primary={" Home "} />
                </Link>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HowToRegIcon />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/registration"
                >
                  <ListItemText primary={" Registration "} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ExitToAppTwoToneIcon />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/login"
                >
                  <ListItemText primary={" Login "} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NightShelterSharpIcon />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/firstroom"
                >
                  <ListItemText primary={" 5star Room "} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NightShelterSharpIcon />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/secondroom"
                >
                  <ListItemText primary={" 7star Room "} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NightShelterSharpIcon />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/deluxeroom"
                >
                  <ListItemText primary={" Deluxe Room "} />
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
        )}
      </div>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            style={{ color: "white" }}
            onClick={toggleDrawer(anchor, true)}
          >
            {<ListRoundedIcon />}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
