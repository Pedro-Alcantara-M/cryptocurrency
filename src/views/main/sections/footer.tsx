import { Container, Box, Typography, TextField, Button } from "@mui/material";
import Logo from '@assets/logo.svg'

export const FooterSection = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        height: "4em",
        p: '1.5em'
      }}
    >
      <Box>
        <Typography variant="subtitle1">
          Copyright © 2022 - All rights reserved
        </Typography>
      </Box>

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
