import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ThemeButton from '../../../components/reuseable/ThemeButton'
import mock9 from "../../../assets/mock9.png"
import Banner from '../../../components/banner/Banner'
import Contact from '../../../components/contact/Contact'
import Faq from '../../../components/faq/Faq'
import Footer from '../../../components/footer/Footer'
import NavBar from '../../../components/Navbar'
import Portfolio from '../../../components/portfolio/Portfolio'
import Services from '../../../components/services/Services'
import { useNavigate } from 'react-router-dom'

const Illustrations = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/form")
  }
  return (
    <>
      <div id='banner'>
        <NavBar />
        <Banner heading="Encapsulating illustrations to bring your books to life"  paragraph="At Fyra Publishing, our team of creative illustrators provide 100% orignal illustration for all types of books." />
      </div>
      <Container className='overflow-hidden mb-5'>
        <Row className='justify-content-evenly'>
          <Col className='mt-5 pt-5 text-center' lg={6} >
            <img src={mock9} alt="" style={{ width: "90%" }}/>
          </Col>
          <Col className="mt-5" lg={6}>
            <div id='aboutContent' className=''>
              <h3 >Book Illustration Services</h3>
              <p className='mt-2 mb-4'>Fyra Publishing expert illustrations team understands the importance of cover art and illustrations – whether it’s children’s books, comic books, graphic novels, textbooks, or e-books, we’ve got you covered! The right images and illustrations will translate the author’s information, sentiment, or emotional tones; that’s why Fyra Publishing’ accomplished illustrators work closely with authors to ensure their theme, characters, message, and style shines through. Whether it’s illustrating books from scratch or conceptualized artwork to match previous works, we’ve done it all. <br /> 
              Whether you're looking for illustrations for your book cover or the entire book, Fyra publishing professional team of book illustrators will create engaging illustrations that will attract your audiences at first glance.
              </p>
              <ThemeButton  name="Start Project" click={handleClick}/>
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