import React from "react";
import Slider from "react-slick";
import { profiles } from "data";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
};

function achievedStars(stars) {
  let achievedStars = [];
  const star = "fa fa-star";
  const emptyStar = "fa fa-star-o";

  for (let i = 1; i <= 5; i++) {
    achievedStars.push(
      <li key={i}>
        <a href={window.location.href} tabIndex="-1" >
          <i className={i<=stars ? star : emptyStar}></i>
        </a>
      </li>
    );
  }
  return achievedStars;
}

export default function Testimonial() {

  return (
    <div
      id="testimonial"
      className="testimonial-area section-ptb gradient-overly"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 ml-auto mr-auto">
            <div className="testimonial-content testimonial-active slick-initialized slick-slider slick-dotted">
              <div className="slick-list draggable">
                <Slider {...settings}>
                  {profiles.map((profile, index) => (
                    <div
                      className="single-testimonial slick-slide slick-cloned"
                      data-slick-index="-1"
                      aria-hidden="true"
                      style={{ width: "770px" }}
                      key={index}
                    >
                      <div className="client-image">
                        <img
                          src={profile.image}
                          alt={profile.name.toLowerCase()}
                        />
                      </div>
                      <div className="client-rating">
                        <ul className="d-flex">
                          {achievedStars(profile.stars)}
                        </ul>
                      </div>
                      <div className="testimonial-text">
                        <p className="client-texe-dec">{profile.description}</p>
                        <div className="test-author">
                          <h3>{profile.name}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
