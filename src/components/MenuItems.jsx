import React, { Fragment, useState } from "react";
import { Link } from "react-scroll";
import { menuItems } from "data";

export default function MenuItems() {
  const [active, setActive] = useState(menuItems[0].to);
  return (
    <Fragment>
      {menuItems.map((item) => (
        <li key={item.to} className={active === item.to ? "active" : ""}>
          <Link
            to={item.to}
            spy={true}
            smooth={true}
            duration={800}
            offset={0}
            onSetActive={() => setActive(item.to)}
            absolute
          >
            {item.name}
          </Link>
        </li>
      ))}
    </Fragment>
  );
}
