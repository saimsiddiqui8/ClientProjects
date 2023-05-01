import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ThemeButton from '../reuseable/ThemeButton'
import mockup1 from "../../assets/mockup1.png"
import ThemeButtonLight from '../reuseable/ThemeButtonLight'
import "./style.css"

const StartProject = () => {
    return (
        <div>
            <Container className='overflow-hidden'>
                <Row className='justify-content-evenly'>

                    <Col className='  ps-2' lg={6}>
                        <img src={mockup1} alt="" id='bookImg' width={650} />
                    </Col>

                    <Col className="mt-5 " lg={5}>
                        <div id='startProjectContent'>
                            <h2 className='mt-5 pt-5'>
                                Self-Publishing Made Easy</h2>
                            <p className='pt-3'>At Fyra Author Solutions, we offer self-publishing solutions that are both convenient and
                                affordable. Whether you're just starting out as a writer or looking to gain more recognition, we
                                have a range of services that can help you achieve your goals. We can assist you with every
                                step of the book creation process, including writing, editing, proofreading, design, illustration,
                                formatting, publishing, and marketing. Our aim is to bring your book to life exactly as you
                                envision it. Additionally, you'll maintain full ownership and copyrights over your book when
                                using our services.
                            </p>
                            {/* <button type="button" className="btn btn-warning px-5 py-2 mb-5 ">Start Project</button> */}
                            <a href="#contactDiv">
                                <ThemeButton name="Start project" />
                            </a>
                            <span className="mx-2">
                                <a href="tel:+923143316519">
                                    <ThemeButtonLight name="Call Now" />
                                </a>
                            </span>
                            <ThemeButton name="Live Chat" id="LiveChat" />
                        </div>
                    </Col>


                </Row>
            </Container>
        </div>
    )
}

export default StartProject