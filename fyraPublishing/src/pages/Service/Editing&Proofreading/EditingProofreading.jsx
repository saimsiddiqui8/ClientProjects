import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Banner from '../../../components/banner/Banner'
import Contact from '../../../components/contact/Contact'
import Faq from '../../../components/faq/Faq'
import Footer from '../../../components/footer/Footer'
import NavBar from '../../../components/Navbar'
import Portfolio from '../../../components/portfolio/Portfolio'
import Services from '../../../components/services/Services'
import mockup7 from "../../../assets/mockup7.png"
import ThemeButton from '../../../components/reuseable/ThemeButton'
import { useNavigate } from 'react-router-dom'

const EditingProofreading = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/form")
  }
  return (
    <>
      <div id='banner'>
        <NavBar />
        <Banner heading="Let Our Editors And Proofreaders Perform A Deep Scrutiny On Your Written Pieces." paragraph="Our team of linguistic professionals will edit and proofread your book to ensure there are no grammatical errors, structural mistakes, or issues of verbiage, so your masterpiece is flawless." />
      </div>
      <div>
        <Container className='overflow-hidden mb-5'>
          <Row className='justify-content-evenly'>
            <Col className='mt-5 pt-5 ' lg={5} >
              <div className='ps-5 text-center'>
                <img src={mockup7} alt="" style={{ width: "75%" }}  />
              </div>
            </Col>
            <Col className="mt-5 pt-5" lg={7}>
              <div id='aboutContent' className='mt-5'>
                <h3 >Unparalleled Editing And Proofreading Services, Only At Fyra Publishing.</h3>
                <p className='mt-5 mb-4'>Whether you are an internationally acclaimed author or just starting, sometimes you need an expert to go through your best work. At Fyra Publishing, our team of expert editors ensures that your work is error-free and matches the standards of publishing. Let the most versatile experts at Fyra Publishing analyze your masterpiece and make it flawless.</p>
                <ThemeButton name="Start Project" click={handleClick}/>
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

export default EditingProofreading