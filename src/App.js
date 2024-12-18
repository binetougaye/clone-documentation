import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Chiffre from './Components/Chiffres/Chiffre';
import Docs from './Components/Docs/Docs';
import Blocks from './Components/Design_Blocks/Blocks';
import Navigation from './Components/Navigation/Navigation';
import Inputs from './Components/InputAreas/Inputs';
import Catchers from './Components/Catchers/Catchers';
import Elements from './Components/Elements/Elements';
import Sec from './Components/SectionCreativity/Sec';
import SectionCTA from './Components/CTA/SectionCTA';
import SecCard from './Components/SecCard/SecCard';
import Testimony from './Components/Testimonials/Testimony';
import Logo from './Components/Logo/Logo';
import Download from './Components/DownloadSec/Download';
import Language from './Components/Languages/Language';
import Social from './Components/Social/Social';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div >
      <Header />
      <div className="relative top-[-50px]  md:px-12 px-8 md:mx-12 mx-0 bg-white opacity-80 shadow-2xl z-10">
        <Chiffre />
        <Docs />
        <Blocks />
        <Navigation />
        <Inputs />
        <Catchers />
        <Elements />
        <Sec />
        <SectionCTA />
        <SecCard />
        <Testimony />
        <Logo />
        <Download />
        <Language />
        <Social />
      </div>
      <Footer />

    </div>
  );
}

export default App;
