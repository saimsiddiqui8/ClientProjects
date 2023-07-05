import "./style.css"
import { Col, Container, Row } from 'react-bootstrap'
import Banner from '../../../components/banner/Banner'
import NavBar from '../../../components/Navbar'
import mockup3 from "../../../assets/mockup3.png"
import ThemeButton from '../../../components/reuseable/ThemeButton'
import Services from "../../../components/services/Services"
import Portfolio from "../../../components/portfolio/Portfolio"
import Contact from "../../../components/contact/Contact"
import Faq from "../../../components/faq/Faq"
import Footer from "../../../components/footer/Footer"

const AmazonPublishing = () => {
    return (
        <>
            <div id='banner'>
                <NavBar />
                <Banner heading="Step Into The Digital World" subHeading="Get Your Customized E-Book Through Our Expert E-Book Writers" paragraph="At Fyra Publishing, our team of executive e-book writers take your ideas and transform them into top-quality e-books at affordable prices." />
            </div>

            <div>

                <Container className='overflow-hidden mb-5'>
                    <Row className='justify-content-evenly'>
                        <Col className="mt-5 pt-5" lg={5} md={12}>
                            <div id='aboutContent' className="mt-5 pt-3">
                                <h3 >Take Your E-Books To The Next Level With Fyra Publishing</h3>
                                <p className='mt-5 mb-4'>With the world going digital, rank your e-books amongst the best e-books worldwide. Our team of storytellers maintain the quality and standards required for you to become a top-seller throughout the e-book writing process. Our main goal is to provide authentic leads for our highly valued customers.</p>
                                <ThemeButton name="Start Project"/>
                            </div>
                        </Col>
                        <Col className='mt-5 pt-5 ps-2' lg={5} md={12} >
                            <div className="text-center">
                            <img src={mockup3} alt=""   />
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

export default AmazonPublishing