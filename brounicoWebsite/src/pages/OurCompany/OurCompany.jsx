import "./style.css"
import { Col, Container, Row } from 'react-bootstrap'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import logoBig from "../../assets/logo-big.png"
import Heading from '../../components/heading/Heading'
import executiveTeam1 from "../../assets/executiveTeam1.jpg"
import executiveTeam2 from "../../assets/executiveTeam2.jpg"
import executiveTeam3 from "../../assets/executiveTeam3.jpg"
import executiveTeam4 from "../../assets/executiveTeam4.jpg"
import { FaCircle } from "react-icons/fa"

const OurCompany = () => {
    return (
        <>
            <div id="mainSection">
                <header>
                    <div id="mainHeadingConferences" className="mt-5">
                        <h1 id="headingContentConferences" className="text-center py-5">Our Company</h1>
                    </div>
                    <div className='text-center mt-5 pt-3 pb-5'>
                        <img src={logoBig} alt="" id='OurCompanyLogo' />
                    </div>
                    <section>
                        <Container className='w-50' id="ourCompanyContainerOne">
                            <div className='mb-2'>
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <button className='w-100 py-3 btnz mt-2'>History</button>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <button className='w-100 py-3 btnz mt-2'>Executive Team</button>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <button className='w-100 py-3 btnz'>Culture & Careers</button>
                            </div>
                        </Container>
                        <Container className='w-75 text-center' id="ourCompanyContainerTwo">
                            <div id='ourCompanyHead' className='mt-5 pt-4 px-5'>
                                Brunico connects markets. Our communities span the world and we help them navigate industry, develop partnerships and grow their business. We are influential, innovative and trusted. We produce world-renowned publications and events for the Media & Entertainment sector.
                            </div>
                        </Container>
                    </section>
                </header>

                <section>
                    <Heading data="History" classN="my-5 pt-5" />
                    <div className='overflow-hidden text-white mb-5 pb-5'>
                        <VerticalTimeline >
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="1986"
                                iconStyle={{ color: '#fff' }}
                                icon={<FaCircle />}
                            >
                                <h5 className="vertical-timeline-element-subtitle text-dark">Playback launches and becomes Canada's preeminent Broadcast and Production Journal of record.</h5>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="1989"
                                iconStyle={{ color: '#fff' }}
                                icon={<FaCircle />}
                            >
                                <h5 className="vertical-timeline-element-subtitle text-dark">Strategy magazine created for the Canadian advertising industry.</h5>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="1996"
                                iconStyle={{ color: '#fff' }}
                                icon={<FaCircle />}
                            >
                                <h5 className="vertical-timeline-element-subtitle text-dark">Brunico goes global with Realscreen and Kidscreen magazines. Realscreen Summit and Kidscreen Summit launches follow soon after.</h5>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="2004"
                                iconStyle={{ color: '#fff' }}
                                icon={<FaCircle />}
                            >
                                <h5 className="vertical-timeline-element-subtitle text-dark">Media in Canada becomes the company's first successful sub-brand (Strategy magazine).</h5>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="2007"
                                iconStyle={{ color: '#fff' }}
                                icon={<FaCircle />}
                            >
                                <h5 className="vertical-timeline-element-subtitle text-dark">Brunico is purchased by investor group led by Russell Goldstein.</h5>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="2008"
                                iconStyle={{ color: '#fff' }}
                                icon={<FaCircle />}
                            >
                                <h5 className="vertical-timeline-element-subtitle text-dark">PlaybackOnline becomes our first paid-access online editorial product.</h5>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="2009"
                                iconStyle={{ color: '#fff' }}
                                icon={<FaCircle />}
                            >
                                <h5 className="vertical-timeline-element-subtitle text-dark">Kidscreen Awards and Realscreen Awards launched followed closely by Atomic Awards.</h5>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="2016"
                                iconStyle={{ color: '#fff' }}
                                icon={<FaCircle />}
                            >
                                <h5 className="vertical-timeline-element-subtitle text-dark">Brunico acquires Achilles Media and the Marketing Group from Rogers Communications.</h5>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>

                </section>
                <section>
                    <Heading data="Executive" classN="my-4" />
                    <Container>
                        <Row className='overflow-hidden justify-content-evenly text-center'>
                            <Col lg={3} md={6} sm={12}>
                                <div>
                                    <img className='mt-3' id="ourCompanyImg" src={executiveTeam1} alt="executiveTeamImages" width={340} />
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <div>
                                    <img className='mt-3' id="ourCompanyImg" src={executiveTeam2} alt="executiveTeamImages" width={340} />
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <div>
                                    <img className='mt-3' id="ourCompanyImg" src={executiveTeam3} alt="executiveTeamImages" width={340} />
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <div>
                                    <img className='mt-3' id="ourCompanyImg" src={executiveTeam4} alt="executiveTeamImages" width={340} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section>
                    <Container>
                        <Heading data="Culture & " classN="my-4" />
                        <div id='ourCompanyPara' className='px-5'>
                            <p>Brunico is a b2b publisher that has crossed the divide from traditional to next-gen media company. Our publications and events are globally influential and world renowned. We are committed to assembling the most innovative and entrepreneurial team in the business and empowering them with the resources to achieve success. If you are passionate about media and entertainment and are interested in joining our team we'd love to hear from you.
                                <br /><br /><br />
                                Available positions include:
                            </p>
                        </div>

                        <section className='py-5 text-white'>
                            <div className="wrapper pb-5">
                                <div className='w-100 rounded shadow mb-3' id='ourCompanyBox'>
                                    <p className='pt-4 pb-5 px-4'>News Editor, Media in Canada - Brunico Communications Ltd. (click for details..)</p>
                                </div>
                                <div className='w-100 rounded shadow mb-3' id='ourCompanyBox'>
                                    <p className='pt-4 pb-5 px-4'>Program Coordinator - strategy Toronto, Brunico Communications Ltd. (click for details..)</p>
                                </div>
                                <div className='w-100 rounded shadow mb-3' id='ourCompanyBox'>
                                    <p className='pt-4 pb-5 px-4'>Sales Account Manager - strategy magazine, Brunico Communications Ltd. (click for details..)</p>
                                </div>
                            </div>

                            <div id='ourCompanyPara' className=''>
                                <p>Brunico Communications Ltd. is committed to building a diverse workforce representative of the communities we serve. We are proud to be in compliance with the Accessibility for Ontarians with Disabilities Act (AODA), 2005 and the Integrated Accessibility Standards Regulation. Accommodation will be provided in all parts of the recruitment and assessment (if applicable) process as required under Brunico Communications Ltd’s Accessibility policies and procedures. Applicants must make their accommodation needs known upon requests for interviews</p>
                            </div>
                        </section>
                    </Container>
                </section>

                <section>
                    <Heading data="Contact Us" classN="py-5" />
                    <Container>
                        <p id='ourCompanyPara' className='text-center pb-4'>
                            Brunico Communications Ltd.
                            <br />
                            100 - 366 Adelaide Street West
                            <br />
                            Toronto, ON Canada
                            <br />
                            M5V 1R9
                        </p>
                        <p id='ourCompanyPara' className='text-center pb-4'>
                            Tel: 1-416-408-2300
                            <br />
                            Fax: 1-416-408-0870
                        </p>
                    </Container>
                </section>
            </div>
        </>
    )
}

export default OurCompany