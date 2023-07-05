import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Banner from '../../../components/banner/Banner'
import Contact from '../../../components/contact/Contact'
import Faq from '../../../components/faq/Faq'
import Footer from '../../../components/footer/Footer'
import NavBar from '../../../components/Navbar'
import Portfolio from '../../../components/portfolio/Portfolio'
import Services from '../../../components/services/Services'
import mockup8 from "../../../assets/mockup8.png"
import ThemeButton from '../../../components/reuseable/ThemeButton'
import { useNavigate } from 'react-router-dom'

const WritingPublishing = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/form")
  }
  return (
    <>
      <div id='banner'>
        <NavBar />
        <Banner heading="Get Your Customized Book Through Our Expert Writers" paragraph="At Amazon Author Solutions, our team of executive e-book writers take your ideas and transform them into top-quality books at affordable prices." />
      </div>
      <Container className='overflow-hidden mb-5'>
        <Row className='justify-content-evenly'>
          <Col className="mt-5 pt-5" lg={7}>
            <div id='aboutContent' className='mt-5'>
              <h3 >Unparalleled Editing And Proofreading Services, Only At Amazon Author Solutions.</h3>
              <p className='mt-5 mb-4'>Whether you are an internationally acclaimed author or just starting, sometimes you need an expert to go through your best work. At Amazon Author Solutions, our team of expert editors ensures that your work is error-free and matches the standards of publishing. Let the most versatile experts at Amazon Author Solutions analyze your masterpiece and make it flawless.</p>
              <ThemeButton  name="Start Project" click={handleClick}/>
            </div>
          </Col>
          <Col className='mt-2' lg={5} >
            <div className="text-center">
            <img src={mockup8} alt="" style={{ width: "100%" }}/>
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

export default WritingPublishing