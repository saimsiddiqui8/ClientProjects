import React from 'react'
import Banner from '../../components/banner/Banner'
import Contact from '../../components/contact/Contact'
import Faq from '../../components/faq/Faq'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/Navbar'
import Portfolio from '../../components/portfolio/Portfolio'

const Portfolios = () => {
    return (
        <>
            <div id='banner'>
                <NavBar />
                <Banner heading="Our Work" subHeading="Checkout Our Portfolio" paragraph="Our book portfolio is the ultimate resource for modern designers and agencies. Packed with more than 1,000 gorgeous and endless inspiration, it's everything you need to finally create the website of your dreams." />
            </div>
            <div>
                <Portfolio />
                <div className='mt-5'>
                    <h2 className='text-center'>Book a Call with Our Consultant to Get Help with Your Book</h2>
                    <p className='text-center'>Call Us to Kick-start Your Project Right Away!</p>
                    <div className='text-center'>
                        <button type="button" className="btn btn-warning px-4  mx-1">Start Project</button>
                        <button type="button" className="btn btn-secondary px-4  mx-1">Call Now</button>
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