import React from "react";
import { Sliderdata } from "../assets/Products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./SliderCard";

const SliderHome = () => {
  const settings = {
    nav: false,
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div
      className="container-fluid"
      style={{
        background: "rgba(65, 58, 243, 0.28)",
        marginTop: "50px",
        minHeight: 500,
        overflow: 'hidden'
      }}
    >
      <div className="row w-100 justify-content-center mt-5">
        <div
          className="col-12 col-sm-12 col-md-12 col-lg-11"
          style={{
            marginLeft: 25,
            marginTop: 160,
          }}
        >
          <Slider {...settings}>
            {Sliderdata.map((value, index) => {
              return (
                <SliderCard
                  key={index}
                  title={value.title}
                  desc={value.desc}
                  cover={value.cover}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderHome;
