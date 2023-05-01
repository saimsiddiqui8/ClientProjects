import { Col, Container, Row } from "react-bootstrap"
import playbackBook from "../../assets/playbackBook.png"
import strategyBook from "../../assets/strategyBook.png"
import kidscreenBook from "../../assets/kidscreenBook.png"
import realscreenBook from "../../assets/realscreenBook.png"
import small1 from "../../assets/small1.png"
import StimulantImg from "../../assets/StimulantImg.png"
import "./style.css"

const Publications = () => {
    return (
        <>
            <div id='mainSection' className="overflow-hidden">
                <section>
                    <div>
                        <div id="mainHeading" className="mt-5">
                            <h1 id="headingContent" className="text-center py-5">Publications</h1>
                        </div>
                        <section className="my-5 py-5 innerShadow">
                            <Container id="lineCont">
                                <Row>
                                    <Col lg={5} md={4} sm={3}> <div id="flairStripArm1" className="flairStripArm mt-3 text-center"></div></Col>
                                    <Col lg={2} md={3} sm={5}> <h3 className="text-center px-1 text-white" id="lineCenter">Multiplatform</h3></Col>
                                    <Col lg={5} md={4} sm={3}> <div id="flairStripArm2" className="flairStripArm mt-3 text-center"></div> </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col lg={3} md={6} sm={12}>
                                        <div className="mt-4 text-center">
                                            <img src={playbackBook} alt="" id="publicationsBook" width={300} />
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6} sm={12}>
                                        <div className="mt-4 text-center">
                                            <img src={strategyBook} alt="" id="publicationsBook" width={300} />
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6} sm={12}>
                                        <div className="mt-4 text-center">
                                            <img src={kidscreenBook} alt="" id="publicationsBook" width={300} />
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6} sm={12}>
                                        <div className="mt-4 text-center">
                                            <img src={realscreenBook} alt="" id="publicationsBook" width={300} />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </section>


                        <section className="mt-4 pt-4 innerShadow">
                            <Container>
                            <Row>
                                    <Col lg={5} md={4} sm={4}> <div id="flairStripArm1" className="flairStripArm mt-3 text-center"></div></Col>
                                    <Col lg={2} md={3} sm={4}> <h3 className="text-center px-1 text-white" id="lineCenter">Digital</h3></Col>
                                    <Col lg={5} md={4} sm={4}> <div id="flairStripArm2" className="flairStripArm mt-3 text-center"></div> </Col>
                                </Row>
                            </Container>
                            <Container className="w-75 mt-4  pb-5 text-center" id="digitalImg">
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <div>
                                            <img id="digitalImg1" width={350} src={small1} alt="" />
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <div>
                                            <img id="digitalImg2" width={350} src={StimulantImg} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Publications