import "./style.css"
import { Col, Row } from "react-bootstrap"
import logo from "../../assets/logo.png"
import { ImLocation2 } from "react-icons/im"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/bs"
import { RxDoubleArrowRight } from "react-icons/rx"
import { Link } from 'react-router-dom';
import partner1 from "../../assets/partner1.png"
import partner2 from "../../assets/partner2.png"
import partner3 from "../../assets/partner3.png"
import partner4 from "../../assets/partner4.png"
import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { MdLocationOn } from "react-icons/md"
import { BsTelephoneFill } from "react-icons/bs"
import { MdMail } from "react-icons/md"

const Footer = () => {
    return (
        <>
            <section id="footer" className="">
                <div>
                    {/* <Row className="text-center">
                        <Col lg={3} md={6} sm={12}>
                            <div className="mb-5 mt-5">
                                <img src={partner1} width={150} alt="" />
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className="mb-5 mt-5">
                                <img src={partner2} width={150} alt="" />
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className="mb-5 mt-5">
                                <img src={partner3} width={150} alt="" />
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className="mb-5 mt-5">
                                <img src={partner4} width={150} alt="" />
                            </div>
                        </Col>
                    </Row> */}
                </div>
                <div className="shadowDown">
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
                    <div className="text-white container pt-5">
                        <Row className="pt-4">
                            <Col lg={5} className="">
                                <div id="footerLogoText" >
                                    <img src={logo} alt="logo" width={190} className="mt-3 mb-4" height={50} />
                                    <p id="footerText">Fyra Publishing is a trailblazer in the world of self-publishing. We help facilitate the self-publishing and marketing process on behalf of independent authors and help them sell their books as e-books, audiobooks, hardcover and paperback books worldwide.</p>
                                </div>
                            </Col>
                            <Col id="footerBox" lg={2} md={4} sm={10} className="">
                                <h3 class="footerAboutUs">About Us</h3>
                                <ul className="list-unstyled">
                                    <Link to="/"><li class="text-white"> <span><RxDoubleArrowRight class="arrow" /></span> Home</li></Link>
                                    <Link to="/aboutus"><li class="text-white"> <span><RxDoubleArrowRight class="arrow" /></span> About Us</li></Link>
                                    <Link to="/portfolio"><li class="text-white"> <span><RxDoubleArrowRight class="arrow" /></span> Portfolio</li></Link>
                                    <Link to="/contactus"><li class="text-white"> <span><RxDoubleArrowRight class="arrow" /></span> Contact Us</li></Link>
                                </ul>
                            </Col>

                            <Col id="footerBox" lg={2} md={4} sm={10} className="">
                                <h3 class="footerAboutUs">Services</h3>
                                <ul className="list-unstyled">
                                    <Link className="text-light" to="/service/Publishing"><li><span><RxDoubleArrowRight class="arrow" /></span> Publishing</li></Link>
                                    <Link className="text-light" to="/service/Marketing"><li><span><RxDoubleArrowRight class="arrow" /></span> Marketing</li></Link>
                                    <Link className="text-light" to="/service/Editing&Proofreading"><li><span><RxDoubleArrowRight class="arrow" /></span> Editing</li></Link>
                                    <Link className="text-light" to="/service/Writing&Publishing"><li><span><RxDoubleArrowRight class="arrow" /></span> Book Writing</li></Link>
                                    <Link className="text-light" to="/service/CoverDesign"><li><span><RxDoubleArrowRight class="arrow" /></span> Cover Design</li></Link>
                                    <Link className="text-light" to="/service/Illustrations"><li><span><RxDoubleArrowRight class="arrow" /></span> Illustrations</li></Link>
                                    <Link className="text-light" to="/service/AudiobookNarration"><li><span><RxDoubleArrowRight class="arrow" /></span> Audiobooks</li></Link>
                                    <Link className="text-light" to="/service/AuthorWebsite"><li><span><RxDoubleArrowRight class="arrow" /></span> Author Website</li></Link>
                                </ul>
                            </Col>

                            <Col id="footerBox"xl={3} lg={2} md={4} sm={10} className="">
                                <h3 class="footerAboutUs">Contact</h3>
                                <ul className="list-unstyled">
                                    {/* <li className="mt-4"> <RxDoubleArrowRight class="arrow" /> <ImLocation2 /> Mailing Address: 5900 Balcones Drive STE 100, Austin Texas, 78731.</li> */}
                                    <li className="mt-2"> <a className="text-white" href="tel:(737) 910 3898"> <BsTelephoneFill style={{fontSize:'20px',color:"white"}}/> (737) 910 3898 </a></li>
                                    <li className="mt-2"><a className="text-white" target="_blank" href="mailto:contact@fyrapublishing.com"><MdMail style={{fontSize:'20px'}}/> contact@fyrapublishing.com </a></li> 
                                    <li className="mt-2 text-white"> <MdLocationOn style={{fontSize:'25px'}}/>5900 Balcones drive STE 100, Austin Texas USA 78731</li>
                                    <li className="mt-2" style={{fontSize:'35px'}}> <a className="text-white" href="https://www.facebook.com/profile.php?id=100093695176991" target="_blank"><BsFacebook/></a>&nbsp;<a className="text-white" href="https://www.linkedin.com/company/fyra-publishing/about/" target="_blank"><AiFillLinkedin/></a>&nbsp;<a className="text-white" href="https://twitter.com/FyraPublis62477" target="_blank"><BsTwitter/></a> </li>

                                    

                                    {/* <li className="mt-2"> <RxDoubleArrowRight class="arrow" /><BsFillTelephoneFill /> +17372342834</li> */}
                                </ul>

                            </Col>
                        </Row>
                    </div>
                    <div className="text-center text-white" id="mediaQueryTopForFooter">
                        <p id="copyRight">© 2023 - Fyra publishing | All rights reserved.</p>
                        <p>Fyra publishing is the official assistance provider for Fyra books</p>

                        <div className="text-center pb-2 terms d-flex flex-row justify-content-center">
                            <Link to="/terms-and-condition" className="text-white"> <h6> Terms & Conditions |  &nbsp; </h6> </Link>
                            <Link to="/privacy-policy" className="text-white"> <h6>  Privacy Policy </h6> </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;