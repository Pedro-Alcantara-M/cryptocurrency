import { Container, Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Logo from "@assets/logo.svg";

export const FooterSection = () => {
  const smallScreen = useMediaQuery(`(max-width:650px)`);
  return (
    <Container
      sx={{
        display: "flex",
        backgroundColor: "white",
        justifyContent: !smallScreen ? "space-between" : "center",
        height: "4em",
        p: "1.5em 7em !important",
        maxWidth: "90em !important",
      }}
    >
      {!smallScreen && (
        <Box>
          <Typography variant="subtitle1">
            Copyright © 2022 - All rights reserved
          </Typography>
        </Box>
      )}

      <Box>
        <img
          src={Logo}
          alt="Logo"
          width="124px"
          height="21px"
          style={{ marginRight: "2.5em" }}
        />
      </Box>
    </Container>
  );
};
