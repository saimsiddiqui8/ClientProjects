import "./style.css"
import { Col, Container, Row } from 'react-bootstrap'
import AboutSection from "../../assets/AboutSection.png"
import Banner from '../../components/banner/Banner'
import NavBar from '../../components/Navbar'
import Portfolio from "../../components/portfolio/Portfolio"
import Contact from "../../components/contact/Contact"
import Faq from "../../components/faq/Faq"
import Footer from "../../components/footer/Footer"
import ThemeButton from "../../components/reuseable/ThemeButton"
import ThemeButtonLight from "../../components/reuseable/ThemeButtonLight"
import serviceCoverDesign from "../../assets/service-coverDesign.png"
import { useNavigate } from "react-router-dom"

const AboutUs = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/form")
    }
    return (
        <>
            <div id='banner'>
                <NavBar />
                <Banner heading="Welcome To Fyra Publishing" paragraph="Fyra's publishing arm, Fyra Publishing Company, was established decade ago and has since grown substantially. We have a team of award-winning book writers, publishers, and marketers who turn ideas into best-selling books. We are known for creating groundbreaking new voices in writing and for publishing books that have shaped the way we live." />
            </div>
            <div>
                <Container className='overflow-hidden'>
                    <Row className='justify-content-evenly'>
                        <Col className='mt-5 pt-5 ps-2' lg={5} >
                            <img src={AboutSection} alt="" style={{ width: "99%" }} />
                        </Col>
                        <Col className="mt-4 pt-5" lg={6}>
                            <div id='aboutContent'>
                                <h1 className='mt-3' style={{ color: "#F8B830" }}>Changing The Way People Think About Books</h1>
                                <p className='pt-3'>Fyra Publishing is the largest and fastest-growing publisher in the world. The company has changed what people think of books. In the last few years, Fyra Publishing Company has grown from being a small group of people to being one of the world's most important publishing houses. With our help, many writers who would not have been able to get published otherwise are able to get their work out there on Amazon's Kindle Direct Publishing platform.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className='overflow-hidden mb-5'>
                    <Row className='justify-content-evenly'>
                        <Col className="mt-5 pt-5" lg={6}>
                            <div id='aboutContent' className='mt-5'>
                                <h3>Our Story: A Partnership Built on Love, Coffee, and Business.</h3>
                                <p className='mt-5 mb-4'>Fyra Publishing directors decided it would be a lot more fun working together and building something exciting than working on our separate career paths. Our Fyra Publishing director is a visual art major. He's done everything creative in the field, from giant oils paintings to classical Greek sculptures and architectural enrichments for Russian castles.
                                </p>
                                <ThemeButton name="Start Project" click={handleClick} />
                            </div>
                        </Col>
                        <Col id='books' className='mt-5 pt-5 ps-5' lg={5} >
                            <img className="mt-5" src={serviceCoverDesign} alt="" style={{ width: "100%" }}/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Portfolio />
                <div className='mt-5'>
                    <h2 className='text-center'>Book a Call with Our Consultant to Get Help with Your Book</h2>
                    <p className='text-center'>Call Us to Kick-start Your Project Right Away!</p>
                    <div className='text-center '>
                        <ThemeButton name="Start project" click={handleClick} />
                        <span className="mx-2">
                            <a href="tel:(737) 910 3898">
                                <ThemeButtonLight name="Call Now" />
                            </a>
                        </span>
                        <a href="javascript:void(Tawk_API.toggle())"><ThemeButton name="Live Chat" /></a>
                    </div>
                </div>
                <Contact />
                <Faq />
                <Footer />
            </div>
        </>
    )
}

export default AboutUs