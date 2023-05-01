import { useState } from 'react'
import"./style.css";
import { Col, Row } from 'react-bootstrap'
import { Slider } from 'antd';
import ImageSlider from '../ImageSlider/ImageSlider'
import TestiMonials from "../../components/TestiMonials/TestiMonials"

const Portfolio = () => {
  return (
    <div>
      <section className='overflow-hidden'>
        <div className='mt-5 pt-5 text-center container'>
          <h2>Your Book Is Our Passion – Our Portfolio</h2>
          <p>At Amazon Author Solutions Company, we provide a gateway for independent authors' ideas, stories and messages to see the light of day! Take a look at our portfolio to get a glimpse of the projects we have been involved in.</p>
        </div>
        <div>
          <TestiMonials />
        </div>
      </section>

    </div>
  )
}

export default Portfolio

