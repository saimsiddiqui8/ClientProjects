import React from 'react'
import Banner from '../../../components/banner/Banner'
import Contact from '../../../components/contact/Contact'
import Faq from '../../../components/faq/Faq'
import Footer from '../../../components/footer/Footer'
import NavBar from '../../../components/Navbar'
import Portfolio from '../../../components/portfolio/Portfolio'
import Services from '../../../components/services/Services'
import mockup4 from "../../../assets/mockup4.png"
import { Col, Container, Row } from 'react-bootstrap'
import ThemeButton from '../../../components/reuseable/ThemeButton'
const Publishing = () => {
  return (
    <>
      <div id='banner'>
        <NavBar />
        <Banner heading="Publishing Your Stories To A Global Audience" paragraph="
Have your masterpiece ready for the world but don’t know how to publish it? Fyra Publishing have got you covered! Our professional publishing team ensures your masterpiece will reach its target audience. With our support, becoming a published author has never been easier." />
      </div>
      <div>
        <Container className='overflow-hidden mb-5'>
          <Row className='justify-content-evenly '>
            <Col className='mt-5  ps-2 text-center' lg={5} >
              <img src={mockup4} alt="" style={{ width: "100%" }} />
            </Col>
            <Col lg={5}>
              <div id='aboutContent' className='mt-5 pt-5'>
                <h3 >The Most Efficient Publishing Process.</h3>
                <p className='mt-5 mb-4'>At Fyra Publishing, we have a team of experienced writers and publishers who have made their mark in the industry. Our process is simple, systematic, and fast. With the publishing team’s excellence and expertise, Fyra Publishing have successfully assisted hundreds of aspiring writers worldwide to achieve their dream of becoming published authors with award-winning credentials.</p>
                <ThemeButton  name="Start Project"/>
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

export default Publishing