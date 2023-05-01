import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MdPublishedWithChanges } from "react-icons/md"
import { SiGooglemarketingplatform } from "react-icons/si"
import { AiTwotoneEdit } from "react-icons/ai"
import { TbWritingSign } from "react-icons/tb"
import { GiBookCover } from "react-icons/gi"
import { Link, scr } from 'react-router-dom'

const ServicesIcon = () => {
    return (
        <>
            <Container className='text-center'>
                <div className="py-3">
                    <Row className='justify-content-evenly pb-5'>
                        <Col lg={2} md={4} sm={10}>
                            <Link to="/service/FyraPublishing">
                                <div className='my-3 py-2 shadow-lg' style={{ fontSize: "5rem", backgroundColor: "#feb414", color: "#000", borderRadius: "2rem" }}>
                                    <SiGooglemarketingplatform />
                                </div>
                            </Link>

                        </Col>
                        <Col lg={2} md={4} sm={10}>
                            <Link to="/service/Publishing" >
                            <div className='my-3 py-2 shadow-lg' style={{ fontSize: "5rem", backgroundColor: "#feb414", color: "#000", borderRadius: "2rem" }}>
                                <GiBookCover />
                            </div>
                            </Link>
                        </Col>
                        <Col lg={2} md={4} sm={10}>
                            <Link to="/service/Marketing">
                            <div className='my-3 py-2 shadow-lg' style={{ fontSize: "5rem", backgroundColor: "#feb414", color: "#000", borderRadius: "2rem" }}>
                                <TbWritingSign />
                            </div>
                            </Link>
                        </Col>
                        <Col lg={2} md={4} sm={10}>
                            <Link to="/service/Editing&Proofreading">
                            <div className='my-3 py-2 shadow-lg' style={{ fontSize: "5rem", backgroundColor: "#feb414", color: "#000", borderRadius: "2rem" }}>
                                <AiTwotoneEdit />
                            </div>
                            </Link>
                        </Col>
                        <Col lg={2} md={4} sm={10}>
                            <Link to="/service/Writing&Publishing">
                            <div className='my-3 py-2 shadow-lg' style={{ fontSize: "5rem", backgroundColor: "#feb414", color: "#000", borderRadius: "2rem" }}>
                                <MdPublishedWithChanges />
                            </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row className='justify-content-evenly mb-5'>
                        <Col lg={2} md={4} sm={10}>
                            <Link to="/service/CoverDesign">
                            <div className='my-3 py-2 shadow-lg' style={{ fontSize: "5rem", backgroundColor: "#feb414", color: "#000", borderRadius: "2rem" }}>
                                <MdPublishedWithChanges />
                            </div>
                            </Link>
                        </Col>
                        <Col lg={2} md={4} sm={10}>
                            <Link to="/service/Illustrations">
                            <div className='my-3 py-2 shadow-lg' style={{ fontSize: "5rem", backgroundColor: "#feb414", color: "#000", borderRadius: "2rem" }}>
                                <SiGooglemarketingplatform />
                            </div>
                            </Link>
                        </Col>
                        <Col lg={2} md={4} sm={10}>
                            <Link to="/service/Printing">
                            <div className='my-3 py-2 shadow-lg' style={{ fontSize: "5rem", backgroundColor: "#feb414", color: "#000", borderRadius: "2rem" }}>
                                <TbWritingSign />
                            </div>
                            </Link>
                        </Col>
                        <Col lg={2} md={4} sm={10}>
                            <Link to="/service/AudiobookNarration">
                            <div className='my-3 py-2 shadow-lg' style={{ fontSize: "5rem", backgroundColor: "#feb414", color: "#000", borderRadius: "2rem" }}>
                                <GiBookCover />
                            </div>
                            </Link>
                        </Col>
                        <Col lg={2} md={4} sm={10}>
                            <Link to="/service/AuthorWebsite">
                            <div className='my-3 py-2 shadow-lg' style={{ fontSize: "5rem", backgroundColor: "#feb414", color: "#000", borderRadius: "2rem" }}>
                                <AiTwotoneEdit />
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