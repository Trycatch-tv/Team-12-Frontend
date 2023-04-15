
import { NavBar } from './components/nav/navBar';
import { CineList } from './components/cartelera/cartelera';
import { Footer } from './components/footer/fotter';
import { Slider } from './components/slider/slider';

function App() {
  return (
    <>
    <NavBar/>
    <Slider/>
    <CineList/>
    <Footer/>
    </>
  );
}

export default App;
