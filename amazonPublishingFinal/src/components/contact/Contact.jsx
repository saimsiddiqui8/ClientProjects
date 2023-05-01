import './style.css';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import ThemeButton from "../reuseable/ThemeButton"
import ThemeButtonLight from '../reuseable/ThemeButtonLight';
import emailjs from "emailjs-com"
import { ToastContainer, toast } from 'react-toastify';
import { ZendeskAPI } from '../../ZendeskConfig';

const Contact = () => {
    const submit9 = () => {
        ZendeskAPI("messenger", "open");
      };
    const notify = () => toast.success("Message sent!");
    const notifyError = () => toast.error("Error!");
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_vmdilzo", "template_qrlloqb", e.target, "jLF0FuFArHzJh_PAG").then(res => {
            const inputField = document.getElementById("form2");
            inputField.reset();
            notify();
        }).catch(() => {
            notifyError();
        })
    };
   
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
                                    <ThemeButtonLight name="Live Chat" click={submit9}/>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section id='contact' className=' overflow-hidden'>
                <div className="container w-75 text-white" id='contact2'>
                    <div className='text-center pt-5'>
                        <h2 className='pt-5 mt-5'>Let’s Get Started with Amazon Author Solutions Company!</h2>
                        <p>Call Us at <a href="#" style={{ color: "white", fontSize: "18px" }}>+17372342834</a></p>
                        <h4 className='fw-bold'>FILL OUT THE FORM</h4>
                    </div>
                    <Row>
                        {/* <Col lg={6} md={6}> */}
                        <Form className='mt-1 pt-4 rounded container' id='form2' onSubmit={handleSubmit}>
                            <div>
                                <h1 className='text-center text-light pb-4' id='bookLaunch'>Launch Your Book</h1>
                            </div>
                            <Form.Group className="mb-3" >
                                <Form.Control id='contactInput' name="name" required type="text" placeholder="Name" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Control id='contactInput' name='email' required type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-1">
                                <Form.Control id='contactInput' name="contact" type="text" placeholder="Phone Number" />
                            </Form.Group>

                            {/* </Col> */}
                            {/* <Col lg={6} md={6}> */}
                            <Form.Group className="mt-5 textBox">
                                {/* <Form.Label>Example textarea</Form.Label> */}
                                <Form.Control id='contactInput' as="textarea" name="message" rows={6} placeholder="I am looking for ..." />
                            </Form.Group>
                            {/* </Col> */}
                            <div className='text-center mt-4 mb-5'>
                                <ThemeButton name="Start project" type="submit" value="send" />
                            </div>
                        </Form>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Contact