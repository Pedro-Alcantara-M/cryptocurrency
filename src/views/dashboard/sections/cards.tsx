import { useContext } from "react";
import { Grid, Box, IconButton, Typography, Button } from "@mui/material";
import { GeneralContext } from "@src/context/generalContext";
import useMediaQuery from "@mui/material/useMediaQuery";
import balanceIcon from "@assets/balance.svg";
import cardGraphic from "@assets/cardgraphic.svg";
import elephant from "@assets/elephant.svg";
import theme from "@src/theme";

export const CardSection = () => {
  const { coins } = useContext(GeneralContext);
  const tablet = useMediaQuery(`(max-width: 770px)`);
  return (
    <Grid container sx={{ mt: "3.5em" }} columnSpacing={4}>
      <Grid item container xs={12} md={12} lg={6}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "50%",
            height: { lg: "7em", md: "4em", sm: "4em", xs: "4em" },
            backgroundColor: "white",
            borderRadius: "8px 0px 0px 8px",
            boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
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
          <Typography variant={tablet ? "subtitle1" : "h4"}>
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
            height: { lg: "7em", md: "4em" },
            backgroundColor: "primary.100",
            borderRadius: "0px 8px 8px 0px",
            boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant={tablet ? "body1" : "h3"}
            sx={{ fontWeight: 700 }}
          >
            $32,256.56
          </Typography>
        </Box>
      </Grid>

      <Grid
        item
        container
        xs={12}
        sm={12}
        md={12}
        lg={6}
        columnSpacing={4}
        sx={{ mt: { xs: 3, sm: 3, md: 3, lg: 0, xl: 0 } }}
      >
        <Grid
          item
          container
          xs={6}
          sx={{ display: "flex", flexDirection: tablet ? "column" : "row" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: tablet ? "100%" : "33%",
              height: "7em",
              backgroundColor: "white",
              borderRadius: tablet ? "8px 8px 0px 0px" : "8px 0px 0px 8px",
              boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="subtitle2" sx={{ p: "0.5em" }}>
              Daily Variation
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{
                display: "flex",
                alignItems: "center",
                mt: "1em",
                alignSelf: "start",
                ml: "0.5em",
              }}
            >
              <img src={coins && coins[0]?.image} width="24px" alt="coin img" />
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  marginLeft: "0.5em",
                }}
              >
                {coins && coins[0] && coins[0]?.symbol?.toUpperCase()}
              </span>
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 400,
                p: "0.5em",
                alignSelf: "start",
                color: `${theme.palette.success.contrastText} !important`,
              }}
            >
              {coins && `${coins[0]?.change?.toFixed(2)}%`}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: tablet ? "100%" : "66%",
              height: "7em",
              backgroundColor: "white",
              borderRadius: "0px 0px 8px 8px",
            }}
          >
            <img src={cardGraphic} alt="card graphics" width="100%" />
          </Box>
        </Grid>

        <Grid item container xs={6}>
          <Box
            sx={{
              height: "7em",
              width: tablet ? "100%" : "50%",
              backgroundColor: "white",
              borderRadius: tablet ? "8px 8px 0px 0px" : "8px 0px 0px 8px",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ p: "0.9375em 1em 1em 0", pl: "1em", fontWeight: 700 }}
            >
              NFT’s NEWS
            </Typography>
            <Typography variant="subtitle2" sx={{ p: "0 1em 0 1em" }}>
              New ElephantX NFT to be lauched!
            </Typography>

            {!tablet && (
              <Button
                variant="text"
                sx={{
                  textTransform: "none",
                  color: `${theme.palette.primary.main} !important`,
                }}
              >
                Read more +
              </Button>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              height: "7em",
              width: tablet ? "100%" : "50%",
              backgroundColor: "white",
              borderRadius: tablet ? "0px 0px 8px 8px" : "0px 8px 8px 0px",
              backgroundImage: `url(${elephant})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
