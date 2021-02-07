import logo from './assets/svg/logo.svg';
import './sass/root/index.scss';
import Nav from './components/Navbar';
import Slider from './components/Slider';
import Hero from './components/Hero';
import Promo from './components/Promo';
import Tip from './components/Tip';
import Explore from './components/Explore';

function App() {
  return (
    <div className="containers">
      <Nav />
      <Hero />
      <Promo />
      <Slider />
      <Tip />
      <Explore />
    </div>
  );
}

export default App;
