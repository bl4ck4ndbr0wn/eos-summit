import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      class="home-static-2 overlay section-back-image"
      data-background="assets/img/bg/home-static-2.jpg"
    >
      <div class="container-fluid no-padding">
        <div class="row">
          <div class="home-static-middle col-lg-6 col-md-12 col-sm-12 col-12 text-center mx-auto">
            <div class="home-icon">
              <i class="icofont icofont-time" />
            </div>
            <p>December 20-29, 2017</p>
            <div class="message-slider owl-carousel owl-theme">
              <div class="message-slider-text">
                <h2>
                  Evanta Landing <br /> page
                </h2>
              </div>
              <div class="message-slider-text">
                <h2>
                  Business Event <br /> Page
                </h2>
              </div>
              <div class="message-slider-text">
                <h2>
                  Our Event <br /> Launch
                </h2>
              </div>
            </div>
            <div class="home-coming-counter">
              <div class="countdown-container" id="clock" />
            </div>
            <div class="home-btn-wrapper">
              <a href="index-2.html#about" class="js-scroll-trigger btn-home">
                Register Now
              </a>
            </div>
          </div>
          {/* <!--- END COL --> */}
        </div>
        {/* <!--- END ROW --> */}
      </div>
      {/* <!--- END CONTAINER --> */}
    </section>
  );
}
