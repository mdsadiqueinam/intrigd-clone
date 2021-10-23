import React from "react";
import { animateScroll as scroll } from "react-scroll";

export default function ScrollToTopButton() {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div
      id="scrollToTopButton"
      style={{ position: "fixed", zIndex: "2147483647", display: "none", cursor: "pointer" }}
      onClick={scrollToTop}
    >
      <i className="fa fa-angle-double-up"></i>
    </div>
  );
}
