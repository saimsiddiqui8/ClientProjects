import './App.css';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home';
import Portfolio from './pages/portfolios/Portfolios';
import Publishing from './pages/Service/Publishing/Publishing';
import Marketing from './pages/Service/Marketing/Marketing';
import EditingProofreading from './pages/Service/Editing&Proofreading/EditingProofreading';
import WritingPublishing from './pages/Service/Writing&Publishing/WritingPublishing';
import CoverDesign from './pages/Service/CoverDesign/CoverDesign';
import Illustrations from './pages/Service/Illustrations/Illustrations';
import Printing from './pages/Service/Printing/Printing';
import AudiobookNarration from './pages/Service/AudiobookNarration/AudiobookNarration';
import AuthorWebsite from './pages/Service/AuthorWebsite/AuthorWebsite';
import ScrollToTop from './components/scrollToTop/scrollToTop';
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Forms from './pages/Form/Form';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsAndCondition from './pages/TermsAndCondition/TermsAndCondition';
import BookPublishing from './pages/bookPublishing/bookPublishing';
import Zendesk, { ZendeskAPI } from "./ZendeskConfig";


function App() {
  // var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
  // (function () {
  //   var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  //   s1.async = true;
  //   s1.src = 'https://embed.tawk.to/645132cc31ebfa0fe7fb941f/1gveissl5';
  //   s1.charset = 'UTF-8';
  //   s1.setAttribute('crossorigin', '*');
  //   s0.parentNode.insertBefore(s1, s0);
  // })();

  // const ZENDESK_KEY = "d2d07988-5d68-4f2a-a0fe-6692e8ab02f6";
  // const handleLoaded = () => { };
  return (

    <div className="App overflow-hidden">
    {/* //   /* <div>
    //     <Zendesk defer zendeskKey={ZENDESK_KEY} onLoaded={handleLoaded} />
    //   </div> */ }
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Forms />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/service/Publishing" element={<Publishing />} />
          <Route path="/service/Marketing" element={<Marketing />} />
          <Route path="/service/Editing&Proofreading" element={<EditingProofreading />} />
          <Route path="/service/Writing&Publishing" element={<WritingPublishing />} />
          <Route path="/service/CoverDesign" element={<CoverDesign />} />
          <Route path="/service/Illustrations" element={<Illustrations />} />
          <Route path="/service/Printing" element={<Printing />} />
          <Route path="/service/AudiobookNarration" element={<AudiobookNarration />} />
          <Route path="/service/AuthorWebsite" element={<AuthorWebsite />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-condition" element={<TermsAndCondition />} />
          <Route path="/bookPublishing" element={<BookPublishing />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
