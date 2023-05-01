import "./style.css"
import { Alert, Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ThemeButton from "../reuseable/ThemeButton";
import trusted from "../../assets/trusted.png";
import trustedTwo from "../../assets/trustedTwo.png";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import { ZendeskAPI } from "../../ZendeskConfig";
import bookMockup1 from "../../assets/bookMockup1.png"


const Banner = ({ heading, paragraph, subHeading }) => {
    const notify = () => toast.success("Message sent!");
    const notifyError = () => toast.error("Error!");
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_vmdilzo", "template_qrlloqb", e.target, "jLF0FuFArHzJh_PAG").then(res => {
            const inputField = document.getElementById("form");
            inputField.reset();
            notify();
        }).catch(() => {
            notifyError();
        })
    }
    const submit2 = () => {
        ZendeskAPI("messenger", "open");
    };

    return (
        <>
            <div id='banners'>
                <Container>
                    <ToastContainer theme="dark" closeOnClick autoClose={2000} position="top-center" />
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
                            <ThemeButton name="Live Chat" id="LiveChat" click={submit2} />
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
                        <Col lg={5} sm={10} className=' pb-5 pt-4'>


                            <div className="ms-5 ps-5">
                                <img src={bookMockup1} id="bookMockup1" style={{ width: "105%" }} alt="mockup" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
            <Form className='container w-50 px-4 opacity-75' id='form' onSubmit={sendEmail}>
                            <div>
                                <h2 className='text-center text-dark py-4'>Launch Your Book</h2>
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Control className="text-light input" name="name" required type="text" placeholder="Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className="input text-light" name="email" required type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="formBasicText">
                                <Form.Control className="input text-light" name="contact" type="text" placeholder="Contact number (optional)" />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Control className="input text-light" name="message" as="textarea" placeholder="Message (optional)" rows={4} />
                            </Form.Group>
                            <Button style={{fontWeight: "600"}} value="send" type="submit" className="mb-4 w-100 bg-dark">
                                Start Now !
                            </Button>
                        </Form>
            </div>
        </>

    )
}

export default Banner