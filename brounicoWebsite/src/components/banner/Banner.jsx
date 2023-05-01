import { Col, Row } from "react-bootstrap"
import logo from "../../assets/logo-big.png"
import brand1 from "../../assets/brand1.png"
import brand2 from "../../assets/brand2.png"
import brand3 from "../../assets/brand3.png"
import brand4 from "../../assets/brand4.png"
import brand5 from "../../assets/brand5.png"
import brand6 from "../../assets/brand6.png"
import brand7 from "../../assets/brand7.png"
import "./style.css"

const Banner = () => {
    return (
        <>
            <div className="overflow-hidden">
                <div className="my-4 py-5 text-center" id="wrapper">
                    <img src={logo} alt="" id="img" />
                </div>
                <div className="text-center container px-5 w-75 mb-5" id="bannerHeading">
                    <h3 className="para px-5" id="bannerHeadingTwo">Brunico connects markets. Our communities span the world and we help them navigate industry, develop partnerships and grow their business. We are influential, innovative and trusted.</h3>
                    <h3 className="para px-5 mt-4 mb-4 " id="bannerHeadingThree">We produce world-renowned publications and events for the Media & Entertainment sector.</h3>
                </div>

                <div className="container pb-5">
                    <Row className="ps-5 justify-content-evenly text-center overflow-hidden" id="brand">
                        <Col lg={2} md={4} sm={12} className="mt-5 pt-1">
                        <img src={brand1} alt="brand" width={150} />
                        </Col>
                        <Col lg={2} md={4} sm={12} className="mt-5 pt-1">
                        <img src={brand2} alt="brand" width={150} />
                        </Col>
                        <Col lg={2} md={4} sm={12} className="mt-5 pt-1">
                        <img src={brand3} alt="brand" width={150} />
                        </Col>
                        <Col lg={2} md={4} sm={12} className="mt-5 pt-1">
                        <img src={brand4} alt="brand" width={150} />
                        </Col>
                        <Col lg={2} md={4} sm={12} className="mt-5 pt-1">
                        <img src={brand5} alt="brand" width={100} />
                        </Col>
                        <Col lg={2} md={4} sm={12} className="mt-5 pt-1">
                        <img src={brand7} alt="brand" width={150} />
                        </Col>
                    </Row>
                </div>

            </div>
        </>
    )
}

export default Banner