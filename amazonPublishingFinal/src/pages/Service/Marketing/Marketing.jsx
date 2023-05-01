import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Banner from '../../../components/banner/Banner'
import Contact from '../../../components/contact/Contact'
import Faq from '../../../components/faq/Faq'
import Footer from '../../../components/footer/Footer'
import NavBar from '../../../components/Navbar'
import Portfolio from '../../../components/portfolio/Portfolio'
import Services from '../../../components/services/Services'
import mockup5 from "../../../assets/mockup5.png"
import mockup6 from "../../../assets/mockup6.png"
import ThemeButton from '../../../components/reuseable/ThemeButton'

const Marketing = () => {
  return (
    <>
      <div id='banner'>
        <NavBar />
        <Banner heading="We enable you to reach your audience anywhere in the world." subHeading="Affordable Book Marketing Services for Self-published Authors.
" paragraph="Are you looking for affordable marketing to reach your target audience? We’ve got you covered. We provide efficient marketing to reach, inspire and grow the audience for your book. Amazon Author Solutions’ exceptional marketing team will ensure that your piece of art gets the attention it deserves." />
      </div>
      <div>
        <Container className='overflow-hidden mb-5'>
          <Row className='justify-content-evenly'>
            <Col className="mt-5 pt-5" lg={6}>
              <div id='aboutContent' className='mt-5 ms-5 ps-5'>
                <h3 >Amazon Author Solutions can help market your book.</h3>
                <p className='mt-5 mb-4'>Amazon Author Solutions offers multiple marketing plans that help you create a push for your book across mutiple channels which include maintaining a social media campaign, creating author websites, running SEO services on those websites, Creating a PR campaign around your book launch, Creating valuable assets to help promote your book and expert consultations to help you network for your book promtion.</p>
                <ThemeButton name="Start Project" />
              </div>
            </Col>
            <Col className='mt-5 text-center' lg={4} >
              <img src={mockup5} alt="" style={{ width: "110%" }} id='aboutImg' />
            </Col>
          </Row>
          <Row className='justify-content-evenly'>
            <Col className='mt-5 ps-2 text-center' lg={6} >
              <img src={mockup6} alt="" style={{ width: "80%" }} id='aboutImg' />
            </Col>
            <Col className="mt-5 " lg={5}>
              <div id='aboutContent' className='mt-5 pt-5'>
                <h3 className='mt-3'>Effective Sales-Centric Digital Marketing for Self-published Authors.</h3>
                <p className='mt-5 mb-4'>From Search Engine Optimization (SEO) to Social Media Marketing, we’ve got you covered. At Amazon Author Solutions, our marketing team makes sure your published book gains maximum interest from its target audience. Our expert digital marketers use their expertise to promote your book and reach potential customers. Amazon Author Solutions are your one-stop source for all your book marketing solutions.</p>
                <ThemeButton name="Start Project" />
              </div>
            </Col>
          </Row>

        </Container>
      </div>
      <div>
        <Services />
        <Portfolio />
        <Contact />
        <Faq />
        <Footer />
      </div>
    </>
  )
}

export default Marketing