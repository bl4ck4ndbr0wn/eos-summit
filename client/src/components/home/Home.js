import React from "react";

import "./Home.css";

export default function Home() {
  return (
    <div class="hero-banner-area home-2 hero-bg-2 parallax no-attm">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="banner-content">
              <div class="upcoming">
                <span class="is-countdown"> </span>
                <div data-countdown="2018/11/30" />
              </div>
              <h3>EOS Dapp Summit Conferences</h3>
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
