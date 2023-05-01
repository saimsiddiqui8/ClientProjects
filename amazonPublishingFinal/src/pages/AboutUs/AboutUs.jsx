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

const AboutUs = () => {
    return (
        <>
            <div id='banner'>
                <NavBar />
                <Banner heading="Welcome To Amazon Author Solutions Company" paragraph="Amazon's publishing arm, Amazon Author Solutions Company, was established decade ago and has since grown substantially. We have a team of award-winning book writers, publishers, and marketers who turn ideas into best-selling books. We are known for creating groundbreaking new voices in writing and for publishing books that have shaped the way we live." />
            </div>


            <div>
                <Container className='overflow-hidden'>
                    <Row className='justify-content-evenly'>

                        <Col className='mt-5 pt-5 ps-2' lg={5} >
                            <img src={AboutSection} alt="" id='aboutImg' />
                        </Col>

                        <Col className="mt-5 pt-5" lg={6}>
                            <div id='aboutContent'>
                                <h1 className='mt-3'>Changing The Way People Think About Books</h1>
                                <p className='pt-3'>Amazon Author Solutions Company is the largest and fastest-growing publisher in the world. The company has changed what people think of books. In the last few years, Amazon Author Solutions Company has grown from being a small group of people to being one of the world's most important publishing houses. With our help, many writers who would not have been able to get published otherwise are able to get their work out there on Amazon's Kindle Direct Publishing platform.</p>
                                {/* <button type="button" className="btn btn-warning px-5 py-2 mb-5 ">Start Project</button> */}
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="w-75">
                    <div className="text-center my-3 pt-5">
                        <h2>Providing Perfect Solutions To Clients Worldwide</h2>
                        <p>We provide a wide range of services for authors, including book writing, editing, proofreading, publishing, cover design and marketing.</p>
                    </div>
                </Container>
                <Container>
                    <Row className="justify-content-evenly">
                        <Col lg={3} md={6} sm={10} >
                            <div className="rounded text-center shadow-lg p-3 mt-5" id="box">
                                <h4>Writing for Boundless Genres</h4>
                                <p>The best part about our services is that we don’t take any credit for your work, nor do we claim any royalties.</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={10} >
                            <div className="rounded text-center shadow-lg p-3 mt-5" id="box">
                                <h4>Writing for Boundless Genres</h4>
                                <p>The best part about our services is that we don’t take any credit for your work, nor do we claim any royalties.</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={10} >
                            <div className="rounded text-center shadow-lg p-3 mt-5" id="box">
                                <h4>Writing for Boundless Genres</h4>
                                <p>The best part about our services is that we don’t take any credit for your work, nor do we claim any royalties.</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={10} >
                            <div className="rounded text-center shadow-lg p-3 mt-5" id="box">
                                <h4>Writing for Boundless Genres</h4>
                                <p>The best part about our services is that we don’t take any credit for your work, nor do we claim any royalties.</p>
                            </div>
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
                    <ThemeButton name="Start project" />
                    <span className="mx-2">
                    <ThemeButtonLight name="Call Now" />
                    </span>
                    <ThemeButton name="Live Chat" />
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