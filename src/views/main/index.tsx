import { TopBar } from "@src/components";
import { CTASection } from "./sections/cta";
import { SolutionSection } from "./sections/solutions";
import { SubscribeSection } from "./sections/subscribe";
import { FooterSection } from "./sections/footer";
import { Container } from "@mui/material";
import TopCryptoSection from "./sections/topCryptons";
import Waves from "@assets/waves.svg";

const LandingPage = () => {
  return (
    <>
      <TopBar />
      <CTASection />
      <Container  sx={{backgroundColor: 'white', pl: '0px !important', pr: '0px !important'}}>
        <img src={Waves} alt="waves" width="100%" height="231em" />
      </Container>
      <SolutionSection />
      <TopCryptoSection />
      <SubscribeSection />
      <FooterSection />
    </>
  );
};

export default LandingPage;
