import React from "react";

import "./Home.css";

export default function Home({ particalsOptions }) {
  return (
    <div className="hero-banner-area home-2 hero-bg-2 parallax no-attm">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-content">
              <div className="upcoming">
                <span className="is-countdown"> </span>
                <div data-countdown="2018/11/30" />
              </div>
              <h3 className="text-center">EOS Dapp Summit Conferences</h3>
            </div>
          </div>
          {/* <!-- /col end--> */}
        </div>
        {/* <!-- /row end--> */}
      </div>
      {/* <!-- /container end--> */}
    </div>
  );
}
