import "./style.css"
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ThemeButton from "../reuseable/ThemeButton";
import trusted from "../../assets/trusted.png"
import trustedTwo from "../../assets/trustedTwo.png"


const Banner = ({ heading, paragraph, subHeading }) => {
    return (
        <div id='banners'>
            <Container>
                <Row>
                    <Col lg={6} sm={10} className='mt-5 pt-2' id="mainContext">
                        <h1 id="head">{heading}</h1>
                        <h4 className="text-warning">{subHeading}</h4>
                        <p className='pb-1 text-light' id="text1">
                            {paragraph}
                        </p>
                        <a href="#contactDiv">
                            <ThemeButton name="Start Project" />
                        </a>


                        <a href="tel:+923143316519"><button type="button" id="btn2" className="btn text-light px-4 mx-3 opacity-75">CALL NOW</button></a>
                        <ThemeButton name="Live Chat" id="LiveChat" />
                        <Row className="py-5">
                            <Col lg={3} md={3} sm={4}>
                                <div>
                                    <img src={trusted} alt="trusted" />
                                </div>
                            </Col>
                            <Col lg={9} md={9} sm={8}>
                                <div id="trustedTwo">
                                    <img src={trustedTwo} alt="trustedTwo" />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={5} sm={10} className=' py-5'>
                        {/* Filling Form  */}
                        <Form className='container w-50 px-4 opacity-75' id='form'>
                            <div>
                                <h2 className='text-center text-dark py-4'>Launch Your Book</h2>
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className="text-light input" type="email" placeholder="Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control className="input text-light" type="password" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="formBasicEmail">
                                <Form.Control className="input text-light" type="email" placeholder="Contact number (optional)" />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                {/* <Form.Label>Example textarea</Form.Label> */}
                                <Form.Control className="input text-light" as="textarea" placeholder="Message (optional)" rows={4} />
                            </Form.Group>
                            <Button style={{ backgroundColor: "#404040", fontWeight: "600" }} type="submit" className="mb-4 w-100">
                                Start Now !
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner