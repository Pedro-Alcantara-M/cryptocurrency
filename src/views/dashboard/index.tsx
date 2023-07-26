import { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import logoutIcon from '@assets/logoutIcon.svg'
import sublogo from "@assets/sublogo.svg";
import cryptoCurrencyIcon from "@assets/cryptoCurrencyIcon.svg";
import cryptowallet from "@assets/cryptowallet.svg";
import cicleFlowIcon from "@assets/cicleFlowIcon.svg";
import graphicIcon from "@assets/graphicIcon.svg";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CardSection } from "./sections/cards";

const DashboardView = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
      <ListItem>
        <StyledToolTip title="Lorem Ipsum">
          <IconButton sx={{ width: "2em", height: "2em", p: "1em" }}>
            <img src={cryptowallet} alt="Crypto Wallet" />
          </IconButton>
        </StyledToolTip>
      </ListItem>
      <ListItem>
        <StyledToolTip title="Lorem Ipsum">
          <IconButton sx={{ width: "2em", height: "2em", p: "1em" }}>
            <img src={cicleFlowIcon} alt="Flow coin" />
          </IconButton>
        </StyledToolTip>
      </ListItem>
      <ListItem>
        <StyledToolTip title="Lorem Ipsum">
          <IconButton sx={{ width: "2em", height: "2em", p: "1em" }}>
            <img src={cryptoCurrencyIcon} alt="Crypto Coin" />
          </IconButton>
        </StyledToolTip>
      </ListItem>
      <ListItem>
        <StyledToolTip title="Lorem Ipsum">
          <IconButton sx={{ width: "2em", height: "2em", p: "1em" }}>
            <img src={graphicIcon} alt="Graphic" />
          </IconButton>
        </StyledToolTip>
      </ListItem>
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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="div" sx={{ flexGrow: 1, mt: "0.5em" }}>
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
                  sx={{ height: "1.5em", color: "secondary.main", gap: '1em' }}
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
          open={true ?? isOpen}
          onClose={toggleDrawer(true)}
          sx={{
            position: "unset !important",
            "& .MuiPaper-root.MuiDrawer-paper": {
              mt: "4.6em",
              mb: "4.3em",
              width: "5em",
              height: `calc(100vh - 9.3em)`,
              boxShadow: "none",
              borderTopWidth: "1px",
              borderBottomWidth: "1px",
              borderColor: `${theme.palette.secondary.light}`,
            },
            "& .MuiBackdrop-root.MuiModal-backdrop": {
              display: "none",
              width: "5em",
            },
          }}
        >
          {sideMenuContent()}
        </Drawer>
        <Box sx={{ ml: isOpen ? "5em" : 0 }}>
          <CardSection />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "4em",
          backgroundColor: "white",
          mt: `calc(100vh - 12.49em)`,
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
