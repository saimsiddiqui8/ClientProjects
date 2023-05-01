import "./style.css"
import Heading from '../../components/heading/Heading'
import events1 from "../../assets/events1.png"
import events2 from "../../assets/events2.png"
import events3 from "../../assets/events3.png"
import events4 from "../../assets/events4.png"
import events5 from "../../assets/events5.png"
import events6 from "../../assets/events6.png"
import events7 from "../../assets/events7.png"
import events8 from "../../assets/events8.png"
import { Col, Container, Row } from 'react-bootstrap'


const Awards = () => {
    return (
        <>
            <div id="mainSection">
                <section>
                    <div id="mainHeadingConferences" className="mt-5">
                        <h1 id="headingContentConferences" className="text-center py-5">AWARDS</h1>
                    </div>
                    <div>
                        <Heading data="Entertainment" />
                        <Container>
                            <Row className='justify-content-evenl text-center'>
                                <Col lg={3} md={6} sm={12}>
                                    <div className='shadow rounded py-5 mb-5'>
                                        <img src={events1} alt="icons" width={200} />
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={12}>
                                    <div className='shadow rounded py-5 mb-5'>
                                        <img src={events2} alt="icons" width={200} />
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={12}>
                                    <div className='shadow rounded py-5 mb-5'>
                                        <img src={events3} alt="icons" width={200} />
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={12}>
                                    <div className='shadow rounded py-5 mb-5'>
                                        <img src={events4} alt="icons" width={200} />
                                    </div>
                                </Col>
                            </Row>
                            <Row className='justify-content-evenl text-center'>
                                <Col lg={3} md={6} sm={12}>
                                    <div className='shadow rounded py-5'>
                                        <img src={events5} alt="icons" width={200} />
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={12}>
                                    <div className='shadow rounded py-5'>
                                        <img src={events6} alt="icons" width={200} />
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={12}>
                                    <div className='shadow rounded py-5'>
                                        <img src={events7} alt="icons" width={200} />
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={12}>
                                    <div className='shadow rounded py-5'>
                                        <img src={events8} alt="icons" width={200} />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
                <section>
                    <div>
                        <Heading data="Marketing" />
                        <Container>
                            <Row className='justify-content-evenl text-center'>
                                <Col lg={3} md={6} sm={12}>
                                    <div className='shadow rounded py-5'>
                                        <img src={events1} alt="icons" width={200} />
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={12}>
                                    <div className='shadow rounded py-5'>
                                        <img src={events2} alt="icons" width={200} />
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={12}>
                                    <div className='shadow rounded py-5'>
                                        <img src={events3} alt="icons" width={200} />
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={12}>
                                    <div className='shadow rounded py-5'>
                                        <img src={events4} alt="icons" width={200} />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
                <section>
                    <div>
                        <Heading data="Innovation" />
                        <Container>
                            <Row className='justify-content-evenl text-center'>
                                <Col lg={6} md={6} sm={12} >
                                    <div className='shadow rounded py-5 mb-2'>
                                        <img src={events1} alt="icons" width={200} />
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} >
                                    <div className='shadow rounded py-5 mb-2'>
                                        <img src={events1} alt="icons" width={200} />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Awards