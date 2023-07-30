import './style.css';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import ThemeButton from "../reuseable/ThemeButton"
import ThemeButtonLight from '../reuseable/ThemeButtonLight';

const Contact = () => {
    return (
        <>
            <section>
                <div className=' container contactDiv w-75 mb-5 py-4 text-light' id='contactDiv' style={{ borderRadius: "2rem" }}>
                    <Row>
                        <Col md={6} sm={12}>
                            <div className="container ps-5">
                                <h1 className='mt-4'>What are you waiting for?</h1>
                                <p id='hide'>Let’s connect and help you achieve your vision for your  book.</p>
                            </div>
                        </Col>
                        <Col md={6} sm={12}>
                            <div className='text-end me-5 pe-5 pb-5 pt-4 contactBtn'>
                                <a href="tel:+923143316519">
                                    <ThemeButtonLight name="Call Now" />
                                </a>
                                <span className='ms-3'>
                                    <ThemeButtonLight name="Live Chat" />
                                </span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section id='contact' className=' overflow-hidden'>
                <div className="container w-75 text-white" id='contact2'>
                    <div className='text-center pt-5'>
                        <h2 className='pt-5 mt-5'>Let’s Get Started with Fyra Publishing Company!</h2>
                        <p>Call Us at <a href="#" style={{ color: "white", fontSize: "18px" }}>+1-877-311-2129</a></p>
                        <h4 className='fw-bold'>FILL OUT THE FORM</h4>
                    </div>
                    <Row>
                        <Col lg={6} md={6}>
                            <Form className='mt-1 pt-4 rounded container' id='form2'>
                                <div>
                                    <h1 className='text-center text-light pb-4' id='bookLaunch'>Launch Your Book</h1>
                                </div>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Control id='contactInput' type="Name" placeholder="Name" />
                                    {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control id='contactInput' type="Email" placeholder="Email" />
                                </Form.Group>
                                <Form.Group className="mb-1" controlId="formBasicPhoneNumber">
                                    <Form.Control id='contactInput' type="PhoneNumber" placeholder="Phone Number" />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col lg={6} md={6}>
                            <Form.Group className="mt-5 pt-5 textBox">
                                {/* <Form.Label>Example textarea</Form.Label> */}
                                <Form.Control id='contactInput' as="textarea" rows={6} placeholder="I am looking for ..." />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className='text-center mt-4 mb-5'>
                        <ThemeButton name="Start project" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact