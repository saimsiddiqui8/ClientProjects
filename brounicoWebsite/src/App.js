import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Heading from './components/heading/Heading';
import Kidscreen from './components/kidscreen/Kidscreen';
import NavBar from './components/navbar/Navbar';
import Playback from './components/playback/Playback';
import Realscreen from './components/realscreen/Realscreen';
import Small from './components/small/Small';
import Strategy from './components/strategy/Strategy';
import Events from './pages/Events/Events';
import Home from './pages/Home/Home';
import OurCompany from './pages/OurCompany/OurCompany';
import Publications from './pages/Publications/Publications';
import Awards from './pages/awards/Awards';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<OurCompany />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/conferences" element={<Events />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>
      <Footer />






      {/* +++++++++  HOME PAGE  +++++++++ */}
      {/* <div className='banner'>
        <NavBar />
      </div> */}
      {/* <Banner /> */}
      {/*   <section id='mainSection'>
        <Kidscreen />
        <Realscreen />
        <Playback />
      </section>

      <section>
        <Strategy />
      </section>
      <section>
        <Small />
        <Footer />
      </section> */}

      {/* +++++++++ PUBLICATIONS  +++++++++ */}

      {/* <section>
        <div id='mainSection' className='overflow-hidden'>
          <Publications />
          <Footer />
        </div>
      </section> */}



      {/* +++++++++ CONFERENCES  +++++++++ */}
      {/* <section id='mainSection'>
        <Events />
        <Footer />
      </section> */}

      {/* <section id='mainSection'>
        <Awards />
      </section> */}

      {/* <section id='mainSection'>
        <OurCompany />
        <Footer />
      </section> */}
    </div>
  );
}

export default App;
