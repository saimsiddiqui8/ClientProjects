import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ThemeButton from '../../../components/reuseable/ThemeButton'
import mockup10 from "../../../assets/mockup10.png"
import Banner from '../../../components/banner/Banner'
import Contact from '../../../components/contact/Contact'
import Faq from '../../../components/faq/Faq'
import Footer from '../../../components/footer/Footer'
import NavBar from '../../../components/Navbar'
import Portfolio from '../../../components/portfolio/Portfolio'
import Services from '../../../components/services/Services'

const Printing = () => {
  return (
    <>
      <div id='banner'>
        <NavBar />
        <Banner heading="Quick, Efficient, And Affordable" subHeading="Top-Quality Book Printing And Delivery Services At Fyra Publishing Pros." paragraph="With hundreds of successful book printing projects completed last year, we understand our authors’ and their audiences’ needs. Whether you need only 100 copies or 10,000, Fyra Publishing Pros have got your back!" />
      </div>
      <Container className='overflow-hidden mb-5'>
        <Row className='justify-content-evenly'>
          <Col className='mt-5 text-center' lg={6} >
            <img src={mockup10} alt="" style={{ width: "90%" }} id='aboutImg' />
          </Col>
          <Col className="mt-5" lg={6}>
            <div id='aboutContent' className='mt-5'>
              <h3 >Book Illustration Services</h3>
              <p className='mt-5 mb-4'>Fyra Publishing Pros’ expert illustrations team understands the importance of cover art and illustrations – whether it’s children’s books, comic books, graphic novels, textbooks, or e-books, we’ve got you covered! The right images and illustrations will translate the author’s information, sentiment, or emotional tones; that’s why Fyra Publishing Pros’ accomplished illustrators work closely with authors to ensure their theme, characters, message, and style shines through. Whether it’s illustrating books from scratch or conceptualized artwork to match previous works, we’ve done it all. <br /> <br />
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

export default Printing