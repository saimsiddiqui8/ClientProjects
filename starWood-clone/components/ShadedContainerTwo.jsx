import Link from "next/link"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { AiFillHome } from "react-icons/ai"
import { TbMathGreater } from "react-icons/tb"
import { Carousel } from "react-responsive-carousel"

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ShadedContainerTwo({ mainHeading, currentPage, imgScr }) {
    return (
        <>
            <div className="slider-container mb-5">
                <Carousel showThumbs={false} id="corousel" showStatus={false} dynamicHeight={20} infiniteLoop autoPlay>
                    <div>
                        <img src={imgScr} alt="Slider 1" />
                    </div>
                </Carousel>
                <div className="slider-content-two">
                    <div className="d-flex text-white">
                        <div>
                            <AiFillHome />
                        </div>
                        <div id="homeWritten" className="ms-3 fw-bold">
                            <Link href="/" className="text-decoration-none text-white">
                                <p >Home</p>
                            </Link>
                        </div>
                        <div id="homeWritten" className="mx-3">
                            <TbMathGreater fontWeight={900} />
                        </div>
                        <div id="homeWritten2">
                            <p className="fw-bold" id="contactWritten">{currentPage}</p>
                        </div>
                    </div>
                    <h2 className="fw-bold pt-5 text-white">{mainHeading}</h2>
                </div>
            </div>


        </>
    )
}