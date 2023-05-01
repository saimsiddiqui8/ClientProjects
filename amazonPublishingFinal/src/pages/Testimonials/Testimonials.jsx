import "./style.css"
import { Col, Row } from 'react-bootstrap'
import Banner from '../../components/banner/Banner'
import Contact from '../../components/contact/Contact'
import Faq from '../../components/faq/Faq'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/Navbar'
import Portfolio from '../../components/portfolio/Portfolio'
import mockup2 from "../../assets/mockup2.png"
import Rating from "../../components/rating/Rating"

const Testimonials = () => {
    return (
        <>
            <div id='banner'>
                <NavBar />
                <Banner heading="What Our Clients Say" subHeading="Checkout Our Testimonials" paragraph="
                    We have helped many authors write and market their books. Read testimonials from our clients to learn more about our services, and how you can benefit from our expertise." />
            </div>
            <div>
                <Rating />
            </div>
            <div className='container w-75'>
                <div className="text-center mt-5 pt-5">
                    <h1>The World is Waiting for Your Book-Our Book Writing Service can Help You Get Started</h1>
                    <p>Fyra Publishing Company has a highly efficient system for book creation and publication. As a client, you will be in a commanding role overseeing every aspects of your book as we create your book for you within days. Here is how it works!</p>
                </div>
                <div>
                    <Row>
                        <Col lg={6} md={6} className="mt-5">
                            <div className="ms-5 ps-5 mt-5" id="testUl">
                                <ul className='fw-bold'>
                                    <li >A custom written book by us on a topic specified you</li>
                                    <li>A custom written book by us on a topic specified you</li>
                                    <li>A custom written book by us on a topic specified you</li>
                                    <li>A custom written book by us on a topic specified you</li>
                                    <li>A custom written book by us on a topic specified you</li>
                                    <li>A custom written book by us on a topic specified you</li>
                                    <li>A custom written book by us on a topic specified you</li>
                                </ul>
                            </div>

                        </Col>
                        <Col lg={5} md={6}>
                            <div className="mt-5" id="testImg">
                                <img src={mockup2} alt="" width={400}/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div>
                <Portfolio />
                <div className='mt-2'>
                    <h2 className='text-center'>Book a Call with Our Consultant to Get Help with Your Book</h2>
                    <p className='text-center'>Call Us to Kick-start Your Project Right Away!</p>
                    <div className='text-center mb-5'>
                        <button type="button" className="btn btn-warning px-4 py-2 mx-1">Start Project</button>
                        <button type="button" className="btn btn-secondary px-4 py-2 mx-1">Call Now</button>
                    </div>

                </div>
                <Contact />
                <Faq />
                <Footer />
            </div>
        </>
    )
}

export default Testimonials