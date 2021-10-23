import React from "react";
import o1 from 'images/01.png';

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
            <div className="about-content">
              <div className="about-title">
                <h2>About Intrigd</h2>
                <p>An opinion aggregator for long format content .</p>
              </div>

              <ul>
                <li>
                  <i className="ion-checkmark-round"></i> presents unbiased content
                  with a vast coverage across industries and daily events
                </li>
                <li>
                  <i className="ion-checkmark-round"></i> helps in effortless
                  consumption of opinions through meaningful summaries
                </li>
              </ul>
              <div className="about-btn">
                <a href={window.location.href} className="button">
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
