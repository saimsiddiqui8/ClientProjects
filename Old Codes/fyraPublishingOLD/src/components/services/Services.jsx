import { useState } from 'react';
import React from 'react'
import "./style.css";
import { Col, Row } from 'react-bootstrap';
import testimonial1 from "../../assets/testimonial1.jpg"
import testimonial2 from "../../assets/testimonial2.jpg"
import testimonial3 from "../../assets/testimonial3.jpg"
import testimonial4 from "../../assets/testimonial4.jpg"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ThemeButton from "../../components/reuseable/ThemeButton"
import ThemeButtonLight from "../../components/reuseable/ThemeButtonLight"


const Services = () => {
  const [size, setSize] = useState('small');

  const onChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <>
      <div id='services' className='pt-5 overflow-hidden text-light'>
        <div className='text-center container w-75' id='servicesBoxTwo'>
          <h2 >Our Team is At Your Service</h2>
          <p className="pt-2">We have a team of professionals who are experts in their respective fields, including publishers, marketers, proofreaders,  editors, ghostwriters,designers, illustrators, and
            narrators. Utilizing their skills, we can finalize and publish your book in print, eBook, and
            audiobook formats, all under your name.</p>
        </div>
        <div className='container w-75' id='servicesBoxThree'>

          <Tabs
            defaultActiveKey="home"
            id="justify-tab-example"
            className="mb-3 mt-5"
            justify
          >
            <Tab eventKey="home" title="Fyra Publishing">
              <div>
                <Row className='container justify-content-evenly'>
                  <Col lg={4} md={10} sm={12}>
                    {/* image */}
                    <div className='ps-5 ms-5 mt-5' id='servicesImg'>
                      <img src={testimonial1} alt="testimonial" id='testimonial1' className='rounded-circle' />
                    </div>
                  </Col>
                  <Col lg={6} md={10} sm={12}>
                    <p className='mt-5'>Fyra Publishing Company is a book-writing service provider that provides an end-to-end solution for all your book-writing needs. We are a team of professional writers, editors, and proofreaders who work with you to turn your book idea into an accomplished manuscript. We’re here to provide guidance and expertise from start to finish, so you can focus on the things that matter most—your writing and your story. We’re dedicated to guiding you through the process of publishing, so that you may enjoy success in all your endeavors. You can trust us to provide one-on-one service and expert advice in an atmosphere conducive to learning and creativity.</p>
                    <div className='mb-5' id='serviceBtnBox' >
                      <a href="#contactDiv">
                        <ThemeButton name="Start project" />
                      </a>
                      <span className="mx-3" id='ServiceCallNowBtn'>
                        <a href="tel:+923143316519">
                          <ThemeButtonLight name="Call Now" />
                        </a>
                      </span>
                      <span id='liveChat'>
                        <ThemeButton name="Live Chat" id="lc" />
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>


            <Tab eventKey="Book Marketing Service" title="Book Marketing">
              <div className=''>
                <Row className='container justify-content-evenly'>
                  <Col lg={4}>
                    {/* image */}
                    <div className='ps-5 ms-5 mt-5' id='servicesImg'>
                      <img src={testimonial2} alt="testimonial" id='testimonial1' className='rounded-circle' />
                    </div>
                  </Col>

                  <Col lg={6}>
                    <p className='mt-5 '>Whether you are an internationally acclaimed author or just starting out, you need a professional to go through your manuscript. At Amazon Publishing Pros, our team of editors ensure your manuscript is error-free and ready to be published. We house genre and niche-specific experts who critically assess your work to identify areas of improvement and provide constructive feedback to help you become an accomplished author.</p>
                    <div className='mb-5' id='serviceBtnBox'>
                      <a href="#contactDiv">
                        <ThemeButton name="Start project" />
                      </a>
                      <span className="mx-3" id='ServiceCallNowBtn'>
                        <a href="tel:+923143316519">
                          <ThemeButtonLight name="Call Now" />
                        </a>
                      </span>
                      <span id='liveChat'>
                        <ThemeButton name="Live Chat" id="lc" />
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>
            <Tab eventKey="Book Writing Service" title="Book Writings">
              <div className=''>
                <Row className='container justify-content-evenly'>
                  <Col lg={4}>
                    {/* image */}
                    <div className='ps-5 ms-5 mt-5' id='servicesImg'>
                      <img src={testimonial3} alt="testimonial" id='testimonial1' className='rounded-circle' />
                    </div>
                  </Col>

                  <Col lg={6}>
                    <p className='mt-5 '>Publishing a book properly is critical in order to succeed as an author. Sometimes, books don’t get the recognition they deserve if they aren’t published with all essential details in place. At Amazon Publishing Pros, we aim to provide the best possible reading experience to your target audience.Publishing a book properly is critical in order to succeed as an author. Sometimes, books don’t get the recognition they deserve if they aren’t published with all essential details in place.</p>
                    <div className='mb-5' id='serviceBtnBox'>
                      <a href="#conta ctDiv">
                        <ThemeButton name="Start project" />
                      </a>
                      <span className="mx-3" id='ServiceCallNowBtn'>
                        <a href="tel:+923143316519">
                          <ThemeButtonLight name="Call Now" />
                        </a>
                      </span>
                      <span id='liveChat'>
                        <ThemeButton name="Live Chat" id="lc" />
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>
            <Tab eventKey="Book Editing Service" title="Book Editings">
              <div className=''>
                <Row className='container justify-content-evenly'>
                  <Col lg={4}>
                    {/* image */}
                    <div className='ps-5 ms-5 mt-5' id='servicesImg'>
                      <img src={testimonial4} alt="testimonial" id='testimonial1' className='rounded-circle' />
                    </div>
                  </Col>

                  <Col lg={6}>
                    <p className='mt-5 '>Amazon Publishing Pros is one of the best publishing agencies, specializing in all genres, formats and publishing platforms, particularly Amazon. By assisting thousands of fiction writers to become documented authors, our book publishing agents have a reputation for delivering quality services.formats and publishing platforms, particularly Amazon. By assisting thousands of fiction writers to become documented authors</p>
                    <div className='mb-5' id='serviceBtnBox'>
                      <a href="#contactDiv">
                        <ThemeButton name="Start project" />
                      </a>
                      <span className="mx-3" id='ServiceCallNowBtn'>
                        <a href="tel:+923143316519">
                          <ThemeButtonLight name="Call Now" />
                        </a>
                      </span>
                      <span id='liveChat'>
                        <ThemeButton name="Live Chat" id="lc" />
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default Services