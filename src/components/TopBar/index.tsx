import {
  Dispatch,
  SetStateAction,
  useContext,
  useState,
  MouseEvent,
} from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  Link,
  useTheme,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { SignInModal } from "../modals/signInModal";
import { SignUpModal } from "../modals/signUpModal";
import Marquee from "react-fast-marquee";
import { ICoin } from "@src/services/interface";
import { formatToUSD } from "@src/utils";
import Logo from "@assets/logo.svg";
import MenuIcon from "@assets/menu.svg";
import { GeneralContext } from "@src/context/generalContext";
import useMediaQuery from "@mui/material/useMediaQuery";

const pages = ["About us", "Top Cryptos"];

export const TopBar = (props: {
  setIsSignUpOpen: Dispatch<SetStateAction<boolean>>;
  isSignUpOpen: boolean;
}) => {
  const { coins } = useContext(GeneralContext);
  const theme = useTheme();
  const smallDesktop = useMediaQuery(
    `(max-width:${theme.breakpoints.values.lg}px)`
  );
  const smallScreen = useMediaQuery(
    `(max-width:${theme.breakpoints.values.sm}px)`
  );

  const mobileScreen = useMediaQuery(`(max-width: 650px)`);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container
      sx={{
        backgroundColor: "white",
        maxWidth: "90em !important",
        pl: "0 !important",
        pr: "0 !important",
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          px: 0,
          backgroundColor: "white",
          boxShadow: "0px 4px 8px 0px rgba(77, 77, 77, 0.1)",
        }}
      >
        <Box>
          <Toolbar
            disableGutters
            sx={{
              borderBottom: smallDesktop
                ? `1px solid ${theme.palette.secondary.light}`
                : "none",
              px: smallDesktop ? "2em" : "7em !important",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={Logo}
                alt="Logo"
                width="124px"
                height="21px"
                style={{ marginRight: "2.5em" }}
              />
              {!mobileScreen && (
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
              )}
            </Box>

            <Box
              sx={{
                display: "flex",
                ml: "auto",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Marquee
                  pauseOnHover
                  style={{ marginRight: "0.5em", maxWidth: "22.5em" }}
                >
                  {coins?.map((coin: ICoin) => (
                    <Box
                      key={coin.symbol}
                      display={{
                        xs: "none",
                        sm: "none",
                        md: "none",
                        lg: "flex",
                      }}
                      mr="1.5em"
                    >
                      <Typography variant="subtitle1" mr="0.5em">
                        {`${coin.symbol?.toUpperCase()} `}
                      </Typography>
                      <Typography variant="subtitle1" mr="0.5em">
                        {`${formatToUSD(Number(coin?.price))} `}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color={
                          coin.change && coin.change > 0
                            ? `${theme.palette.success.contrastText} !important`
                            : `${theme.palette.error.contrastText} !important`
                        }
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        {`${
                          coin?.change && coin?.change > 0 ? "+" : ""
                        }${coin.change?.toFixed(2)}`}
                      </Typography>
                    </Box>
                  ))}
                </Marquee>

                {!mobileScreen ? (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      minWidth: "200px",
                    }}
                  >
                    <Button
                      variant="text"
                      onClick={() => setIsSignInOpen(true)}
                    >
                      Sign in
                    </Button>

                    <Button
                      variant="contained"
                      type="button"
                      onClick={() => props.setIsSignUpOpen(true)}
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
                ) : (
                  <div>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <img src={MenuIcon} alt="Menu icon" />
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem>
                        <Link
                          href="#section1"
                          sx={{
                            textDecoration: "none",
                          }}
                        >
                          About Us
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          href="#section2"
                          sx={{
                            textDecoration: "none",
                          }}
                        >
                          Top Cryptos
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={() => setIsSignInOpen(true)}>
                        Sign In
                      </MenuItem>
                      <MenuItem onClick={() => props.setIsSignUpOpen(true)}>
                        Sign Up
                      </MenuItem>
                    </Menu>
                  </div>
                )}
              </Box>
            </Box>
          </Toolbar>
          <Box
            sx={{
              display: { lg: "none", md: "flex", sm: "flex", xs: "flex" },
              width: "100%",
              justifyContent: "center",
              boxShadow: smallDesktop
                ? "0px 4px 8px 0px rgba(77, 77, 77, 0.1)"
                : "none",
            }}
          >
            <Marquee
              pauseOnHover
              style={{
                marginRight: "0.5em",
                maxWidth: smallScreen ? "90%" : "50%",
              }}
            >
              {coins?.map((coin: ICoin) => (
                <Box
                  key={coin.symbol}
                  display={{ lg: "none", md: "flex", sm: "flex", xs: "flex" }}
                  height={"1.5em"}
                  p="0 !important"
                  mr="1.5em"
                >
                  <Typography
                    variant={smallDesktop ? "subtitle2" : "subtitle1"}
                    mr="0.5em"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    {`${coin.symbol?.toUpperCase()} `}
                  </Typography>
                  <Typography
                    variant={smallDesktop ? "subtitle2" : "subtitle1"}
                    mr="0.5em"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    {`${formatToUSD(Number(coin?.price))} `}
                  </Typography>
                  <Typography
                    variant={smallDesktop ? "subtitle2" : "subtitle1"}
                    color={
                      coin.change && coin.change > 0
                        ? `${theme.palette.success.contrastText} !important`
                        : `${theme.palette.error.contrastText} !important`
                    }
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    {`${
                      coin?.change && coin?.change > 0 ? "+" : ""
                    }${coin.change?.toFixed(2)}`}
                  </Typography>
                </Box>
              ))}
            </Marquee>
          </Box>

          {isSignInOpen && (
            <SignInModal open={isSignInOpen} setOpen={setIsSignInOpen} />
          )}

          {props.isSignUpOpen && (
            <SignUpModal
              open={props.isSignUpOpen}
              setOpen={props.setIsSignUpOpen}
            />
          )}
        </Box>
      </AppBar>
    </Container>
  );
};
