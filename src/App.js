import './App.css';
import Nabvar from './components/views/Nabvar';
import Home from './components/views/Home';
import AdoptNow from './components/views/AdoptNow';
import OurServices from './components/views/OurServices';
import Reviews from './components/views/Reviews';
import Footer from './components/views/Footer';

function App() {
  return (
    <div className="bg-lavenders">
      <Nabvar />
      <Home />
      <AdoptNow />
      <OurServices />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
