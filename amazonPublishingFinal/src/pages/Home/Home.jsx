import React from 'react'
import Banner from '../../components/banner/Banner'
import Contact from '../../components/contact/Contact'
import Faq from '../../components/faq/Faq'
import Footer from '../../components/footer/Footer'
import Leading from '../../components/leading/Leading'
import NavBar from '../../components/Navbar'
import Portfolio from '../../components/portfolio/Portfolio'
import StartProject from "../../components/startProject/StartProject"
import Services from "../../components/services/Services"
import ThemeButton from '../../components/reuseable/ThemeButton'
import ThemeButtonLight from '../../components/reuseable/ThemeButtonLight'
import ServicesIcon from '../../components/servicesIcon/ServicesIcon'
import { ZendeskAPI } from '../../ZendeskConfig'

const Home = () => {
    const submit4 = () => {
        ZendeskAPI("messenger", "open");
      };
    return (
        <>
            <div id='banner'>
                <NavBar />
                <Banner heading="Self-Publishing on Amazon Simplified." paragraph="Amazon Author Solutions Company is a leader in self-publishing facilitation and marketing for independent authors. From CREATING to SELLING your BOOK online, we help independent authors such as yourself every step of the way. Best of all, through our services, you retain 100% of your NET ROYALTIES! Contact us now to learn how we can help!" />
            </div>
            <StartProject />
            <Portfolio />
            <div className='mt-5'>
                <h2 className='text-center'>Book a Call with Our Consultant to Get Help with Your Book</h2>
                <p className='text-center'>Call Us to Kick-start Your Project Right Away!</p>
                <div className='text-center mb-5 mt-4'>
                    <a href="#contactDiv">
                        <ThemeButton name="Start project" />
                    </a>
                    <span className="mx-2">
                        <a href="tel:+923143316519">
                            <ThemeButtonLight name="Call Now" />
                        </a>
                    </span>
                    <a href="#contactDiv">
                        <ThemeButton name="Live Chat" click={submit4} />
                    </a>
                </div>

            </div>
            <ServicesIcon />
            <Services />
            <Leading />
            <Contact />
            <Faq />
            <Footer />
        </>
    )
}

export default Home