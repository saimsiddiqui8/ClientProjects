import React, { Component } from "react";
import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import trusted1 from "../assets/trusted1.svg";
import trusted2 from "../assets/trusted2.svg";
import trusted3 from "../assets/trusted3.svg";
import trusted4 from "../assets/trusted4.svg";
import trusted5 from "../assets/trusted5.svg";
import trusted6 from "../assets/trusted6.svg";

class Slider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 1000,
      cssEase: "linear"
    };
    return (
      <div className="mainContainer ">

        <Slider1 {...settings}>
          <div className="container">
            <img src={trusted1} width={400} className="sliderIcon  pb-4"/>
          </div>
          <div className="container">
            <img src={trusted2} width={400} className="sliderIcon  pb-4"/>
          </div>
          <div className="container">
            <img src={trusted3} width={400} className="sliderIcon  pb-4"/>
          </div>
          <div className="container">
            <img src={trusted4} width={400} className="sliderIcon  pb-4"/>
          </div>
          <div className="container">
            <img src={trusted5} width={400} className="sliderIcon  pb-4"/>
          </div>
          <div className="container">
            <img src={trusted6} width={400} className="sliderIcon  pb-4"/>
          </div>
          </Slider1 >

      </div>
    );
  }
}

export default Slider
