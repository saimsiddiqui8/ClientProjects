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
import authorweb from "../../../assets/authorweb.jpg"
import { useNavigate } from 'react-router-dom'

const AuthorWebsite = () => {
  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/form")
  }
  return (
    <>
      <div id='banner'>
        <NavBar />
        <Banner heading="Step Into The Digital World"  paragraph="Looking to build your author’s website that showcases your books, grows your reader’s list, and attracts publishers and promoters? Let Fyra Publishing take care of it." />
      </div>
      <Container className='overflow-hidden mb-5'>
        <Row className='justify-content-evenly'>
          <Col className='ps-2 mt-4 pt-4' lg={6} sm={12} >
            <img src={authorweb} alt="" style={{ width: "90%" }}  />
          </Col>
          <Col className="" lg={6} sm={12}>
            <div id='aboutContent' className='mt-5'>
              <h3>Your Story: Creating author websites for complete marketing solutions.</h3>
              <p className='mt-5 mb-4'>Fyra Publishing is the leading expert in creating complete marketing solutions for authors. Your Author Website is he most integral part of your marketing outreach where your books is avaialable for sales and you can exhibit all your relevant information about your background and journey, just as you want it.
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

export default AuthorWebsite