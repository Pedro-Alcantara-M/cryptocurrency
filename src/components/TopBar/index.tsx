import { useContext, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  Link,
  useTheme,
} from "@mui/material";
import { SignInModal } from "../modals/signInModal";
import { SignUpModal } from "../modals/signUpModal";
import Marquee from "react-fast-marquee";
import { ICoinResp, ICoin } from "@src/services/interface";
import { formatToUSD } from "@src/utils";
import Logo from "@assets/logo.svg";
import { GeneralContext } from "@src/context/generalContext";

const pages = ["About us", "Top Cryptos"];

export const TopBar = () => {
  const {coins} = useContext(GeneralContext)
  const theme = useTheme();
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <Container sx={{backgroundColor: 'white'}}>
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
                {pages.map((page, index) => (
                  <Link
                    key={page}
                    href={`#section${index + 1}`}
                    sx={{
                      my: 2,
                      textDecoration: "none",
                      mr: "1.5em",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {page}
                  </Link>
                ))}
              </Box>
            </Box>

            <Box sx={{ display: "flex", ml: "auto" }}>
              <Box sx={{ display: "flex" }}>
                <Marquee
                  pauseOnHover
                  style={{ marginRight: "0.5em", maxWidth: "22.5em" }}
                >
                  {coins?.map((coin: ICoin) => (
                    <Box key={coin.symbol} display={"flex"} mr="1.5em">
                      <Typography variant="subtitle1" mr="0.5em">
                        {`${coin.symbol?.toUpperCase()} `}
                      </Typography>
                      <Typography variant="subtitle1" mr="0.5em">
                        {`${formatToUSD(Number(coin?.price))} `}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color={
                          coin.change &&
                          coin.change > 0
                            ? `${theme.palette.success.contrastText} !important`
                            : `${theme.palette.error.contrastText} !important`
                        }
                      >
                        {`${
                          coin?.change &&
                          coin?.change > 0
                            ? "+"
                            : ""
                        }${coin.change?.toFixed(2)}`}
                      </Typography>
                    </Box>
                  ))}
                </Marquee>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    minWidth: "200px",
                  }}
                >
                  <Button variant="text" onClick={() => setIsSignInOpen(true)}>
                    Sign in
                  </Button>

                  <Button
                    variant="contained"
                    type="button"
                    onClick={() => setIsSignUpOpen(true)}
                    sx={{
                      color: "white !important",
                      borderRadius: "32px",
                      "&.MuiButtonBase-root": {
                        height: "2em !important",
                        ml: "8px",
                      },
                    }}
                  >
                    Sign up
                  </Button>
                </Box>
              </Box>
            </Box>
          </Toolbar>

          {isSignInOpen && (
            <SignInModal open={isSignInOpen} setOpen={setIsSignInOpen} />
          )}

          {isSignUpOpen && (
            <SignUpModal open={isSignUpOpen} setOpen={setIsSignUpOpen} />
          )}
        </Container>
      </AppBar>
    </Container>
  );
};
