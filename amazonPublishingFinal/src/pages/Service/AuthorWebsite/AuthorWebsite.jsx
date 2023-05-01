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
import serviceCoverDesign from "../../../assets/service-coverDesign.png"

const AuthorWebsite = () => {
  return (
    <>
      <div id='banner'>
        <NavBar />
        <Banner heading="Step Into The Digital World" subHeading="Engage Your Readers Online For a More Personalized Experience" paragraph="Looking to build your author’s website that showcases your books, grows your reader’s list, and attracts publishers and promoters? Let Amazon Author Solutionstake care of it." />
      </div>
      <Container className='overflow-hidden mb-5'>
        <Row className='justify-content-evenly'>
          <Col className='mt-5 pt-5 ps-2' lg={6} >
            <img src={serviceCoverDesign} alt="" style={{ width: "90%" }} id='aboutImg' />
          </Col>
          <Col className="mt-5 pt-5" lg={6}>
            <div id='aboutContent' className='mt-5'>
              <h3>Our Story: A Partnership Built on Love, Coffee, and Business.</h3>
              <p className='mt-5 mb-4'>Amazon Author Solutions directors decided it would be a lot more fun working together and building something exciting than working on our separate career paths. Our Amazon Author Solutions director is a visual art major. He's done everything creative in the field, from giant oils paintings to classical Greek sculptures and architectural enrichments for Russian castles.
              </p>
              <ThemeButton name="Start Project"/>
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

export default AuthorWebsite