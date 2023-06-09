import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import LogoutIcon from "@mui/icons-material/Logout";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

import NightShelterSharpIcon from "@mui/icons-material/NightShelterSharp";

import DatasetIcon from "@mui/icons-material/Dataset";

import ListRoundedIcon from "@mui/icons-material/ListRounded";

import CreditScoreIcon from "@mui/icons-material/CreditScore";

import { Link, useNavigate } from "react-router-dom";

import { Context } from "./Context";

function Navbarpg() {
  const navigate = useNavigate();

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

  const { setBool } = Context();
  const { setBool2 } = Context();
  const { setBool4 } = Context();
  const { bool2 } = Context();
  // const { bool3 } = Context();
  // const { bool4 } = Context();

  const SignOut_user = () => {
    const val = ["authorization", "role", "login status"];

    val.map((item) => localStorage.removeItem(item));

    if (!localStorage.getItem("autorization", "role", "login status")) {
      setBool(false);
      setBool2(false);
      setBool4(false);
      navigate("/login");
    }
  };

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
                  <HomeRoundedIcon style={{ color: "black" }} />
                </ListItemIcon>
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  <ListItemText primary={" Home "} style={{ color: "black" }} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NightShelterSharpIcon style={{ color: "black" }} />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/firstroom"
                >
                  <ListItemText
                    primary={" 5star Room "}
                    style={{ color: "black" }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NightShelterSharpIcon style={{ color: "black" }} />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/secondroom"
                >
                  <ListItemText
                    primary={" 7star Room "}
                    style={{ color: "black" }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NightShelterSharpIcon style={{ color: "black" }} />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/deluxeroom"
                >
                  <ListItemText
                    primary={" Deluxe Room "}
                    style={{ color: "black" }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DatasetIcon style={{ color: "black" }} />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/userdata"
                >
                  <ListItemText
                    primary={" User Data "}
                    style={{ color: "black" }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DatasetIcon style={{ color: "black" }} />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/firstroomdata"
                >
                  <ListItemText
                    primary={" 5star Room Data "}
                    style={{ color: "black" }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DatasetIcon style={{ color: "black" }} />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/secondroomdata"
                >
                  <ListItemText
                    primary={" 7star Room Data "}
                    style={{ color: "black" }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DatasetIcon style={{ color: "black" }} />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/deluxeroomdata"
                >
                  <ListItemText
                    primary={" Deluxe Room Data "}
                    style={{ color: "black" }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CreditScoreIcon style={{ color: "black" }} />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/firstroompaydata"
                >
                  <ListItemText
                    primary={"5star Room Pay Data "}
                    style={{ color: "black" }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CreditScoreIcon style={{ color: "black" }} />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/secondroompaydata"
                >
                  <ListItemText
                    primary={" 7star Room Pay Data "}
                    style={{ color: "black" }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CreditScoreIcon style={{ color: "black" }} />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/deluxeroompaydata"
                >
                  <ListItemText
                    primary={" Deluxe Room Pay Data "}
                    style={{ color: "black" }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon style={{ color: "black" }} />
                </ListItemIcon>
                <ListItemText
                  primary={" Logout "}
                  style={{ color: "black" }}
                  onClick={SignOut_user}
                />
              </ListItemButton>
            </ListItem>
          </List>
        ) : (
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeRoundedIcon style={{ color: "black" }} />
                </ListItemIcon>
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  <ListItemText primary={" Home "} style={{ color: "black" }} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NightShelterSharpIcon style={{ color: "black" }} />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/firstroom"
                >
                  <ListItemText
                    primary={" 5star Room "}
                    style={{ color: "black" }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NightShelterSharpIcon style={{ color: "black" }} />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/secondroom"
                >
                  <ListItemText
                    primary={" 7star Room "}
                    style={{ color: "black" }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NightShelterSharpIcon style={{ color: "black" }} />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/deluxeroom"
                >
                  <ListItemText
                    primary={" Deluxe Room "}
                    style={{ color: "black" }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon style={{ color: "black" }} />
                </ListItemIcon>
                <ListItemText
                  primary={" Logout "}
                  style={{ color: "black" }}
                  onClick={SignOut_user}
                />
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

export default Navbarpg;
