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
import Zendesk from "react-zendesk";
import ScrollToTop from './components/scrollToTop/scrollToTop';

function App() {
  const ZENDESK_KEY="6faefe16-7428-46d5-a5be-83e433735e33"
  const setting = {
    color: {
      theme: "#000"
    },
    launcher: {
      chatLabel: {
        "en-US": "Need Help"
      }
    },
    contactForm: {
      fields: [
        { id: "description", prefill: { "*": "My pre-filled description" } }
      ]
    }
  };
  return (
    <div className="App overflow-hidden">
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
      </Routes>
      </ScrollToTop>
      <Zendesk defer zendeskKey={ZENDESK_KEY} {...setting} onLoaded={() => console.log('is loaded')}/>
    </div>
  );
}

export default App;
