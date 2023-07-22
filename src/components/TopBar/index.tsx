import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
} from "@mui/material";
// import useTheme from "@mui/material";
import Logo from "@assets/logo.svg";

const pages = ["About us", "Top Cryptos"];

export const TopBar = () => {
  //const theme = useTheme();
  const [, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={Logo}
              alt="Logo"
              width="124px"
              height="21px"
              style={{ marginRight: "2.5em" }}
            />

            <Box sx={{ display: "flex" }}>
              {pages.map((page) => (
                <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2 }}>
                  {page}
                </Button>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: "flex", ml: "auto" }}>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "360px",
                }}
              >
                <Typography variant="subtitle1">BIT</Typography>
                <Typography variant="subtitle1">{"R$ 23,62"}</Typography>
                <Typography variant="subtitle1">{"+ 7,082"}</Typography>
                <Typography variant="subtitle1">BIT</Typography>
                <Typography variant="subtitle1">{"R$ 23,62"}</Typography>
                <Typography variant="subtitle1" color="tertiary">
                  {"R$ 23,62"}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Button>Sign in</Button>

                <Button
                  variant="contained"
                  sx={{
                    color: "white !important",
                    borderRadius: "32px",
                    "&.MuiButtonBase-root": { height: "2em !important", ml: '8px' },
                  }}
                >
                  Sign up
                </Button>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
