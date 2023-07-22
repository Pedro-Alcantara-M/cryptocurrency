import { TopBar } from "@src/components"
import { CTASection } from "./sections/cta"
import { SolutionSection } from "./sections/solutions"
import TopCryptoSection from "./sections/topCryptons"
import Waves from '@assets/waves.svg'


const MainView = () => {

  return (
    <>
    <TopBar />
    <CTASection />
    <img src={Waves} alt="waves" width="100%" height='231em' />
    <SolutionSection />
    <TopCryptoSection />
    </>
  )
}

export default MainView
