import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import small1 from "../../assets/small1.png"
import CIXImg from "../../assets/CIXImg.png"
import StimulantImg from "../../assets/StimulantImg.png"
import "./style.css"

const Small = () => {
  return (
    <>
      <section>
        <Container>
          <Row className='py-5'>
            <Col lg={6}>
              <div className="text-center pt-5">
                <img src={small1} alt="smallSection1Img" id='smallSection1Img' />
              </div>
            </Col>

            <Col lg={6}>
              <p id='smallSection1Para' className='mt-5 fontSizeResponsive'>From research and audience measurement innovation to ratings impact and spend trends, <span className='fw-bold'>Media in Canada</span> covers the gamut of media biz news and identifies new media opportunities. Both an email newsletter and a website, Media In Canada is a key resource for media buyers and planners, marketers and media sellers, providing a heads-up on property launches and changes in all media, including TV network programming and schedules.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="section2">
        <Container>
          <Row className='py-5'>
            <Col lg={6}>
              <p id='smallSection1Para' className='mt-5 ps-5 fontSizeResponsive' >From research and audience measurement innovation to ratings impact and spend trends, <span className='fw-bold'>Media in Canada</span> covers the gamut of media biz news and identifies new media opportunities. Both an email newsletter and a website, Media In Canada is a key resource for media buyers and planners, marketers and media sellers, providing a heads-up on property launches and changes in all media, including TV network programming and schedules.</p>
            </Col>
            <Col lg={6}>
              <div className="text-center mt-5">
                <img src={StimulantImg} alt="smallSection1Img" id='smallSection1Img' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className='py-5'>
            <Col lg={6}>
              <div className="text-center mt-5">
                <img src={CIXImg} alt="smallSection1Img" id='smallSection1Img' />
              </div>
            </Col>

            <Col lg={6}>
              <p id='smallSection1Para' className='mt-5 fontSizeResponsive'><span className='fw-bold'>CIX</span> (Canadian Innovation Exchange) is Canada’s largest technology investment conference, attracting global investors and Canada’s most innovative early and growth stage startups. Since 2008, tech leaders, corporates, funders and founders converge annually at CIX to learn, network, and do deals.
                <br /> <br />
                The CIX Top 20 Early and CIX Top 10 Growth annual awards programs curates Canada’s most innovative early and growth tech companies from hundreds of submissions from coast to coast.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Small;