import React from "react";
import MenuItems from "./MenuItems";

export default function DesktopMenu() {
  return (
    <div className="main-menu">
      <nav className="main-navigation">
        <ul>
          <MenuItems />
        </ul>
      </nav>
    </div>
  );
}
