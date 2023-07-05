import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ThemeButton from '../../../components/reuseable/ThemeButton'
import Banner from '../../../components/banner/Banner'
import Contact from '../../../components/contact/Contact'
import Faq from '../../../components/faq/Faq'
import Footer from '../../../components/footer/Footer'
import NavBar from '../../../components/Navbar'
import Portfolio from '../../../components/portfolio/Portfolio'
import Services from '../../../components/services/Services'
import audile from '../../../assets/audile.png'
import { useNavigate } from 'react-router-dom'

const AudiobookNarration = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/form")
  }
  return (
    <>
      <div id='banner'>
        <NavBar />
        <Banner heading="Fyra Publishing can help you reach new audiobook readers" paragraph="With over 100 million titles available, Fyra Publishing can help you reach new audiobook readers by publishing your book with our audio book service. With our fast turnaround time and affordable rates, we are the best choice for publishers looking for a professional audio book option." />
      </div>
      <Container className='overflow-hidden mb-5'>
        <Row className='justify-content-evenly'>
          <Col className='mt-5 pt-5 ps-2' lg={6} >
            <img src={audile} className='mt-5'  alt="" style={{ width: "90%" }} />
          </Col>
          <Col className="mt-5 pt-5" lg={6}>
            <div id='aboutContent' className='mt-5'>
              <h3>AudioBook Publishing at its Best!</h3>
              <p className='mt-5 mb-4'>We offer over 100 million titles to choose from to publish your next audiobook. With our quick turn-around time and affordable rates, we are the best choice for publishers looking for a professional audio book option. We can get a full production team to produce your audiobook, including narration, production, publishing, distribution, and marketing. We also have an in-house editorial team that can edit your content as well as provide guidance on what makes a great audiobook.
              </p>
              
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

export default AudiobookNarration