import './style.css';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import ThemeButton from "../reuseable/ThemeButton"
import ThemeButtonLight from '../reuseable/ThemeButtonLight';
import emailjs from "emailjs-com"
import { ToastContainer, toast } from 'react-toastify';
import { ZendeskAPI } from '../../ZendeskConfig';
import { FiPhoneCall } from "react-icons/fi"
import { BsFillChatLeftTextFill } from "react-icons/bs"
import { CiMail } from "react-icons/ci"

const Contact = () => {
    const notify = () => toast.success("Message sent!");
    const notifyError = () => toast.error("Error!");
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_hdz9rko", "template_hrcknca", e.target, "Uu5KYI12-abXQGk7m").then(res => {
            const inputField = document.getElementById("form");
            inputField.reset();
            notify();
        }).catch(() => {
            notifyError();
        })
    };

    return (
        <>
            <section>
                <ToastContainer theme="dark" closeOnClick autoClose={2000} position="top-center" />
                <div className='container contactDiv mb-5 py-4 text-light' id='contactDiv' style={{ borderRadius: "2rem" }}>
                    <Row>
                        <Col md={6} sm={12}>
                            <div className="container ps-5">
                                <h1 className='mt-4'>What are you waiting for?</h1>
                                <p id='hide'>Let’s connect and help you achieve your vision for your  book.</p>
                            </div>
                        </Col>
                        <Col md={6} sm={12}>
                            <div className='text-end me-5 pe-5 pb-5 pt-4 contactBtn'>
                                <a href="tel:(737) 910 3898">
                                    <ThemeButtonLight name="Call Now" classe="mt-5" />
                                </a>
                                <span className='ms-3'>
                                    <a href="javascript:void(Tawk_API.toggle())"><ThemeButtonLight name="Live Chat" /></a>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section id='contact' className='overflow-hidden'>
                <div className="shadowDown">
                    <div className=" text-white" id='contact2'>
                        <div className='pt-5 mt-5'>
                            <div className="text-center mt-5 pt-2">
                                <h1>Get consultation for free</h1>
                                <p>Talk to an expert to discuss your book project and get an instant quote</p>
                            </div>
                            <Row className='mt-1 pb-5 ms-5 ps-5' id='s'>
                                <Col lg={6} className='container' id='contactWidthMediaQuery'>
                                    <Row className='ms-5 ps-5 mt-5 ' id='contactTasks'>
                                        <div className="d-flex align flex-row">
                                            <FiPhoneCall className='contactIcon' style={{ marginTop: "1rem", color: '#feb414', fontSize: "3rem" }} />
                                            <span className='ps-3'>
                                                <h6 className='fw-bold mt-3'>Call Us Now</h6>
                                                <p className="mt-1"> <a href="tel:(737) 910 3898" className='text-white'>(737) 910 3898 </a></p>
                                            </span>
                                        </div>
                                    </Row>
                                    <Row className='ms-5 ps-5 mt-5' id='contactTasks'>
                                        <div className="d-flex align flex-row">
                                            <BsFillChatLeftTextFill style={{ marginTop: "1rem", color: '#feb414', fontSize: "3rem" }} />
                                            <span className='ps-3'>
                                                <h6 className='fw-bold mt-3'>Start</h6>
                                                <p className="mt-1">Live Chat with us</p>
                                            </span>
                                        </div>
                                    </Row>
                                    <Row className='ms-5 ps-5 mt-5 ' id='contactTasks'>
                                        <div className="d-flex align flex-row">
                                            <CiMail className='contactIcon' style={{ marginTop: "1rem", color: '#feb414', fontSize: '3rem' }} />
                                            <span className='ps-3'>
                                                <h6 className='fw-bold mt-3'>Email us</h6>
                                                <p className="mt-1"><a className="text-white" target="_blank" href="mailto:contact@fyrapublishing.com"> contact@fyrapublishing.com </a></p>
                                            </span>
                                        </div>
                                    </Row>
                                </Col>
                                <Col lg={7}>
                                    <Row className=' my-4 pt-4 pb-2'>
                                        <Form className='container w-50 px-4 ' id='form' onSubmit={handleSubmit}>
                                            <h3 className='text-center pt-4 pb-2 text-dark'>Send Us A Query</h3>
                                            <Form.Group className="mb-3 pt-3" controlId="formBasicText">
                                                <Form.Control className="text-light input" name="name" required type="text" placeholder="Name" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Control className="input text-light" name="email" required type="email" placeholder="Email" />
                                            </Form.Group>
                                            <Form.Group className="mb-1" controlId="formBasicText">
                                                <Form.Control className="input text-light" name="contact" type="text" placeholder="Contact number"required />
                                            </Form.Group>
                                            <Form.Group className="mb-2">
                                                <Form.Control className="input text-light" name="message" as="textarea" placeholder="Message"required rows={4} />
                                            </Form.Group>
                                            <Button style={{ fontWeight: "600" }} value="send" type="submit" className="mb-4 w-100 bg-dark  text-light hbtn2 hb-fill-right2">
                                                Start Now !
                                            </Button>
                                        </Form>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact