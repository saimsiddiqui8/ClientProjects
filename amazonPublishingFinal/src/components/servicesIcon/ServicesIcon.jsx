import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MdPublishedWithChanges } from "react-icons/md"
import { SiGooglemarketingplatform } from "react-icons/si"
import { AiTwotoneEdit } from "react-icons/ai"
import { TbWritingSign } from "react-icons/tb"
import { GiBookCover } from "react-icons/gi"
import { Link } from 'react-router-dom'

const ServicesIcon = () => {
    return (
        <>
            <Container className='text-center'>
                <div className="py-3">
                    <Row className='justify-content-evenly pb-5'>
                        <Col lg={2} md={4} sm={10}>
                            <Link to="/service/FyraPublishing">
                                <div className='my-3 py-2 shadow-lg' style={{ fontSize: "5rem", backgroundColor: "#000", color: "#fff", borderRadius: "2rem" }}>
                                    <SiGooglemarketingplatform />
                                    <h6 className='text-center'> Amazon Author</h6>
                                </div>
                            </Link>

                        </Col>
                        <Col lg={2} md={4} sm={10}>
                            <Link to="/service/Publishing" >
                            <div className='my-3 py-2 shadow-lg' style={{ fontSize: "5rem", backgroundColor: "#feb414", color: "#000", borderRadius: "2rem" }}>
                                <GiBookCover />
                                <h6 className='text-center'>Publishing </h6>
                            </div>
                            </Link>
                        </Col>
                        <Col lg={2} md={4} sm={10}>
                            <Link to="/service/Marketing">
                            <div className='my-3 py-2 shadow-lg' style={{ fontSize: "5rem", backgroundColor: "#000", color: "#fff", borderRadius: "2rem" }}>
                                <TbWritingSign />
                                <h6 className='text-center'>Marketing </h6>
                            </div>
                            </Link>
                        </Col>
                        <Col lg={2} md={4} sm={10}>
                            <Link to="/service/Editing&Proofreading">
                            <div className='my-3 py-2 shadow-lg' style={{ fontSize: "5rem", backgroundColor: "#feb414", color: "#000", borderRadius: "2rem" }}>
                                <AiTwotoneEdit />
                                <h6 className='text-center'>Editing</h6>
                            </div>
                            </Link>
                        </Col>
                        <Col lg={2} md={4} sm={10}>
                            <Link to="/service/Writing&Publishing">
                            <div className='my-3 py-2 shadow-lg' style={{ fontSize: "5rem", backgroundColor: "#000", color: "#fff", borderRadius: "2rem" }}>
                                <MdPublishedWithChanges />
                                <h6 className='text-center'>Writing </h6>
                            </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row className='justify-content-evenly mb-5'>
                        <Col lg={2} md={4} sm={10}>
                            <Link to="/service/CoverDesign">
                            <div className='my-3 py-2 shadow-lg' style={{ fontSize: "5rem", backgroundColor: "#feb414", color: "#000", borderRadius: "2rem" }}>
                                <MdPublishedWithChanges />
                                <h6 className='text-center'>Cover Design</h6>
                            </div>
                            </Link>
                        </Col>
                        <Col lg={2} md={4} sm={10}>
                            <Link to="/service/Illustrations">
                            <div className='my-3 py-2 shadow-lg' style={{ fontSize: "5rem", backgroundColor: "#000", color: "#fff", borderRadius: "2rem" }}>
                                <SiGooglemarketingplatform />
                                <h6 className='text-center'>Illustrations </h6>
                            </div>
                            </Link>
                        </Col>
                        <Col lg={2} md={4} sm={10}>
                            <Link to="/service/Printing">
                            <div className='my-3 py-2 shadow-lg' style={{ fontSize: "5rem", backgroundColor: "#feb414", color: "#000", borderRadius: "2rem" }}>
                                <TbWritingSign />
                                <h6 className='text-center'>Printer copies</h6>
                            </div>
                            </Link>
                        </Col>
                        <Col lg={2} md={4} sm={10}>
                            <Link to="/service/AudiobookNarration">
                            <div className='my-3 py-2 shadow-lg' style={{ fontSize: "5rem", backgroundColor: "#000", color: "#fff", borderRadius: "2rem" }}>
                                <GiBookCover />
                                <h6 className='text-center'>Audiobooks</h6>
                            </div>
                            </Link>
                        </Col>
                        <Col lg={2} md={4} sm={10}>
                            <Link to="/service/AuthorWebsite">
                            <div className='my-3 py-2 shadow-lg' style={{ fontSize: "5rem", backgroundColor: "#feb414", color: "#000", borderRadius: "2rem" }}>
                                <AiTwotoneEdit />
                                <h6 className='text-center'>Author Website</h6>
                            </div>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default ServicesIcon