import React from "react";

export default function Advisory() {
  return (
    <section id="advisorysponsors" class="sponsors-section bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="section-title">
              <h3>Advisory Commitee</h3>
              <span />
            </div>
          </div>
          <div class="col-lg-12 text-center">
            <div class="sponsors-slider owl-carousel owl-theme">
              <div class="single-sponsors">
                <a href="index-2.html#">
                  <img
                    class="img-fluid"
                    src="assets/img/sponsor/eosiosg.png"
                    alt=""
                  />
                  <p>EOSIO.SG</p>
                </a>
              </div>
              <div class="single-sponsors">
                <a href="index-2.html#">
                  <img
                    class="img-fluid"
                    src="assets/img/sponsor/eossys.jpg"
                    alt=""
                  />
                  <p>EOSSYS</p>
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
