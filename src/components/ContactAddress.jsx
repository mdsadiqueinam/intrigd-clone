import React from "react";
import { links } from "data";

export default function ContactAddress() {
  return (
    <ul>
      <li>
        <i className="fa fa-phone"></i>{" "}
        <span className="information">
          <a href={links.tel}>{links.tel.split(":")[1]}</a>
        </span>
      </li>
      <li>
        <i className="fa fa-envelope-o"></i>{" "}
        <span className="information">
          <a href={links.email}>{links.email.split(":")[1]}</a>
        </span>
      </li>
      {/* <!-- <li><i className="fa fa-map-o"></i> <span className="information">No 40 Baria Sreet 133/2 New York City, NY,<br> United States</span></li> --> */}
    </ul>
  );
}
