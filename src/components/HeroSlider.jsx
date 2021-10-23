import React from "react";
import inner from 'images/inner-1.png'
import { links } from "data";

export default function HeroSlider() {
  return (
    <div className="hero-slider hero-slider-bg-1 " id="slider">
      <div className="single-slide overlay-grad-bg">
        {/* <!-- Hero Content One Start --> */}
        <div className="hero-content-one container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-8">
              <div className="slider-text-info">
                <h1>
                  Intrigd the Ultimate <br /> Reading App.
                </h1>
                <div className="slider-button">
                  <a
                    href={links.appStore}
                    className=" slider-btn uppercase"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      <i className="fa fa-apple"></i>  Apple store
                    </span>
                  </a>
                  <a
                    href={links.playStore}
                    className="slider-btn uppercase"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      <i className="fa fa-send-o"></i> Google play
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1 col-md-4 text-center">
              <div className="slider-inner-imge-2 banner-right">
                <img
                  src={inner}
                  alt="screenshot"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Hero Content One End --> */}
      </div>
    </div>
  );
}
