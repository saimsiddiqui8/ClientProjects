import React from 'react'
import "./style.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from "emailjs-com";
import logo from "../../assets/logo.png"
import {RxCross1} from "react-icons/rx"
import { ToastContainer, toast } from 'react-toastify';
import ThemeButton from '../../components/reuseable/ThemeButton';
import { useNavigate } from 'react-router-dom';

const Forms = () => {

    const notify = () => toast.success("Message sent!");
    const notifyError = () => toast.error("Error!");
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_hdz9rko", "template_hrcknca", e.target, "Uu5KYI12-abXQGk7m").then(res => {
            const inputField = document.getElementById("form");
            inputField.reset();
            notify();
        }).catch(() => {
            notifyError();
        })
    }
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1)
    }

    return (
        <>
        <div id='formBg'>
            <div className='text-end container'>
        <ThemeButton name={<RxCross1 />} click={handleClick} />
            </div>
        <div className='text-center'>
            <img src={logo} style={{width: "15%"}} alt="" />
        </div>
            <ToastContainer theme="dark" closeOnClick autoClose={2000} position="top-center" />
            <Form className='container w-50 px-4' id='form' onSubmit={sendEmail}>
                <Form.Group className="mb-3 pt-5" controlId="formBasicText">
                    <Form.Control className="text-light input" name="name" required type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className="input text-light" name="email" required type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicText">
                    <Form.Control className="input text-light" name="contact" type="text" placeholder="Contact number" required />
                </Form.Group>
                <Form.Group className="mb-2 pt-3">
                    <Form.Control className="input text-light" name="message" as="textarea" placeholder="Message" required rows={4} />
                </Form.Group>
                <Button style={{ fontWeight: "600" }} value="send" type="submit" className="mb-4 w-100 bg-dark  text-light hbtn2 hb-fill-right2">
                    Start Now !
                </Button>
            </Form>
        </div>
        </>
    )
}

export default Forms