import React from 'react'
import Contact from '../../components/contact/Contact'
import Faq from '../../components/faq/Faq'
import Footer from '../../components/footer/Footer'
import Leading from '../../components/leading/Leading'
import Portfolio from '../../components/portfolio/Portfolio'
import StartProject from "../../components/startProject/StartProject"
import Services from "../../components/services/Services"
import ServicesIcon from '../../components/servicesIcon/ServicesIcon'
import { Col, Container, Form, Row } from 'react-bootstrap'
import mockup1 from "../../assets/mockup1Bg.png"
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import Slider from "../../Slider/Slider"
import "../../components/banner/style.css"
import ThemeButton from '../../components/reuseable/ThemeButton'
import NavBar from '../../components/Navbar'
import Banner from '../../components/banner/Banner'


const Home = () => {
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
            <div id='banner'>
                <NavBar />
               <Banner />
            </div>

            <StartProject />
            <ServicesIcon />
            <Portfolio />
            <div className='mt-4'>
                <Services />
            </div>
            <Leading />
            <Contact />
            <Faq />
            <Footer />

        </>
    )
}

export default Home