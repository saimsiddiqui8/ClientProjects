import React from 'react'
import "./style.css"
import { Col, Container, Row } from 'react-bootstrap'
import realscreenBook from "../../assets/realscreenBook.png"
import realscreenBanner1 from "../../assets/realscreen-banner1.png"
import realscreenBanner2 from "../../assets/realscreen-banner2.png"
import realscreenBanner3 from "../../assets/realscreen-banner3.png"

const Realscreen = () => {
    return (
        <>
            <section id='realscreen' className='mb-5 overflow-hidden'>
                <Container>
                    <Row id='mediaQuery2'>
                        <Col lg={6} className="mt-4 pt-5" id='mediaQuery3'>
                            <p className='mt-5 pt-5 text-end' id='realscreenBookPara'><span className='fw-bold'>Realscreen </span>is the only international magazine devoted exclusively to the non-fiction film and television industries. Realscreen aims to bring diverse communities together for dialog, debate and discussion about the global business of factual entertainment.</p>

                            <h4 id='events'>Events</h4>
                            <div className="cintainer-fluid">
                                <Row className='justify-content-evenly text-center'>
                                    <Col lg={4} md={4} sm={10}>
                                        <div>
                                            <img src={realscreenBanner1} className='screensBanner' alt="realscreenBanner" width={190} />
                                        </div>
                                    </Col>
                                    <Col lg={4} md={4} sm={10}>
                                        <div>
                                            <img src={realscreenBanner2} className='screensBanner' alt="realscreenBanner" width={190} />
                                        </div>
                                    </Col>
                                    <Col lg={4} md={4} sm={10}>
                                        <div>
                                            <img src={realscreenBanner3} className='screensBanner' alt="realscreenBanner" width={190} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={6} className='text-center mt-5 pt-5' id='mediaQuery3'>
                            <img src={realscreenBook} alt="logo" id='realscreenBook' className='' />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Realscreen;