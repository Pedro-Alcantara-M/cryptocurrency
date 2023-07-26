import { Grid, Box, IconButton, Typography } from "@mui/material";
import balanceIcon from "@assets/balance.svg";
import cardGraphic from '@assets/cardgraphic.svg'
import theme from "@src/theme";

export const CardSection = () => {
  return (
    <Grid container sx={{ mt: "3.5em" }}>
      <Grid
        item
        container
        xs={6}
        sx={{ boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.1)" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "50%",
            height: "7em",
            backgroundColor: "white",
            borderRadius: "8px 0px 0px 8px",
          }}
        >
          <IconButton
            sx={{ backgroundColor: "primary.100", m: "1.5em 1em 1.5em 1.5em " }}
          >
            <img src={balanceIcon} alt="balance icon" />
          </IconButton>
          <Typography variant="h4">
            Balance in US$
            <Typography
              variant="subtitle2"
              sx={{ color: `${theme.palette.secondary.main} !important` }}
            >
              (approximately)
            </Typography>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            height: "7em",
            backgroundColor: "primary.100",
            borderRadius: "0px 8px 8px 0px",
          }}
        >
          <Typography variant="h3">$32,256.56</Typography>
        </Box>
      </Grid>

      <Grid
        item
        container
        xs={6}
        sx={{ boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.1)" }}
      >
        <Grid item container xs={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "33%",
              height: "7em",
              backgroundColor: "white",
              borderRadius: "8px 0px 0px 8px",
            }}
          >
            <Typography variant="subtitle2">Daily Variation</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "66%",
              height: "7em",
              backgroundColor: "white",
              borderRadius: "0px 8px 8px 0px",
            }}
          >
            <img src={cardGraphic} alt="card graphics" width='100%'/>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box
            sx={{
              height: "7em",
              backgroundColor: "white",
              borderRadius: "8px",
            }}
          >
            <IconButton
              sx={{
                backgroundColor: "primary.100",
                m: "1.5em 1em 1.5em 1.5em ",
              }}
            >
              <img src={balanceIcon} alt="balance icon" />
            </IconButton>
            <Typography variant="h4">
              Balance in US$
              <Typography
                variant="subtitle2"
                sx={{ color: `${theme.palette.secondary.main} !important` }}
              >
                (approximately)
              </Typography>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
