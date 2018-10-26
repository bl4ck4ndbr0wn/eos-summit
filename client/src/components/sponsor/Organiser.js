import React from "react";

export default function Organiser() {
  return (
    <section id="organizingsponsors" class="sponsors-section bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="section-title">
              <h3>Co-Organizers</h3>
              <span />
            </div>
          </div>
          <div class="col-lg-12 text-center">
            <div class="sponsors-slider owl-carousel owl-theme">
              <div class="single-sponsors">
                <a href="index-2.html#">
                  <img
                    class="img-fluid"
                    src="assets/img/sponsor/eosgravity.jpg"
                    alt=""
                  />
                  <p>EOS Gravity</p>
                </a>
              </div>
              <div class="single-sponsors">
                <a href="index-2.html#">
                  <img
                    class="img-fluid"
                    src="assets/img/sponsor/iwad.jpg"
                    alt=""
                  />
                  <p>Investing with a difference (IWAD)</p>
                </a>
              </div>
              <div class="single-sponsors">
                <a href="index-2.html#">
                  <img
                    class="img-fluid"
                    src="assets/img/sponsor/EOSNation.png"
                    alt=""
                  />
                  <p>EOS Nation</p>
                </a>
              </div>
              <div class="single-sponsors">
                <a href="index-2.html#">
                  <img
                    class="img-fluid"
                    src="assets/img/sponsor/eosnairobi.jpg"
                    alt=""
                  />
                  <p>EOS Nairobi</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!--- END ROW --> */}
      </div>
      {/* <!--- END CONTAINER --> */}
    </section>
  );
}
