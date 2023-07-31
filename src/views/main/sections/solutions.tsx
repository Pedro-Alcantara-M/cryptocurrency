import { Dispatch, SetStateAction } from "react";
import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import CoinIcon from "@assets/cryptoCurrencyIcon.svg";
import useMediaQuery from "@mui/material/useMediaQuery";

export const SolutionSection = (props: {
  setIsSignUpOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const theme = useTheme();
  const smallDesktop = useMediaQuery(`(max-width:1050px)`);
  const smallScreen = useMediaQuery(`(max-width:650px)`);

  return (
    <Container
      id="section1"
      sx={{
        display: "flex",
        flexDirection: smallDesktop ? "column-reverse" : "row",
        alignItems: "center",
        mt: "7,5em",
        pb: "8.125em",
        maxWidth: "90em !important",
        "&.MuiContainer-root": {
          background:
            "linear-gradient(360deg, rgba(255, 255, 255, 0) 0%, white 100%)",
        },
      }}
    >
      <Box
        maxWidth={smallDesktop ? "100%" : "60%"}
        sx={{
          display: "flex",
          flexDirection: smallScreen ? "row" : "column",
          justifyContent: "center",
          alignItems: "center",
          overflowX: smallScreen ? 'scroll' : 'visible',
        }}
      >
        <Box
          display="flex"
          gap="2em"
          mb={smallScreen ? 0 : "2em"}
          mt={smallDesktop ? smallScreen ? 0 : "8em" : 0}
        >
          <Box
            sx={{
              width: smallScreen ? "200px" : "220px",
              height: "208px",
              borderRadius: "6px",
              backgroundColor: "white",
              border: "#ccc",
              boxShadow: " 0px 12px 24px 0px rgba(0, 0, 0, 0.05)",
              p: "1.5em",
            }}
          >
            <img src={CoinIcon} alt="A crypton coin" />

            <Typography
              variant="body1"
              color="primary.main"
              sx={{
                fontWeight: "bold",
                color: `${theme.palette.primary.main} !important`,
              }}
            >
              For your company
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Crypto Solution
            </Typography>
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </Typography>
          </Box>
          <Box
            sx={{
              width: "220px",
              height: "208px",
              borderRadius: "6px",
              backgroundColor: "white",
              border: "#ccc",
              boxShadow: " 0px 12px 24px 0px rgba(0, 0, 0, 0.05)",
              p: "1.5em",
            }}
          >
            <img src={CoinIcon} alt="A crypton coin" />

            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: `${theme.palette.primary.main} !important`,
              }}
            >
              For your company
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Crypto Solution
            </Typography>
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </Typography>
          </Box>
        </Box>

        <Box display="flex" gap={smallScreen ? '1em' : "2em"} ml={smallScreen ? '16px' :"120px"}>
          <Box
            sx={{
              width: "220px",
              height: "208px",
              borderRadius: "6px",
              backgroundColor: "white",
              border: "#ccc",
              boxShadow: " 0px 12px 24px 0px rgba(0, 0, 0, 0.05)",
              p: "24px",
            }}
          >
            <img src={CoinIcon} alt="A crypton coin" />

            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: `${theme.palette.primary.main} !important`,
              }}
            >
              For your company
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Crypto Solution
            </Typography>
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </Typography>
          </Box>
          <Box
            sx={{
              width: "220px",
              height: "208px",
              borderRadius: "6px",
              backgroundColor: "white",
              border: "#ccc",
              boxShadow: " 0px 12px 24px 0px rgba(0, 0, 0, 0.05)",
              p: "24px",
            }}
          >
            <img src={CoinIcon} alt="A crypton coin" />

            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: `${theme.palette.primary.main} !important`,
              }}
            >
              For your company
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Crypto Solution
            </Typography>
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: smallDesktop ?  smallScreen ? "100%" : "70%" : "40%",
          height: "15em",
          pl: smallScreen ? "0.5em" : "2em",
          visibility: "visible",
          position: "relative",
          gap: smallScreen ? '1em' : 0
        }}
      >
        <Typography
          variant={smallScreen ? "body1" : "h5"}
          sx={{
            fontWeight: "bold",
            alignSelf: "self-start",
            color: `${theme.palette.primary.main} !important`,
          }}
        >
          Lorem ipsum
        </Typography>
        <Typography
          variant={smallScreen ? "h4" : "h1"}
          sx={{ fontWeight: "bold", alignSelf: "self-start" }}
        >
          Lorem ipsum
        </Typography>
        <Typography variant={smallScreen ? "subtitle1" : "body1"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </Typography>

        {!smallDesktop && (
          <Button
            variant="contained"
            onClick={() => props.setIsSignUpOpen(true)}
            sx={{
              boxShadow: "none",
              color: "white !important",
              borderRadius: "2em",
              padding: "14px 24px",
              gap: "10px",
              fontWeight: "bold",
              mt: "32px",
              alignSelf: "self-start",
              "&.MuiButtonBase-root": {
                height: "3em !important",
                width: "11em !important",
              },
            }}
          >
            {"Sign up now".toUpperCase()}
          </Button>
        )}
      </Box>
    </Container>
  );
};
