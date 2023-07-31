import { useState, UIEvent } from "react";
import { TopBar } from "@src/components";
import { CTASection } from "./sections/cta";
import { SolutionSection } from "./sections/solutions";
import { SubscribeSection } from "./sections/subscribe";
import { FooterSection } from "./sections/footer";
import { Container } from "@mui/material";
import TopCryptoSection from "./sections/topCryptons";
import Waves from "@assets/waves.svg";

const LandingPage = () => {
  const [isHorizontalScroll, setIsHorizontalScroll] = useState(true);
  const [isSignUpOpen, setIsSignUpOpen] = useState<boolean>(false);

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const { scrollLeft } = event.currentTarget;
    const scrollThreshold = 200; // Defina o ponto de limite de scroll horizontal aqui

    if (scrollLeft > scrollThreshold) {
      setIsHorizontalScroll(false);
    } else {
      setIsHorizontalScroll(true);
    }
  };
  return (
    <div
      onScroll={handleScroll}
      style={{
        overflowX: isHorizontalScroll ? "scroll" : "hidden",
        overflowY: isHorizontalScroll ? "hidden" : "scroll",
      }}
    >
      <TopBar setIsSignUpOpen={setIsSignUpOpen} isSignUpOpen={isSignUpOpen} />
      <CTASection setIsSignUpOpen={setIsSignUpOpen} />
      <Container
        sx={{
          backgroundColor: "white",
          p: "0px !important",
          maxWidth: "90em !important",
        }}
      >
        <img src={Waves} alt="waves" width="100%" height="231em" />
      </Container>
      <SolutionSection setIsSignUpOpen={setIsSignUpOpen} />
      <TopCryptoSection />
      <SubscribeSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
