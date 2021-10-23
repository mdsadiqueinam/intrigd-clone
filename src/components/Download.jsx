import React from "react";
import { links } from "data";

export default function Download() {
  return (
    <div className="download-area  gradient-overly">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 ml-auto mr-auto">
            <div className="section-title text-black">
              <h2>Download our app</h2>
              {/* <!--  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat, accusamus! Consequatur suscipit numquam cumque.</p> --> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="download-buttons text-center">
              <a
                href={links.appStore}
                target="_blank"
                className="button"
                rel="noreferrer"
              >
                <i className="fa fa-apple"></i> APP STORE
              </a>
              <a
                href={links.playStore}
                target="_blank"
                className="button"
                rel="noreferrer"
              >
                <i className="fa fa-android"></i> PLAY STORE
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
