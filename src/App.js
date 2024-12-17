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

function App() {
  return (
    <div >
      <Header />
      <div className="relative top-[-50px] px-12 mx-12 bg-white opacity-80 shadow-2xl z-10">
        <Chiffre />
        <Docs />
        <Blocks />
        <Navigation />
        <Inputs />
        <Catchers />
        <Elements />
      </div>


    </div>
  );
}

export default App;
