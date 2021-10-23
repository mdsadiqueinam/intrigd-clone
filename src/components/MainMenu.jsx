import React from "react";
import logo from 'images/logo.png';
import DesktopMenu from "components/DesktopMenu";
import MobileMenu from "components/MobileMenu";
import { useBreakpoint } from "context/breakPoint";

export default function MainMenu() {
  const breakPoint = useBreakpoint();
  const isTablet = breakPoint.md;

  return (
    <div id="main-menu" className="header-top inner-header">
      <div className="container">
        <div className="row header-top-inner">
          <div className="col-lg-4">
            <div>
              <a href="http://localhost:3000/">
                <img style={{ height: "100px" }} src={logo} alt="Intigd Logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-8">
            { !isTablet && <DesktopMenu />}
          </div>
          <div className="col">
            {/* <!-- mobile-menu start --> */}
            { isTablet && <MobileMenu />}
            {/* <!-- mobile-menu end --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
