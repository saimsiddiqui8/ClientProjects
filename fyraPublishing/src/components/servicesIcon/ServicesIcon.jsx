import React from 'react'
import "./style.css";
import { Col, Container, Row } from 'react-bootstrap'
import { MdPublishedWithChanges } from "react-icons/md"
import { SiGooglemarketingplatform } from "react-icons/si"
import { AiTwotoneEdit } from "react-icons/ai"
import { TbWritingSign } from "react-icons/tb"
import { GiBookCover } from "react-icons/gi"
import { Link, useNavigate } from 'react-router-dom'
import ThemeButton from '../reuseable/ThemeButton';
import ThemeButtonLight from '../reuseable/ThemeButtonLight';
import { ZendeskAPI } from '../../ZendeskConfig';

const ServicesIcon = () => {
    const submit4 = () => {
        ZendeskAPI("messenger", "open");
    };
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/form")
    }
    return (
        <>
            <div id='servicesIconBg' className='mb-4 pb-3'>
                <div className='pt-5'>
                    <h2 className='text-center text-white pt-2'>Services We Provide</h2>
                    <p className='text-center text-white'>Book a Call with Our Consultant to Get Help with Your Book</p>
                </div>
                <Container className='text-center'>
                    <div className="">
                        <Row className='justify-content-evenly pb-5'>
                            <Col lg={3} md={6} sm={12}>
                                <Link to="/service/Publishing" >
                                    <div className='my-3 py-2 goldenDiv' id='icons' style={{ fontSize: "5rem", backgroundColor: "#feb414", color: "#000", borderRadius: "2rem" }}>
                                        <GiBookCover />
                                        <h6 className='text-center'>Publishing </h6>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <Link to="/service/Marketing">
                                    <div className='my-3 py-2 blackDiv' id='icons' style={{ fontSize: "5rem", backgroundColor: "#000", color: "#feb414", borderRadius: "2rem" }}>
                                        <TbWritingSign />
                                        <h6 className='text-center'>Marketing </h6>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <Link to="/service/Editing&Proofreading">
                                    <div className='my-3 py-2 goldenDiv' id='icons' style={{ fontSize: "5rem", backgroundColor: "#feb414", color: "#000", borderRadius: "2rem" }}>
                                        <AiTwotoneEdit />
                                        <h6 className='text-center'>Editing</h6>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <Link to="/service/Writing&Publishing">
                                    <div className='my-3 py-2 blackDiv' id='icons' style={{ fontSize: "5rem", backgroundColor: "#000", color: "#feb414", borderRadius: "2rem" }}>
                                        <MdPublishedWithChanges />
                                        <h6 className='text-center'>Writing </h6>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                        <Row className='justify-content-evenly mb-5'>
                            <Col lg={3} md={6} sm={12}>
                                <Link to="/service/CoverDesign">
                                    <div className='my-3 py-2 blackDiv' id='icons' style={{ fontSize: "5rem", backgroundColor: "#000", color: "#feb414", borderRadius: "2rem" }}>
                                        <MdPublishedWithChanges />
                                        <h6 className='text-center'>Cover Design</h6>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <Link to="/service/Illustrations">
                                    <div className='my-3 py-2 goldenDiv' id='icons' style={{ fontSize: "5rem", backgroundColor: "#feb414", color: "#000", borderRadius: "2rem" }}>
                                        <SiGooglemarketingplatform />
                                        <h6 className='text-center'>Illustrations </h6>
                                    </div>
                                </Link>
                            </Col>
                            {/* <Col lg={3} md={6} sm={12}>
                                <Link to="/service/Printing">
                                    <div className='my-3 py-2 goldenDiv' id='icons' style={{ fontSize: "5rem", backgroundColor: "#feb414", color: "#000", borderRadius: "2rem" }}>
                                        <TbWritingSign />
                                        <h6 className='text-center'>Printer copies</h6>
                                    </div>
                                </Link>
                            </Col> */}
                            <Col lg={3} md={6} sm={12}>
                                <Link to="/service/AudiobookNarration">
                                    <div className='my-3 py-2 blackDiv' id='icons' style={{ fontSize: "5rem", backgroundColor: "#000", color: "#feb414", borderRadius: "2rem" }}>
                                        <GiBookCover />
                                        <h6 className='text-center'>Audiobooks</h6>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <Link to="/service/AuthorWebsite">
                                    <div className='my-3 py-2 goldenDiv' id='icons' style={{ fontSize: "5rem", backgroundColor: "#feb414", color: "#000", borderRadius: "2rem" }}>
                                        <AiTwotoneEdit />
                                        <h6 className='text-center'>Author Website</h6>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <div className='text-center mb-4 mt-4'>
                    <ThemeButton name="Start project" click={handleClick} />
                    <span className="mx-2">
                        <a href="tel:(737) 910 3898">
                            <ThemeButtonLight name="Call Now" />
                        </a>
                    </span>
                    <a href="javascript:void(Tawk_API.toggle())"><ThemeButton name="Live Chat"  /></a>
                </div>
            </div>
        </>
    )
}

export default ServicesIcon