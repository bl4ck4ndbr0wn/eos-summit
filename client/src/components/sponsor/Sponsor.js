import React from "react";

export default function Sponsor() {
  return (
    <section id="supportsponsors" class="sponsors-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="section-title">
              <h3>Supporting Partners</h3>
              <span />
            </div>
          </div>
          <div class="col-lg-12 text-center">
            <div class="sponsors-slider owl-carousel owl-theme">
              <div class="single-sponsors">
                <a href="index-2.html#">
                  <img
                    class="img-fluid"
                    src="assets/img/sponsor/eosIsrael.jpg"
                    alt=""
                  />
                  <p>EOS Israel</p>
                </a>
              </div>
              <div class="single-sponsors">
                <a href="index-2.html#">
                  <img
                    class="img-fluid"
                    src="assets/img/sponsor/eosblack.jpeg"
                    alt=""
                  />
                  <p>EOS Black</p>
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
