import React from 'react'
import Faq from '../../components/faq/Faq'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/Navbar'
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import emailjs from "emailjs-com"
import { ToastContainer, toast } from 'react-toastify';
import { FiPhoneCall } from "react-icons/fi"
import { BsFillChatLeftTextFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

const ContactUs = () => {
    const notify = () => toast.success("Message sent!");
    const notifyError = () => toast.error("Error!");
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_vmdilzo", "template_qrlloqb", e.target, "jLF0FuFArHzJh_PAG").then(res => {
            const inputField = document.getElementById("form");
            inputField.reset();
            notify();
        }).catch(() => {
            notifyError();
        })
    };
    return (
        <>
            <div id='banner'>
                <NavBar />

            </div>
            <section className='overflow-hidden'>  <ToastContainer theme="dark" closeOnClick autoClose={2000} position="top-center" />

                <section className='overflow-hidden'>
                    <div className="">
                        <div className=" text-dark" id='contact2'>
                            <div className=' mt-5'>
                                <div className="text-center">
                                    <h1>Get consultation for free</h1>
                                    <p>Share your ideas with our expert e-book writers and see the magic of yourself!</p>
                                </div>
                                <Row className='mt-1 pb-5 ms-5 ps-5' id='s'>
                                    <Col lg={6} className='container' id='contactWidthMediaQuery'>
                                        <Row className='ms-5 ps-5 mt-5 text-dark' id='contactTasks'>
                                            <div className="d-flex align flex-row">
                                                <FiPhoneCall className='contactIcon' style={{ marginTop: "1rem", color: '#feb414', fontSize: "3rem" }} />
                                                <span className='ps-3'>
                                                    <h6 className='fw-bold mt-3'>Call Us Now</h6>
                                                    <p className="mt-1"> <a href="tel:(888) 783 3146" className='text-dark'>(888) 783 3146 </a> </p>
                                                </span>
                                            </div>
                                        </Row>
                                        <Row className='ms-5 ps-5 mt-5 text-dark' id='contactTasks'>
                                            <div className="d-flex align flex-row">
                                                <BsFillChatLeftTextFill className='contactIcon' style={{ marginTop: "1rem", color: '#feb414', fontSize: "3rem" }} />
                                                <span className='ps-3'>
                                                    <h6 className='fw-bold mt-3'>Start</h6>
                                                    <p className="mt-1">Live Chat with us</p>
                                                </span>
                                            </div>
                                        </Row>
                                        <Row className='ms-5 ps-5 mt-5 text-dark' id='contactTasks'>
                                            <div className="d-flex align flex-row">
                                                <MdEmail className='contactIcon' style={{ marginTop: "1rem", color: '#feb414', fontSize: "3rem" }} />
                                                <span className='ps-3'>
                                                    <h6 className='fw-bold mt-3'>Email us</h6>
                                                    <p className="mt-1"> <a className="text-dark" target="_blank" href="mailto:contact@amazonauthorsolutions.com"> contact@amazonauthorsolutions.com </a></p>
                                                </span>
                                            </div>
                                        </Row>
                                    </Col>
                                    <Col lg={7}>
                                        <Row className=' my-4 pt-4 pb-2'>
                                            <Form className='container w-50 px-4 ' id='form' onSubmit={handleSubmit}>
                                                <h3 className='text-center pt-4 pb-2 text-dark'>Get Your Book Out There</h3>
                                                <Form.Group className="mb-3 pt-3" controlId="formBasicText">
                                                    <Form.Control className="text-light input" name="name" required type="text" placeholder="Name" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Control className="input text-light" name="email" required type="email" placeholder="Email" />
                                                </Form.Group>
                                                <Form.Group className="mb-1" controlId="formBasicText">
                                                    <Form.Control className="input text-light" name="contact" type="text" placeholder="Contact number" required />
                                                </Form.Group>
                                                <Form.Group className="mb-2">
                                                    <Form.Control className="input text-light" name="message" as="textarea" placeholder="Message"required  rows={4} />
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
            </section>
            <Footer />
        </>
    )
}

export default ContactUs