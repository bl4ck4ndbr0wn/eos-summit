import React from "react";

export default function Boucher() {
  return (
    <section
      id="boucher"
      class="section-padding overlay section-back-image"
      style={{ backgroundImage: "url(assets/img/bg/promo-bg-2.jpg)" }}
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12 text-center">
            <div class="boucher-promo">
              <h3>Are you ready to attend? Get your Ticket today for free!</h3>
              <p>Everyone is waiting to see the next big DAPP.</p>
              <div class="boucher-order">
                <a href="#" class="js-scroll-trigger btn-order">
                  <i class="icofont icofont-cart-alt" />
                  REGISTER
                </a>
              </div>
            </div>
          </div>
          {/* <!-- end col --> */}
        </div>
        {/* <!--- END ROW --> */}
      </div>
      {/* <!--- END CONTAINER --> */}
    </section>
  );
}
