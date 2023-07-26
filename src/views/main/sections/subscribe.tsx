import { Container, Box, Typography, TextField, Button, useTheme } from "@mui/material";
import waves from "@assets/subscribebackground.svg";

export const SubscribeSection = () => {
  const theme = useTheme()
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "25.75em",
        position: "relative",
        background:
          "linear-gradient(97.85deg, #FBAB34 -5.87%, #AD721A 118.06%)",
      }}
    >
      <img
        src={waves}
        alt="three waves of background"
        width="100%"
        style={{ position: "absolute", bottom: 0, left: 0 }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "24em",
          height: "10.75 !important",
          pl: "2em",
        }}
      >
        <Typography
          variant="h4"
          color={`${theme.palette.primary.light} !important`}
          sx={{ fontWeight: "bold", alignSelf: "self-start", mb: '0.25em'  }}
        >
          Lorem ipsum
        </Typography>
        <Typography
          variant="h1"
          color="white !important"
          sx={{ fontWeight: "bold", alignSelf: "self-start", mb: '1em' }}
        >
          Lorem ipsum
        </Typography>
        <Typography variant="body1" color="white !important">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "24em",
          height: "10.7em !important",
          pl: "2em",
        }}
      >
        <Typography variant="subtitle2" alignSelf="start" color="white !important" mb="0.5em">Email</Typography>
        <TextField
          placeholder="Email"
          sx={{
            backgroundColor: "white",
            borderRadius: '8px',
            width: "100%",
            boxShadow: "0px 12px 24px 0px #0000001A",
            '& .MuiInputBase-root': {
              height: '3em',
            }
          }}
        />

        <Button
          variant="contained"
          sx={{
            color: "white !important",
            borderRadius: "2em",
            padding: "14px 24px",
            gap: "10px",
            fontWeight: "bold",
            mt: "32px",
            alignSelf: "self-start",
            boxShadow: "0px 12px 24px 0px #0000001A",
            "&.MuiButtonBase-root": {
              height: "3em !important",
              width: "100% !important",
            },
          }}
        >
          {"Sign up now".toUpperCase()}
        </Button>
      </Box>
    </Container>
  );
};
