import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Chiffre from './Components/Chiffres/Chiffre';

function App() {
  return (
    <div >
      <Header />
      <div className="relative top-[-50px] mx-12 bg-white opacity-80 h-40 shadow-2xl z-10">
        <Chiffre />
      </div>


    </div>
  );
}

export default App;
