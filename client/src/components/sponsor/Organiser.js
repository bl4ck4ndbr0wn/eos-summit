import React from "react";

export default function Organiser() {
  return (
    <div class="our-sponsers-area-tow pad100 bg-color">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <div class="title-text mb50 xs-mb40">
                <h2>Co-Organizers</h2>
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
                  <img src="assets/img/sponsor/eosgravity.jpg" alt="" />
                </a>
              </div>
              <div class="boder" />
              <div class="single-sponsers">
                <a href="#">
                  <img src="assets/img/sponsor/iwad.jpg" alt="" />
                </a>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="single-sponsers">
                <a href="#">
                  <img src="assets/img/sponsor/EOSNation.png" alt="" />
                </a>
              </div>
              <div class="boder" />
              <div class="single-sponsers">
                <a href="#">
                  <img src="assets/img/sponsor/eosnairobi.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /row end--> */}
      </div>
      {/* <!-- /container end--> */}
    </div>
  );
}
