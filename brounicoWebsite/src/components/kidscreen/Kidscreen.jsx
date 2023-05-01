import React from 'react'
import "./style.css"
import { Col, Container, Row } from 'react-bootstrap'
import kidscreenBook from "../../assets/kidscreenBook.png"
import kidscreenBanner1 from "../../assets/kidscreen-banner1.png"
import kidscreenBanner2 from "../../assets/kidscreen-banner2.png"
import kidscreenBanner3 from "../../assets/kidscreen-banner3.png"

const Kidscreen = () => {
    return (
        <>
            <section id='kidscreen' className='mb-5 overflow-hidden'>
                <Container id='kidcreenCont'>
                    <Row>
                        <Col lg={6} className='text-center'>
                            <img src={kidscreenBook} alt="logo" id='kidscreenBook' className='mt-5 pt-5' />
                        </Col>

                        <Col lg={6}>
                            <p className='mt-5 pt-5' id='kidscreenBookPara'><span className='fw-bold'>Kidscreen </span>is the leading international trade publication serving the informational needs and interests of kids entertainment professionals. Published eight times a year, the magazine’s editorial content provides comprehensive analysis of the news, issues, trends, market shifts and opportunities having an impact on all sectors of the business, including TV production, distribution & programming, licensing & retail, marketing & promotions, gaming & digital media, feature films, home entertainment and publishing. Kidscreen’s cross-disciplinary approach to coverage mirrors the way the kids entertainment operates, and makes it unique in the trade publishing space serving this audience.</p>

                            <h4 id='events'>Events</h4>
                            <div className="mb-5 pb-5" id='mediaQuery1'>
                                <Row className='justify-content-evenly text-center'>
                                    <Col lg={4} md={4} sm={10}>
                                        <div>
                                            <img src={kidscreenBanner1} alt="kidscreenBanner" className='screensBanner' width={190} />
                                        </div>
                                    </Col>
                                    <Col lg={4} md={4} sm={10}>
                                        <div>
                                            <img src={kidscreenBanner2} alt="kidscreenBanner" className='screensBanner' width={190} />
                                        </div>
                                    </Col>
                                    <Col lg={4} md={4} sm={10}>
                                        <div>
                                            <img src={kidscreenBanner3} alt="kidscreenBanner" className='kidscreenBanner' width={190} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Kidscreen