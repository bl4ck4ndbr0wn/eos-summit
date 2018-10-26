import React from "react";

export default function BlockProducer() {
  return (
    <section id="bpsponsors" class="sponsors-section bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="section-title">
              <h3>Supporting Block Producers</h3>
              <span />
            </div>
          </div>
          <div class="col-lg-12 text-center">
            <div class="sponsors-slider owl-carousel owl-theme">
              <div class="single-sponsors">
                <a href="index-2.html#">
                  <img
                    class="img-fluid"
                    src="assets/img/sponsor/eosph.png"
                    alt=""
                  />
                  <p>EOS PH</p>
                </a>
              </div>
              <div class="single-sponsors">
                <a href="index-2.html#">
                  <img
                    class="img-fluid"
                    src="assets/img/sponsor/eosrio.png"
                    alt=""
                  />
                  <p>EOS RIO</p>
                </a>
              </div>
              <div class="single-sponsors">
                <a href="index-2.html#">
                  <img
                    class="img-fluid"
                    src="assets/img/sponsor/eossweden.png"
                    alt=""
                    style={{ backgroundColor: "black" }}
                  />
                  <p>EOSSweden - TBC</p>
                </a>
              </div>
              <div class="single-sponsors">
                <a href="index-2.html#">
                  <img
                    class="img-fluid"
                    src="assets/img/sponsor/eoscanada.svg"
                    alt=""
                    style={{ backgroundColor: "black" }}
                  />
                  <p>EOS Canada</p>
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
