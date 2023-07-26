import { TopBar } from "@src/components"
import { CTASection } from "./sections/cta"
import { SolutionSection } from "./sections/solutions"
import { SubscribeSection } from "./sections/subscribe"
import { FooterSection } from "./sections/footer"
import TopCryptoSection from "./sections/topCryptons"
import Waves from '@assets/waves.svg'


const LandingPage = () => {

  return (
    <>
    <TopBar />
    <CTASection />
    <img src={Waves} alt="waves" width="100%" height='231em' />
    <SolutionSection />
    <TopCryptoSection />
    <SubscribeSection />
    <FooterSection />
    </>
  )
}

export default LandingPage
