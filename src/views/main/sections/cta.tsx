import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ImageCarousel1 from "@assets/carousel1.svg"
import ImageCarousel2 from "@assets/carousel2.svg"

export const CTASection = () => {
  const theme = useTheme()
  const labels = ["Cryptos", "NFTs", "Games"];
  return (
    <Container sx={{display: 'flex', mb: '3.5em' }}>
      <Box maxWidth="50%"  mt="10em">
        <Typography variant="h1" sx={{ fontWeight: "bold", color: `${theme.palette.primary.main} !important` }}>
          Lorem ipsum dolor sit amet, consectetur
        </Typography>
        <Typography variant="h5" mt="1.5em">
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
            "&.MuiButtonBase-root": {
              height: "3em !important",
              width: "17.375em",
            },
          }}
        >
          {"Sign up now".toUpperCase()}
          <ArrowForwardIcon sx={{ fontSize: "1em" }} />
        </Button>

        <Box sx={{ display: "flex", gap: "2em", mt: "5em" }}>
          {labels.map((label) => (
            <Typography
              variant="h4"
              key={label}
              sx={{
                color: "#FBAB34 !important",
                background: "#FFF6E8",
                p: "4px 16px",
                borderRadius: "4px",
              }}
            >
              {label}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box  mt='6.25em' sx={{display:'flex', maxWidth:"50%", visibility: 'visible', position: 'relative' }}>
        <img src={ImageCarousel1} alt="A happy girl with tablet" />
        <img src={ImageCarousel2} alt="A happy guy with cellphone" style={{position: 'absolute', left: '340px', bottom: '18px'}}/>
      </Box>
     
    </Container>
  );
};
