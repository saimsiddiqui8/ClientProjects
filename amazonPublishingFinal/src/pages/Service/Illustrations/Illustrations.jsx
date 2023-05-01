import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ThemeButton from '../../../components/reuseable/ThemeButton'
import mockup9 from "../../../assets/mockup9.png"
import Banner from '../../../components/banner/Banner'
import Contact from '../../../components/contact/Contact'
import Faq from '../../../components/faq/Faq'
import Footer from '../../../components/footer/Footer'
import NavBar from '../../../components/Navbar'
import Portfolio from '../../../components/portfolio/Portfolio'
import Services from '../../../components/services/Services'

const Illustrations = () => {
  return (
    <>
      <div id='banner'>
        <NavBar />
        <Banner heading="Step Into The Digital World" subHeading="Get Your Customized E-Book Through Our Expert E-Book Writers" paragraph="At Amazon Author Solutions, our team of executive e-book writers take your ideas and transform them into top-quality e-books at affordable prices." />
      </div>
      <Container className='overflow-hidden mb-5'>
        <Row className='justify-content-evenly'>
          <Col className='mt-5 text-center' lg={6} >
            <img src={mockup9} alt="" style={{ width: "90%" }} id='aboutImg' />
          </Col>
          <Col className="mt-5" lg={6}>
            <div id='aboutContent' className='mt-5'>
              <h3 >Book Illustration Services</h3>
              <p className='mt-5 mb-4'>Amazon Author Solutions expert illustrations team understands the importance of cover art and illustrations – whether it’s children’s books, comic books, graphic novels, textbooks, or e-books, we’ve got you covered! The right images and illustrations will translate the author’s information, sentiment, or emotional tones; that’s why Amazon Author Solutions’ accomplished illustrators work closely with authors to ensure their theme, characters, message, and style shines through. Whether it’s illustrating books from scratch or conceptualized artwork to match previous works, we’ve done it all. <br /> <br />
              Whether you're looking for illustrations for your book cover or the entire book, Fyra’s professional team of book illustrators will create engaging illustrations that will attract your audiences at first glance.
              </p>
              <ThemeButton  name="Start Project"/>
            </div>
          </Col>
        </Row>
      </Container>
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

export default Illustrations