import React, { Component } from "react";
import {Slider} from 'react-slick'

const mockImagenes = [
    "https://picsum.photos/id/980/1000",
    "https://picsum.photos/id/981/1000",
    "https://picsum.photos/id/982/1000",
    "https://picsum.photos/id/983/1000",
    "https://picsum.photos/id/984/1000"
  ];
export default class SimpleSlider extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          {[1, 2, 3, 4].map((item, index) => {
            return (
              <div key={index}>
                <h1
                  style={{ color: "red", fontSize: 100, textAlign: "center" }}
                >
                  {item}
                </h1>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
