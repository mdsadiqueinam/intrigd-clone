import React from "react";
import MenuItems from "./MenuItems";
import CollapsibleMenu from "./CollapsibleMenu";

export default function MobileMenu() {
  return (
    <div className="mobile-menu d-block d-lg-none mean-container">
      {/* <div className="mean-bar">
        <a
          href="#nav"
          className="meanmenu-reveal menuclose"
          style={{ right: 0, left: "auto" }}
        >
          <span
            className={isOpen ? "menu-close" : "menu-bar"}
            onClick={handleMenu}
          ></span>
        </a>
        <nav className="mean-nav">
          <ul>
            <MenuItems />
          </ul>
        </nav>
      </div> */}
      <CollapsibleMenu >
        <MenuItems />
      </CollapsibleMenu>
    </div>
  );
}
