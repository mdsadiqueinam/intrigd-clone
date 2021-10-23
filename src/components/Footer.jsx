import React from "react";
import { links } from "data";

export default function Footer() {
  return (
    <footer id="footer" className="footer-area">
      <div className="footer-content-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-content">
                <p>Copyright ©. All Rights Reserved</p>
                <p>
                  <a href={links.terms} >
                    Terms &amp; Conditions
                  </a>
                </p>
                <p>
                  <a href={links.privacy}>
                    Privacy and Policy
                  </a>
                </p>
                <div className="social-link">
                  <a href={links.facebook} target="_blank" rel="noreferrer" >
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href={links.twitter} target="_blank" rel="noreferrer" >
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href={links.instagram} target="_blank" rel="noreferrer">
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
