import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import CoinIcon from "@assets/cryptoCurrencyIcon.svg";

export const SolutionSection = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: "7,5em",
        pb: "8.125em",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F7F7F7 100%)",
      }}
    >
      <Box maxWidth="60%">
        <Box display="flex" gap="2em" mb="2em">
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

        <Box display="flex" gap="2em" ml="120px">
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
          maxWidth: "40%",
          pl: "2em",
          height: "15em",
          visibility: "visible",
          position: "relative",
        }}
      >
        <Box sx={{ display: "flex", gap: "2em", mt: "5em" }}></Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            alignSelf: "self-start",
            color: `${theme.palette.primary.main} !important`,
          }}
        >
          Lorem ipsum
        </Typography>
        <Typography
          variant="h1"
          sx={{ fontWeight: "bold", alignSelf: "self-start" }}
        >
          Lorem ipsum
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </Typography>
        <Button
          variant="contained"
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
      </Box>
    </Container>
  );
};
