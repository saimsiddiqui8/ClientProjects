import React from 'react'
import Banner from '../../components/banner/Banner'
import Contact from '../../components/contact/Contact'
import Faq from '../../components/faq/Faq'
import Footer from '../../components/footer/Footer'
import Leading from '../../components/leading/Leading'
import NavBar from '../../components/Navbar'
import Portfolio from '../../components/portfolio/Portfolio'

const ContactUs = () => {
    return (
        <>
            <div id='banner'>
                <NavBar />
                <Banner heading="Imagine What Our" subHeading="Book Pubishing Service" paragraph="WHAT YOU AGAIN:
                    Recognition, Fame And Credibilty
                    Authority In Your Area of Expertise
                    Increase In Sales For Your Business
                    More Career Growth Opportunities
                    A Steady, Reliable Additional Income
                    Inspire Other With Your Work
                    We Can Write, Design and Publish your book in
                    less than 30 days!"/>
            </div>
            <Leading />
            <Portfolio />
            {/* <div className='mt-2'>
                <h2 className='text-center'>Book a Call with Our Consultant to Get Help with Your Book</h2>
                <p className='text-center'>Call Us to Kick-start Your Project Right Away!</p>
                <div className='text-center mb-5'>
                    <button type="button" className="btn btn-warning px-4 py-2 mx-1">Start Project</button>
                    <button type="button" className="btn btn-secondary px-4 py-2 mx-1">Call Now</button>
                </div>

            </div> */}
            <Contact />
            <Faq />
            <Footer />
        </>
    )
}

export default ContactUs