import { Container, Box, Typography, TextField, Button } from "@mui/material";

export const SubscribeSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "25,75em",
        background:
          "linear-gradient(97.85deg, #FBAB34 -5.87%, #AD721A 118.06%)",
      }}
    >
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
          sx={{ fontWeight: "bold", alignSelf: "self-start" }}
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
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: 'center',
          width: "24em",
          height: "10.7em !important",
          pl: "2em",
        }}
      >
        <TextField
          value={"test"}
          placeholder="email"
          sx={{
            backgroundColor: "white",
            /*  height: '2.625em', */
            width: "100%",
            boxShadow: "0px 12px 24px 0px #0000001A",
            borderRadius: "4px",
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
