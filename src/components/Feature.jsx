import React from "react";
import { features } from "data";


export default function Feature() {
  return (
    <div
      id="feature"
      className="service-area-four section-pt section-ptb"
      style={{ backgroundColor: "#29B9F2" }}
    >
      <div className="container ">
        <div className="row">
          <div className="col-lg-7 ml-auto mr-auto">
            <div className="section-title">
              <h2 style={{ color: "white !important" }}>Our App Feature</h2>
              {/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat, accusamus! Consequatur suscipit numquam cumque.</p> --> */}
            </div>
          </div>
        </div>
        <div className="feature-area-inner-four">
          <div className="row">
            {features.map((feature, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="single-feature active mb--30">
                  <div className="feature-icon">
                    <img src={feature.image} alt={feature.title} />
                    {/* <!-- <i className="ion-ios-cloud-download-outline"></i> --> */}
                  </div>
                  <div className="feature-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
