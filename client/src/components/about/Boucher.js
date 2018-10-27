import React from "react";

export default function Boucher() {
  return (
    <div class="counter-up-area pad100 bg-counter parallax">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-3">
            <div class="single-counter xs-mb40">
              <div class="count-content">
                <span class="count">80</span>
                <p>Dapp Companies</p>
              </div>
            </div>
          </div>
          {/* <!-- /col end--> */}
          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-3">
            <div class="single-counter xs-mb40">
              <div class="count-content">
                <span class="count">120</span>
                <p>Programs</p>
              </div>
            </div>
          </div>
          {/* <!-- /col end--> */}
          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-3">
            <div class="single-counter xs-mb40">
              <div class="count-content">
                <span class="count">29</span>
                <p>Speakers</p>
              </div>
            </div>
          </div>
          {/* <!-- /col end--> */}
          <div class="col-xl-3 col-lg-3 d-md-none d-lg-block col-sm-3">
            <div class="single-counter">
              <div class="count-content">
                <span class="count">30</span>
                <p>Sponsors</p>
              </div>
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
