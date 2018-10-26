import React from "react";
import Countdown from "react-countdown-now";

import "./Home.css";

export default function Home() {
  // "<h4>%d :<span>Days</span></h4>" +
  //   //         "<h4>%H :<span>hr</span></h4>" +
  //   //         "<h4>%M :<span>min</span></h4>" +
  //   //         "<h4>%S <span>sec</span></h4>"
  return (
    <section
      id="home"
      class="home-static-2 overlay section-back-image"
      style={{ backgroundImage: "url(assets/img/bg/home-static-2.jpg)" }}
    >
      <div class="container-fluid no-padding">
        <div class="row">
          <div class="home-static-middle col-lg-6 col-md-12 col-sm-12 col-12 text-center mx-auto">
            <div class="home-icon">
              <i class="icofont icofont-time" />
            </div>
            <p>November 30th, 2018</p>
            <div class="message-slider owl-carousel owl-theme">
              <div class="message-slider-text">
                <h2>EOS SUMMIT</h2>
              </div>
              <div class="message-slider-text">
                <h2>The Summit</h2>
              </div>
              <div class="message-slider-text">
                <h2>The eos dapps summit live</h2>
              </div>
            </div>
            <div class="home-coming-counter">
              <Countdown date="2018/11/30" renderer={renderer} />
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

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return (
      <span>
        {days}:{hours}:{minutes}:{seconds}
      </span>
    );
  } else {
    // Render a countdown
    return (
      <div class="countdown-container">
        <h4>
          {days} :<span>Days</span>
        </h4>

        <h4>
          {hours} :<span>hr</span>
        </h4>

        <h4>
          {minutes} :<span>min</span>
        </h4>

        <h4>
          {seconds} <span>sec</span>
        </h4>
      </div>
    );
  }
};
