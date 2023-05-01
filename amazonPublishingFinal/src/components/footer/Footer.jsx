import "./style.css"
import { Col, Row } from "react-bootstrap"
import ThemeButton from "../reuseable/ThemeButton"
import logo from "../../assets/logo.png"
import { ImLocation2 } from "react-icons/im"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/bs"

const Footer = () => {
    return (
        <>
            <section id="footer" className="">
                {/* <div className="text-white container w-75  mt-5 pt-3">
                    <Row>
                        <Col lg={6} md={6}>
                            <div className="container ms-5 mt-5 footerTopText">
                                <h1>What are you waiting for?</h1>
                                <p>Let’s connect and help you achieve your vision for your book.</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} className="mt-5">
                            <div className="text-end mt-4 me-5 footerBtn">
                                <ThemeButton />
                            </div>
                        </Col>
                    </Row>
                </div> */}
                <div className="text-white container">
                    <Row className="pt-4">
                        <Col lg={5} className="mt-5 pt-5">
                            <div id="footerLogoText">
                                <img src={logo} alt="logo" width={250} height={150} />
                                <p id="footerText">Amazon Author Solutions is a trailblazer in the world of self-publishing. We help facilitate the self-publishing and marketing process on behalf of independent authors and help them sell their books as e-books, audiobooks, hardcover and paperback books worldwide.</p>
                            </div>
                        </Col>
                        <Col id="footerBox" lg={2} md={4} sm={10} className="mt-5 pt-5">
                            <h3>About Us</h3>
                            <ul className="list-unstyled">
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Services</li>
                                <li>Portfolio</li>
                                <li>Testimonial</li>
                                <li>Contact Us</li>
                            </ul>
                        </Col>

                        <Col id="footerBox" lg={2} md={4} sm={10} className="mt-5 pt-5">
                            <h3>Services</h3>
                            <ul className="list-unstyled">
                                <li>Amazon Author Solutions</li>
                                <li>Marketing</li>
                                <li>Writing &amp; Publishing</li>
                                <li>Illustrations</li>
                                <li>Printing</li>
                                <li>Audiobook Narration</li>
                                <li>Author Website</li>
                            </ul>
                        </Col>

                        <Col id="footerBox" lg={2} md={4} sm={10} className="mt-5 pt-5">
                            <h3>Contact</h3>
                            <ul className="list-unstyled">
                                <li className="mt-4"> <ImLocation2 /> Mailing Address: 5900 Balcones Drive STE 100, Austin Texas, 78731.</li>
                                <li className="mt-2"> <AiOutlineMail /> contact@amazonauthorsolution.com</li>
                                <li className="mt-2"> <BsFillTelephoneFill /> +17372342834</li>
                            </ul>
                            <div className="text-center mt-5 pt-4 terms">
                                <a href="">Terms & Conditions | Privacy Policy</a>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="text-center text-white">
                    <p id="copyRight">© 2022 - Amazon Author Solutions Company | All right reserved.</p>
                    <p>Amazon and all related Marks are Trademarks of Amazon.com, Inc. or its affiliates</p>
                </div>
            </section>
        </>
    )
}

export default Footer;