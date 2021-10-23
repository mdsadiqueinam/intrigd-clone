import React from "react";
import o1 from 'images/01.png';
import AboutContent from "./AboutContent";

export default function About() {
  return (
    <div id="about" className="about-area bg-grey section-ptb">
      <div className="container">
        <div className="row  align-items-center">
          <div className="col-lg-6 order-1 order-lg-1">
            <div
              className="about-image text-center wow fadeInBottom"
              data-wow-duration="1s"
              style={{ visibility: "visible", animationDuration: "1s", animationName: "fadeInBottom" }}
            >
              <img
                src={o1}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6   order-2 order-lg-2">
            <AboutContent />
          </div>
        </div>
      </div>
    </div>
  );
}
