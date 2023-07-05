import "./style.css"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mockup2 from "../../assets/mockup2.png"
import ThemeButton from "../reuseable/ThemeButton"
import ThemeButtonLight from "../reuseable/ThemeButtonLight"
import { ZendeskAPI } from "../../ZendeskConfig"
import { useNavigate } from "react-router-dom"

const Leading = () => {
    const submit6 = () => {
        ZendeskAPI("messenger", "open");
    };
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/form")
    }
    return (
        <>
            <div id="leading">
                <section className='overflow-hidden mt-5'>
                    <div className="text-center mt-5 px-1 container w-75" id='servicesBoxTwo'>
                        <h2 className="text-center" style={{ color: "#E6A804" }}>Industry-Leading Team at Your Service</h2>
                        <p style={{ fontWeight: "400" }}>We have a specialist team of publishers, marketers, proofreaders, editors, ghostwriters, designers, illustrators and narrators. We can finalize and  publish your book under your name in a print, eBook and audiobook format.</p>
                    </div>
                    <Container className='overflow-hidden w-75' id="leadingContainer">
                        <Row className='justify-content-evenly'>
                            <Col className="mt-5 " lg={6}>
                                <div id='aboutContent' className='mt-5'>
                                    <h3 style={{ color: "#f8b830" }}>Book Illustration Services</h3>
                                    <p className='mt-1 mb-4 '>Fyra Publishing is a leading facilitator of self-publishing and marketing for independent authors. We help authors and their books reach their target audiences. We offer a full suite of author services including book cover design, book writing, editing, proofreading, audiobook creation, author website creation, Search Engine Optimization (SEO), and Social Media Marketing (SMM).</p>
                                    <div className="">
                                        <ThemeButton name="Start Project" click={handleClick} />
                                    </div>
                                </div>
                            </Col>
                            <Col className='mt-5 text-center' lg={6} >
                                <img src={mockup2} alt="" style={{ width: "80%" }} id='aboutImg' />
                            </Col>
                        </Row>
                    </Container>

                </section>
            </div>
        </>
    )
}

export default Leading