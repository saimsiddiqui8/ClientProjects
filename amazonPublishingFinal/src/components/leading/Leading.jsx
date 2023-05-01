import "./style.css"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mockup2 from "../../assets/mockup2.png"
import ThemeButton from "../reuseable/ThemeButton"
import ThemeButtonLight from "../reuseable/ThemeButtonLight"
import { ZendeskAPI } from "../../ZendeskConfig"

const Leading = () => {
    const submit6 = () => {
        ZendeskAPI("messenger", "open");
      };
    return (
        <>
            <div id="leading">
                <section className='overflow-hidden mt-5 pt-5'>
                    <div className='container w-75 text-center '>
                        <h2 className="fw-bold">Industry-Leading Team at Your Service</h2>
                        <p className="pt-2">We have a specialist team of publishers, marketers, proofreaders, editors, ghostwriters, designers, illustrators and narrators. We can finalize and  publish your book under your name in a print, eBook and audiobook format.</p>
                    </div>
                    {/* <div className="container w-75 mt-5" id="leadingText">
                        <Row >
                            <Col lg={7}>
                                <div>
                                    <p className='mt-5 text3 container'>
                                        Amazon Publishing Company is a leading facilitator of self-publishing and marketing for independent authors. We help authors and their books reach their target audiences. We offer a full suite of author services including book cover design, book writing, editing, proofreading, audiobook creation, author website creation, Search Engine Optimization (SEO), and Social Media Marketing (SMM).</p>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div id="leadingImg">
                                    <img src={mockup2} alt="" id="leading" width={400} />
                                </div>
                            </Col>
                        </Row>
                    </div> */}
                    <Container className='overflow-hidden mb-5 w-75'>
                        <Row className='justify-content-evenly'>
                            <Col className="mt-5 " lg={6}>
                                <div id='aboutContent' className='mt-5'>
                                    <h3 className="">Book Illustration Services</h3>
                                    <p className='mt-5 mb-4 '>Amazon Author Solutions Company is a leading facilitator of self-publishing and marketing for independent authors. We help authors and their books reach their target audiences. We offer a full suite of author services including book cover design, book writing, editing, proofreading, audiobook creation, author website creation, Search Engine Optimization (SEO), and Social Media Marketing (SMM).</p>
                                    <div className="">
                                        <ThemeButton name="Start Project" />
                                    </div>
                                </div>
                            </Col>
                            <Col className='mt-5 text-center' lg={6} >
                                <img src={mockup2} alt="" style={{ width: "80%" }} id='aboutImg' />
                            </Col>
                        </Row>
                    </Container>
                    <div className=' text-center mt-4'>
                        <ThemeButton name="Start project" />
                        <span className="mx-3">
                        <a href="tel:+923143316519">
                            <ThemeButtonLight name="Call Now" />
                            </a>
                        </span>
                        <ThemeButton name="Live Chat" click={submit6} />

                    </div>

                </section>
            </div>
        </>
    )
}

export default Leading