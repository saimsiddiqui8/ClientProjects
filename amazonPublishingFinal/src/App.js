import './App.css';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home';
import Portfolio from './pages/portfolios/Portfolios';
import Testimonials from './pages/Testimonials/Testimonials';
import FyraPublishing from './pages/Service/FyraPublishing/FyraPublishing';
import Publishing from './pages/Service/Publishing/Publishing';
import Marketing from './pages/Service/Marketing/Marketing';
import EditingProofreading from './pages/Service/Editing&Proofreading/EditingProofreading';
import WritingPublishing from './pages/Service/Writing&Publishing/WritingPublishing';
import CoverDesign from './pages/Service/CoverDesign/CoverDesign';
import Illustrations from './pages/Service/Illustrations/Illustrations';
import Printing from './pages/Service/Printing/Printing';
import AudiobookNarration from './pages/Service/AudiobookNarration/AudiobookNarration';
import AuthorWebsite from './pages/Service/AuthorWebsite/AuthorWebsite';
import Zendesk, { ZendeskAPI } from "./ZendeskConfig";
import ScrollToTop from './components/scrollToTop/scrollToTop';
import 'react-toastify/dist/ReactToastify.css';
import CookieConsent from "react-cookie-consent";
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { Container } from 'react-bootstrap';


function App() {

  const ZENDESK_KEY = "cc517666-24b5-4482-beed-59673a296456";
  const handleLoaded = () => { };
  return (

    <div className="App overflow-hidden">
      <div>
        <Zendesk defer zendeskKey={ZENDESK_KEY} onLoaded={handleLoaded} />
      </div>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/service/FyraPublishing" element={<FyraPublishing />} />
          <Route path="/service/Publishing" element={<Publishing />} />
          <Route path="/service/Marketing" element={<Marketing />} />
          <Route path="/service/Editing&Proofreading" element={<EditingProofreading />} />
          <Route path="/service/Writing&Publishing" element={<WritingPublishing />} />
          <Route path="/service/CoverDesign" element={<CoverDesign />} />
          <Route path="/service/Illustrations" element={<Illustrations />} />
          <Route path="/service/Printing" element={<Printing />} />
          <Route path="/service/AudiobookNarration" element={<AudiobookNarration />} />
          <Route path="/service/AuthorWebsite" element={<AuthorWebsite />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ScrollToTop>
      <CookieConsent
        style={{ background: "#1B1511" }}
        buttonStyle={{ backgroundColor: "#feb414", fontSize: "16px", borderRadius: "3px" }}
      >
        <Container>
          Amazon Author Solutions is an independent entity helping self-reliant authors with book publishing and marketing solutions. We believe in ethical business practices and abide by US Federal and State Laws.
        </Container>
      </CookieConsent>
    </div>
  );
}

export default App;
