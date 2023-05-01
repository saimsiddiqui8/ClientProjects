import React from 'react'
import "./style.css"
import { Col, Container, Row } from 'react-bootstrap'
import playbackBook from "../../assets/playbackBook.png"
import playbackBanner1 from "../../assets/playback-banner1.png"
import playbackBanner2 from "../../assets/playback-banner2.png"
import playbackBanner3 from "../../assets/playback-banner3.png"

const Playback = () => {
    return (
        <>
            <section id='playback'>
                <Container>
                    <Row>
                        <Col lg={6} className='text-center'>
                            <img src={playbackBook} alt="logo" id='playbackBook'  />
                        </Col>

                        <Col lg={6}>
                            <p className='mt-5 pt-5' id='playbackBookPara'><span className='fw-bold'>playback </span>is the leading international trade publication serving the informational needs and interests of kids entertainment professionals. Published eight times a year, the magazine’s editorial content provides comprehensive analysis of the news, issues, trends, market shifts and opportunities having an impact on all sectors of the business, including TV production, distribution & programming, licensing & retail, marketing & promotions, gaming & digital media, feature films, home entertainment and publishing. playback’s cross-disciplinary approach to coverage mirrors the way the kids entertainment operates, and makes it unique in the trade publishing space serving this audience.</p>

                            <h4 id='events'>Events</h4>
                            <div className="cintainer-fluid mb-5 pb-5">
                                <Row className='justify-content-evenly text-center'>
                                    <Col lg={4} md={4} sm={10}>
                                        <div>
                                            <img src={playbackBanner1} alt="playbackBanner" className='screensBanner pt-3' width={190} />
                                        </div>
                                    </Col>
                                    <Col lg={4} md={4} sm={10}>
                                        <div>
                                            <img src={playbackBanner2} alt="playbackBanner" className='screensBanner pt-3' width={190} />
                                        </div>
                                    </Col>
                                    <Col lg={4} md={4} sm={10}>
                                        <div>
                                            <img src={playbackBanner3} alt="playbackBanner" className='screensBanner pt-3' width={190} />
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

export default Playback