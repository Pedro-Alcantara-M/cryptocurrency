import { useState, ChangeEvent, FormEvent } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
} from "@mui/material";
import { addSubscribe } from "@src/services/subscribe.service";
import { validateEmail } from "@src/utils";
import useMediaQuery from "@mui/material/useMediaQuery";
import waves from "@assets/subscribebackground.svg";

export const SubscribeSection = () => {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const smallScreen = useMediaQuery(`(max-width:650px)`);

  const subscribe = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError(true);
      return;
    }

    setIsLoading(true);
    const response = await addSubscribe(email);

    if (response.status === 201) {
      setEmail("");
    }

    setError(false);
    setIsLoading(false);
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: smallScreen ? "column" : "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "25.75em",
        position: "relative",
        maxWidth: "90em !important",
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
          minWidth: 0,
          maxWidth: "24em",
          height: "10.75 !important",
          pl: "2em",
        }}
      >
        <Typography
          variant={smallScreen ? "body1" : "h4"}
          color={`${theme.palette.primary.light} !important`}
          sx={{ fontWeight: "bold", alignSelf: "self-start", mb: "0.25em" }}
        >
          Lorem ipsum
        </Typography>
        <Typography
          variant={smallScreen ? "h4" : "h1"}
          color="white !important"
          sx={{ fontWeight: "bold", alignSelf: "self-start", mb: "1em" }}
        >
          Lorem ipsum
        </Typography>
        <Typography
          variant={smallScreen ? "subtitle1" : "body1"}
          color="white !important"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </Typography>
      </Box>

      <Box
        component="form"
        onSubmit={subscribe}
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
        <Typography
          variant="subtitle2"
          alignSelf="start"
          color="white !important"
          mb="0.5em"
        >
          Email
        </Typography>
        <TextField
          placeholder="Email"
          value={email}
          required
          disabled={isLoading}
          error={error}
          helperText={error && "invalid email"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          sx={{
            backgroundColor: "white",
            borderRadius: "0.5em",
            width: "100%",
            boxShadow: "0px 12px 24px 0px #0000001A",
            "& .MuiInputBase-root": {
              height: "3em",
              borderRadius: "0.5em",
            },
          }}
        />

        <Button
          variant="contained"
          type="submit"
          disabled={isLoading}
          sx={{
            color: "white !important",
            borderRadius: "2em",
            padding: "14px 24px",
            gap: "10px",
            fontWeight: "bold",
            mt: "32px",
            textTransform: "none",
            alignSelf: "self-start",
            boxShadow: "0px 12px 24px 0px #0000001A",
            "&.MuiButtonBase-root": {
              height: "3em !important",
              width: "100% !important",
            },
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Container>
  );
};
