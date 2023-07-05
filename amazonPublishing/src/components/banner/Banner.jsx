import "./style.css"
import { Col, Container, Form, Row } from 'react-bootstrap'
import ThemeButton from "../reuseable/ThemeButton";
import bookMockup1 from "../../assets/bookMockup1.png"
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import Slider from "../../Slider/Slider"


const Banner = ({ heading, paragraph, subHeading }) => {
    const notify = () => toast.success("Message sent!");
    const notifyError = () => toast.error("Error!");
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_vmdilzo", "template_qrlloqb", e.target, "jLF0FuFArHzJh_PAG").then(res => {
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
            <div id='banners'>
                <div className="shadowDown">
                    <ToastContainer theme="dark" closeOnClick autoClose={2000} position="top-center" />
                    <Container>
                        <Row>
                            <Col lg={6} sm={10} className='mt-5 pt-2' id="mainContext">
                                <h1 id="head">{heading}</h1>
                                <h4 className="text-warning">{subHeading}</h4>
                                <p className=' text-light' id="text1">
                                    {paragraph}
                                </p>
                                <div>
                                    <Row className="pb-5" id="inlineForm">
                                        <Form id="lineForm" className="d-flex flex-row " onSubmit={sendEmail}>
                                            <Col lg={3} md={6} sm={12} className="inlineFormWidth">
                                                <Form.Control className="formControl text-light"  name="name" required placeholder="Name" />
                                            </Col>
                                            <Col lg={3} md={6} sm={12} className="inlineFormWidth">
                                                <Form.Control className="formControl text-light" name="email" required placeholder="Email" />
                                            </Col>
                                            <Col lg={3} md={6} sm={12} className="inlineFormWidth">
                                                <Form.Control className="formControl text-light" name="contact" required placeholder="Phone Number" />
                                            </Col>
                                            <Col lg={3} md={6} sm={12} className="inlineFormWidth">
                                                <span className="w-100">
                                                    <ThemeButton name="Submit" type="submit" classe="mb-3 w-100 pt-2 pb-2 bg-dark" />
                                                </span>
                                            </Col>
                                        </Form>
                                    </Row>
                                </div>
                                 </Col>
                            <Col lg={5} sm={10} className=''>
                                <div className="mt-5 text-center">
                                    <img src={bookMockup1} id="bookMockup1" className="text-center" style={{ width: "105%" }} alt="mockup" />
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