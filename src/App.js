import './App.css';
import HeroSection from './components/HeroSection';
import MarqueeEffect from './components/MarqueeEffect';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <MarqueeEffect/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
