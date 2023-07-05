import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Banner from '../../../components/banner/Banner'
import Contact from '../../../components/contact/Contact'
import Faq from '../../../components/faq/Faq'
import Footer from '../../../components/footer/Footer'
import NavBar from '../../../components/Navbar'
import Portfolio from '../../../components/portfolio/Portfolio'
import ThemeButton from '../../../components/reuseable/ThemeButton'
import serviceCoverDesign from "../../../assets/service-coverDesign.png"
import Services from '../../../components/services/Services'
import { useNavigate } from 'react-router-dom'

const CoverDesign = () => {
  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/form")
  }  
  return (
    <>
      <div id='banner'>
        <NavBar />
        <Banner  heading="Crafting Eye-catching Book Cover Designs to Inspire You and Your Readers" paragraph="It's not just about judging a book by its cover. Attractive book covers can persuade the readers to buy a book; that’s why it’s essential to a book’s success. Our expert designers at Amazon Author Solutions know precisely how to design a book cover that sells!" />
      </div>
      <Container className='overflow-hidden mb-5'>
          <Row className='justify-content-evenly'>
            <Col className='mt-5 pt-5 ps-2' lg={5} >
              <img src={serviceCoverDesign} alt="" style={{ width: "90%" }}  />
            </Col>
            <Col className="mt-5 pt-5" lg={7}>
              <div id='aboutContent' className='mt-5'>
                <h3 >Stunning Book Covers that Will Stand Out!</h3>
                <p className='mt-5 mb-4'>Our skilled designers use their expertise to design the perfect cover to make your title stand out, which tells more about the story and attracts readers at first sight. With Amazon Author Solutions, you’ll have a book cover that is always on the front shelves.</p>
                <ThemeButton name="Start Project" click={handleClick}/>
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

export default CoverDesign