import React from 'react'
import Banner from '../../components/banner/Banner'
import Contact from '../../components/contact/Contact'
import Faq from '../../components/faq/Faq'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/Navbar'
import Portfolio from '../../components/portfolio/Portfolio'
import ThemeButton from '../../components/reuseable/ThemeButton'
import ThemeButtonLight from '../../components/reuseable/ThemeButtonLight'
import { useNavigate } from 'react-router-dom'

const Portfolios = () => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/form")
    }
    return (
        <>
            <div id='banner'>
                <NavBar />
                <Banner heading="Our Published Books" paragraph="Our book portfolio is the ultimate resource for modern designers and agencies. Packed with more than 1,000 gorgeous and endless inspiration, it's everything you need to finally create the website of your dreams." />
            </div>
            <div>
                <Portfolio />
                <div className='mt-5'>
                    <h2 className='text-center'>Book a Call with Our Consultant to Get Help with Your Book</h2>
                    <p className='text-center'>Call Us to Kick-start Your Project Right Away!</p>
                    <div className='text-center '>
                        <ThemeButton name="Start project" click={handleClick} />
                        <span className="mx-2">
                            <a href="tel:(737) 910 3898">
                                <ThemeButtonLight name="Call Now" />
                            </a>
                        </span>
                        <a href="javascript:void(Tawk_API.toggle())"><ThemeButton name="Live Chat" /></a>
                    </div>
                </div>
                <Contact />
                <Faq />
                <Footer />
            </div>
        </>
    )
}

export default Portfolios