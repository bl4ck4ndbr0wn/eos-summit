import React from "react";

export default function Sponsor() {
  return (
    <div class="our-sponsers-area-tow pad100 bg-color">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <div class="title-text mb50 xs-mb40">
                <h2>Our Sponsers</h2>
                <p>Supporting Partners</p>
              </div>
            </div>
          </div>
          {/* <!-- /col end--> */}
        </div>
        {/* <!-- /row end--> */}
        <div class="row">
          <div class="sponsers-active owl-carousel owl-theme">
            <div class="col-lg-12">
              <div class="single-sponsers">
                <a href="#">
                  <img src="assets/img/sponsor/eosIsrael.jpg" alt="" />
                </a>
              </div>
              <div class="boder" />
              <div class="single-sponsers">
                <a href="#">
                  <img src="assets/img/sponsor/eosblack.jpeg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="primary-btn text-center">
              <a href="#" class="btn-primary">
                Become Sponsor
              </a>
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
