import "./style.css"
import { Col, Container, Form, Row } from 'react-bootstrap'
import ThemeButton from "../reuseable/ThemeButton";
import mockup1 from "../../assets/mockup1Bg.png"
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import Slider from "../../Slider/Slider"


const Banner = ({ heading, paragraph, subHeading }) => {
    const notify = () => toast.success("Message sent!");
    const notifyError = () => toast.error("Error!");
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_hdz9rko", "template_hrcknca", e.target, "Uu5KYI12-abXQGk7m").then(res => {
            const inputField = document.getElementById("lineForm");
            inputField.reset();
            notify();
        }).catch((error) => {
            notifyError();
            console.log(error);
        })
    }

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/form")
    }


    return (
        <>
            <div id='ban'>
                    <div className="shadowDown">
                        <ToastContainer theme="dark" closeOnClick autoClose={2000} position="top-center" />
                        <Container>
                            <Row>
                                <Col lg={6} sm={10} className='mt-5 pt-5' id="mainContext">
                                    <h1 id="headingBanner">Self-Publishing with <span className='fyraBold'>FYRA</span> SIMPLIFIED!</h1>
                                    {/* <h4 className="text-warning">{subHeading}</h4>
                                <p className=' text-light' id="text1">
                                    {paragraph}
                                </p> */}
                                    <div>
                                        <Row className="pb-5 mt-5 pt-3" id="m">
                                            <Form id="lineForm" className="d-flex flex-row " onSubmit={sendEmail}>
                                                <Col lg={3} md={6} sm={12} className="inlineFormWidth mt-4 mx-1">
                                                    <Form.Control className="formControl pb-2 text-light" name="name" required placeholder="Name" />
                                                </Col>
                                                <Col lg={3} md={6} sm={12} className="inlineFormWidth mt-4 mx-1">
                                                    <Form.Control className="formControl pb-2 text-light" name="email" required placeholder="Email" />
                                                </Col>
                                                <Col lg={3} md={6} sm={12} className="inlineFormWidth mt-4 mx-1">
                                                    <Form.Control className="formControl pb-2 text-light" name="contact" required placeholder="Phone Number" />
                                                </Col>
                                                <Col lg={3} md={6} sm={12} className="inlineFormWidth mt-4 mx-1">
                                                    <span className="w100">
                                                        <button id='submitBtn' className=' pt-3 pb-2'>Submit</button>
                                                    </span>
                                                </Col>
                                            </Form>
                                        </Row>
                                    </div>
                                </Col>
                                <Col lg={5} sm={10} className=' mediaQ1'>
                                    <div className="mt-1 text-center mediaQ2">
                                        <img src={mockup1}  id="bookMockup55" className="text-center ps-5 ms-5" style={{ width: "100%" }} alt="mockup" />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <Slider />
                    </div>
                </div>
        </>

    )
}

export default Banner