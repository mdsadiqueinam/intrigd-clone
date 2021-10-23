import React from "react";

export default function AboutContent() {
  return (
    <div className="about-content">
      <div className="about-title">
        <h2>About Intrigd</h2>
        <p>An opinion aggregator for long format content .</p>
      </div>

      <ul>
        <li>
          <i className="ion-checkmark-round"></i> presents unbiased content with
          a vast coverage across industries and daily events
        </li>
        <li>
          <i className="ion-checkmark-round"></i> helps in effortless
          consumption of opinions through meaningful summaries
        </li>
      </ul>
      <div className="about-btn">
        <a href={window.location.href} className="button">
          Download
        </a>
      </div>
    </div>
  );
}
