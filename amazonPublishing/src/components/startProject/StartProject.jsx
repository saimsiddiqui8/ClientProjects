import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ThemeButton from '../reuseable/ThemeButton'
import mockup1 from "../../assets/mockup1.png"
import ThemeButtonLight from '../reuseable/ThemeButtonLight'
import "./style.css"
import { ZendeskAPI } from '../../ZendeskConfig'
import { useNavigate } from 'react-router-dom'

const StartProject = () => {
    const submit3 = () => {
        ZendeskAPI("messenger", "open");
    };

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/form")
    }
    return (
        <div>
            <Container className='overflow-hidden'>
                <Row className='justify-content-evenly'>
                    <Col lg={6}>
                        <div className="text-center">
                            <img src={mockup1} alt="" id='bookImg' />
                        </div>
                    </Col>
                    <Col className=" mb-5" lg={5}>
                        <div id='startProjectContent' className='pt-5'>
                            <h2 className=' mt-5 pt-5' id='selfPublishingHeading'>
                                Self-Publishing Made Easy</h2>
                            <p className='pt-1'>At Amazon Author Solutions, we offer self-publishing solutions that are both convenient and
                                affordable. Whether you're just starting out as a writer or looking to gain more recognition, we
                                have a range of services that can help you achieve your goals. We can assist you with every
                                step of the book creation process, including writing, editing, proofreading, design, illustration,
                                formatting, publishing, and marketing. Our aim is to bring your book to life exactly as you
                                envision it. Additionally, you'll maintain full ownership and copyrights over your book when
                                using our services.
                            </p>
                            {/* <button type="button" className="btn btn-warning px-5 py-2 mb-5 ">Start Project</button> */}
                            <a href="#contactDiv">
                                <ThemeButton name="Start project" click={handleClick} />
                            </a>
                            <span className="mx-2" id="centerBtnMediaQuery">
                                <a href="tel:(888) 783 3146">
                                    <ThemeButtonLight name="Call Now" />
                                </a>
                            </span>
                            <a href="javascript:void(Tawk_API.toggle())"><ThemeButton name="Live Chat" /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StartProject