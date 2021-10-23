import React from "react";
import Slider from "react-slick";
import { screenshots } from "data";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

export default function Screenshot() {
  return (
    <div id="screenshot" className="screnshot-area-tow section-ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 ml-auto mr-auto">
            <div className="section-title">
              <h2>APP Screenshots</h2>
            </div>
          </div>
        </div>
        {/* <!-- Screenshot Content Two Start--> */}
        <div className="screenshot-content-two">
          <div className="row screenshot-tow-active slick-initialized slick-slider slick-dotted">
            <div className="slick-list draggable">
              <Slider {...settings} >
                { screenshots.map((screenshot, index) => (
                  <div className="singel-screenshot" key={index}>
                  <span className="overlay-bg"></span>
                  <a href={screenshot} className="img-poppu" >
                    <span className="single-img overlay-bg">
                      <img src={screenshot} alt="screenshot" />
                    </span>
                  </a>
                </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        {/* <!-- Screnshot Content Two End--> */}
      </div>
    </div>
  );
}
