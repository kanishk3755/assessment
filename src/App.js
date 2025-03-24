import './App.css';
import HeroSection from './components/HeroSection';
import MarqueeEffect from './components/MarqueeEffect';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <MarqueeEffect/>
      <Footer/>
    </div>
  );
}

export default App;
