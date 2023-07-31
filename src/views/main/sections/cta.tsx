import { Dispatch, SetStateAction, useRef, useEffect } from "react";
import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ImageCarousel1 from "@assets/carousel1.svg";
import ImageCarousel2 from "@assets/carousel2.svg";
import useMediaQuery from "@mui/material/useMediaQuery";

export const CTASection = (props: {
  setIsSignUpOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const theme = useTheme();
  const labels = ["Cryptos", "NFTs", "Games"];
  const smallDesktop = useMediaQuery(
    `(max-width:${theme.breakpoints.values.lg}px)`
  );
  const tablet = useMediaQuery(`(max-width:1000px)`);
  const smallScreen = useMediaQuery(`(max-width:900px)`);
  const mobileScreen = useMediaQuery(`(max-width:600px)`);
  const carouselRef = useRef<HTMLDivElement>(null);

  const carouselItems: JSX.Element[] = [
    <img
      src={ImageCarousel1}
      alt="A happy girl with tablet"
      width={tablet ? "350px" : "inherit"}
    />,
    <img
      src={ImageCarousel2}
      alt="A happy guy with cellphone"
      width={tablet ? "350px" : "inherit"}
    />,
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!carouselRef.current) return;

      const carouselRect = carouselRef.current.getBoundingClientRect();
      const isCarouselVisible =
        carouselRect.top >= 0 &&
        carouselRect.left >= 0 &&
        carouselRect.right <= window.innerWidth &&
        carouselRect.bottom <= window.innerHeight;

      if (isCarouselVisible) {
        const carouselScrollLeft = carouselRef.current.scrollLeft;
        const carouselWidth =
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        const scrollLeftStep = 70;

        if (carouselScrollLeft < carouselWidth) {
          carouselRef.current.scrollLeft += scrollLeftStep;
        } else {
          // Carousel is fully scrolled, continue scrolling down the page
          window.scrollBy(0, 0); // Adjust the vertical scrolling step as needed
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        pb: "3.5em",
        backgroundColor: "white",
        overflowX: "hidden",
        maxWidth: "90em !important",
        overFlowY: window.innerHeight >= 670 ? "visible" : "scroll",
        px: smallDesktop ? "1.5em !important" : "7em !important",
        "& .MuiContainer-root": {
          minWidth: "20em !important",
        },
      }}
    >
      <Box maxWidth={smallScreen ? "100" : "50%"} mt={tablet ? "5em" : "10em"}>
        <Typography
          variant={smallDesktop ? (mobileScreen ? "h5" : "h3") : "h1"}
          sx={{
            fontWeight: "bold",
            wordBreak: "break-word",
            textAlign: smallScreen ? "center" : "inherit",
            color: `${theme.palette.primary.main} !important`,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur
        </Typography>
        <Typography
          variant={smallDesktop ? (mobileScreen ? "subtitle1" : "body1") : "h5"}
          mt="1.5em"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </Typography>

        <Box sx={{ textAlign: mobileScreen ? "center" : "inherit" }}>
          <Button
            variant="contained"
            onClick={() => props.setIsSignUpOpen(true)}
            sx={{
              textAlign: "center",
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
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: mobileScreen ? "center" : "inherit",
            gap: "2em",
            mt: "5em",
          }}
        >
          {labels.map((label) => (
            <Typography
              variant={mobileScreen ? "subtitle2" : "h4"}
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
      <Box
        ref={carouselRef}
        mt={tablet ? "5em" : "6.25em"}
        sx={{
          display: smallScreen ? "none" : "flex",
          width: "50%",
          overflowX: "scroll",
          '&::-webkit-scrollbar': { display: 'none' }
        }}
      >
        {carouselItems}
      </Box>
    </Container>
  );
};
