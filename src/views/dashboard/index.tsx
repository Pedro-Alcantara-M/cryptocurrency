import { useState, MouseEvent } from "react";
import { useContext } from "react";
import { AuthContext } from "@src/context/authContext";
import { capitalizeFirstLetter } from "@src/utils";
import { StyledToolTip } from "@components/tooltip";
import {
  Avatar,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  useTheme,
} from "@mui/material";
import logoutIcon from "@assets/logoutIcon.svg";
import sublogo from "@assets/sublogo.svg";
import menuIcon from "@assets/menu.svg";
import cryptoCurrencyIcon from "@assets/cryptoCurrencyIcon.svg";
import cryptowallet from "@assets/cryptowallet.svg";
import cicleFlowIcon from "@assets/cicleFlowIcon.svg";
import arrowLeft from "@assets/arrowLeft.svg";
import graphicIcon from "@assets/graphicIcon.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CardSection } from "./sections/cards";
import { TableSection } from "./sections/table";

const DashboardView = () => {
  const theme = useTheme();
  const { user, logout } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(true);
  const tablet = useMediaQuery(`(max-width: 900px)`);
  const smallScreen = useMediaQuery(`(max-width: 600px)`);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    if (anchorEl) {
      return handleClose();
    }

    return setAnchorEl(event.currentTarget);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        (event as React.KeyboardEvent).key === "Tab"
      ) {
        return;
      }

      setIsOpen(open);
    };

  const sideMenuContent = () => (
    <List>
      <ListItem sx={{ display: "flex", justifyContent: "center" }}>
        <StyledToolTip title="Lorem Ipsum">
          <Button
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "2em",
              height: "2em",
              ml: tablet ? 0 : "10em",
              gap: tablet ? "1em" : 0,
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 400,
              whiteSpace: "nowrap",
            }}
          >
            <img src={cryptowallet} alt="Crypto Wallet" />{" "}
            <span style={{ marginLeft: tablet ? 0 : 40 }}>Lorem Ipsum</span>
          </Button>
        </StyledToolTip>
      </ListItem>
      <ListItem sx={{ display: "flex", justifyContent: "center" }}>
        <StyledToolTip title="Lorem Ipsum">
          <Button
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "2em",
              height: "2em",
              ml: tablet ? 0 : "10em",
              gap: tablet ? "1em" : 0,
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 400,
              whiteSpace: "nowrap",
            }}
          >
            <img src={cicleFlowIcon} alt="Flow coin" />{" "}
            <span style={{ marginLeft: tablet ? 0 : 40 }}>Lorem Ipsum</span>
          </Button>
        </StyledToolTip>
      </ListItem>
      <ListItem sx={{ display: "flex", justifyContent: "center" }}>
        <StyledToolTip title="Lorem Ipsum">
          <Button
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "2em",
              height: "2em",
              ml: tablet ? 0 : "10em",
              gap: tablet ? "1em" : 0,
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 400,
              whiteSpace: "nowrap",
            }}
          >
            <img src={cryptoCurrencyIcon} alt="Crypto Coin" />{" "}
            <span style={{ marginLeft: tablet ? 0 : 40 }}>Lorem Ipsum</span>
          </Button>
        </StyledToolTip>
      </ListItem>
      <ListItem sx={{ display: "flex", justifyContent: "center" }}>
        <StyledToolTip title="Lorem Ipsum">
          <Button
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "2em",
              height: "2em",
              ml: tablet ? 0 : "10em",
              gap: tablet ? "1em" : 0,
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 400,
              whiteSpace: "nowrap",
            }}
          >
            <img src={graphicIcon} alt="Graphic" />{" "}
            <span style={{ marginLeft: tablet ? 0 : 40 }}>Lorem Ipsum</span>
          </Button>
        </StyledToolTip>
      </ListItem>

      {tablet && (
        <ListItem sx={{ display: "flex", justifyContent: "flex-start" }}>
          <StyledToolTip title="Lorem Ipsum">
            <IconButton
              sx={{ ml: "1em", mt: "1em" }}
              onClick={toggleDrawer(false)}
            >
              <img src={arrowLeft} alt="Arrow Left close menu" width="30px" />
            </IconButton>
          </StyledToolTip>
        </ListItem>
      )}
    </List>
  );

  return (
    <Box sx={{ backgroundColor: "transparent" }}>
      <AppBar
        position="static"
        sx={{
          m: 0,
          p: 0,
          width: "100%",
          backgroundColor: "white",
          height: "4em",
          boxShadow: "0px 4px 8px 0px rgba(77, 77, 77, 0.1)",
        }}
      >
        <Toolbar>
          {tablet && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, zIndex: 2000 }}
              onClick={toggleDrawer(!isOpen)}
            >
              <img src={menuIcon} alt="menu icon" />
            </IconButton>
          )}
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              mt: "0.5em",
              textAlign: tablet ? "center" : "inherit",
            }}
          >
            <img src={sublogo} alt="Sublogo" />
          </Typography>
          <div>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                type="button"
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{
                  textTransform: "none",
                  zIndex: 2000,
                }}
              >
                <Avatar
                  sx={{ width: "1.6em", height: "1.6em", mr: "0.5em" }}
                  alt={user?.name}
                  src={user?.photo}
                />
                <Typography variant="subtitle2">
                  {capitalizeFirstLetter(user?.name || "")}
                </Typography>
                <KeyboardArrowDownIcon sx={{ width: "0.5em", ml: "0.1em" }} />
              </Button>
              <Menu
                id="account-menu"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  onClick={() => logout()}
                  sx={{ height: "1.5em", color: "secondary.main", gap: "1em" }}
                >
                  <img src={logoutIcon} alt="logout icon" /> Logout
                </MenuItem>
              </Menu>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
      <Box>
        <Drawer
          anchor="left"
          open={isOpen}
          onClose={toggleDrawer(false)}
          sx={{
            ...(isOpen && !tablet && { position: "unset !important" }),
            "& .MuiPaper-root.MuiDrawer-paper": {
              mt: "4.2em",
              width: tablet ? "14em" : "5em",
              height: `calc(100vh - 8.4em)`,
              boxShadow: "none",
              borderColor: `${theme.palette.secondary.light}`,
            },
            "& .MuiBackdrop-root.MuiModal-backdrop": {
              display: tablet ? "inherit" : "none",
              my: "64px",
            },
          }}
        >
          {sideMenuContent()}
        </Drawer>

        {/* main content  */}

        <Box
          sx={{
            ml: isOpen ? "5em" : 0,
            p: smallScreen ? "1em" : "0 4.32em",
            overflowY: "auto",
            background: smallScreen ? "white" : "inherit",
          }}
        >
          <CardSection />
          <TableSection />
        </Box>

        {/* main content  */}
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          display: "flex",
          alignItems: "center",
          height: "4em",
          backgroundColor: "white",
          p: 0,
          mx: 0,
          mt: `calc(100vh - 45em)`,
          boxShadow: "0px -4px 8px 0px rgba(77, 77, 77, 0.1)",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ textAlign: "center", width: "100%" }}
        >
          Copyright © 2022 - All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default DashboardView;
