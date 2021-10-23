import React from "react";
import MenuItems from "./MenuItems";
import CollapsibleMenu from "./CollapsibleMenu";

export default function MobileMenu() {
  return (
    <div className="mobile-menu d-block d-lg-none mean-container">
      <CollapsibleMenu >
        <MenuItems />
      </CollapsibleMenu>
    </div>
  );
}
