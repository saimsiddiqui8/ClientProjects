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
import ServicesIcon from '../../components/servicesIcon/ServicesIcon'

const Home = () => {

    return (
        <>
            <div id='banner'>
                <NavBar />
                <Banner heading="Self-Publishing on Amazon Simplified" paragraph="Amazon Author Solutions is a leader in self-publishing facilitation and marketing for independent authors. From creating to selling your book online, we help independent authors such as yourself every step of the way. Best of all, through our services, you retain 100% of your net royalities! Contact us now to learn how we can help!" />
            </div>
            <StartProject />
            <ServicesIcon />
            <Portfolio />
            <div className='mt-4'>
                <Services />
            </div>
            <Leading />
            <Contact />
            <Faq />
            <Footer />
        </>
    )
}

export default Home