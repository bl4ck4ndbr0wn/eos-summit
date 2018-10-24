import React from "react";

export default function Boucher() {
  return (
    <section
      id="boucher"
      class="section-padding overlay section-back-image"
      data-background="assets/img/bg/promo-bg-2.jpg"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12 text-center">
            <div class="boucher-promo">
              <h3>
                Are you ready to attend? Order your boucher today for free!
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy.
              </p>
              <div class="boucher-order">
                <a
                  href="index-2.html#contact"
                  class="js-scroll-trigger btn-order"
                >
                  <i class="icofont icofont-cart-alt" />
                  Get Ticket
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
