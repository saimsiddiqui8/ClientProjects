import React from 'react'
import "./style.css"
import { Col, Container, Row } from 'react-bootstrap'
import strategyBook from "../../assets/strategyBook.png"
import strategyBanner1 from "../../assets/strategy-banner1.png"
import strategyBanner2 from "../../assets/strategy-banner2.png"
import strategyBanner3 from "../../assets/strategy-banner3.png"

const Strategy = () => {
    return (
        <>
            <section id='strategy' className='mb-5'>
                <Container>
                    <Row  id='mediaQuery5'>
                        <Col lg={6}>
                            <p className='mt-5 pt-5 text-end' id='strategyBookPara'><span className='fw-bold'>strategy </span>uncovers and shares the "bold vision, brand new ideas" of Canada’s national marketing community. We deliver on this tagline via the monthly strategy magazine, conferences, awards programs and online news via strategy Daily, strategy Shopper Marketing Report, strategy Ad Tech and strategy C-Suite, as well as sister publications Media In Canada and Stimulant.</p>

                            <h4 id='events'>Events</h4>
                            <div className="cintainer-fluid mb-5 ">
                                <Row className='justify-content-evenly text-center'>
                                    <Col lg={4} md={4} sm={10}>
                                        <div>
                                            <img src={strategyBanner1} alt="strategyBanner" className='screensBanner mt-3' width={190} />
                                        </div>
                                    </Col>
                                    <Col lg={4} md={4} sm={10}>
                                        <div>
                                            <img src={strategyBanner2} alt="strategyBanner" className='screensBanner mt-3' width={190} />
                                        </div>
                                    </Col>
                                    <Col lg={4} md={4} sm={10}>
                                        <div>
                                            <img src={strategyBanner3} alt="strategyBanner" className='screensBanner mt-3' width={190} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={6} className='text-center pt-5'>
                            <img src={strategyBook} alt="logo" id='strategyBook' />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Strategy;