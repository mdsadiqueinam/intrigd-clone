import React from "react";
import ContactAddress from "components/ContactAddress";
import ContactForm from "components/ContactForm";

export default function Contact() {
  
  return (
    <div id="contact" className="contact-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="contact-info-container wow fadeInBottom"
              data-wow-duration="1s"
              style={{ visibility: "visible", animationDuration: "1s", animationName: "fadeInBottom" }}
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="contact-title">
                    <h2>Contact Us</h2>
                    {/* <!--  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit dolores ad molestiae rem repudiandae modi, quisquam illum hic euorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto sit accusamus</p> --> */}
                  </div>
                  <div className="contact-address">
                    <ContactAddress />
                  </div>
                </div>
                <div className="col-lg-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
