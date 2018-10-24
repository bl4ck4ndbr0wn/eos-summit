import React from "react";
// import "./About.css";

export default function About() {
  return (
    <section id="about" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-5 col-sm-12">
            <div class="about-image">
              <img class="img-fluid" src="assets/img/bg/about.png" alt="" />
            </div>
          </div>
          {/* <!-- end col --> */}
          <div class="col-lg-7 col-md-7 col-sm-12">
            <div class="section-title">
              <h3>About Live Events</h3>
              <span />
              <p>
                The First Webcast Conference For EOS Token Holders! Come join
                the global community for a virtual 24hr EOS webcast conference.
                Participate from the comfort of your own home!
              </p>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="single-feature">
                  <div class="single-feature-icon">
                    <i class="icofont icofont-microphone-alt" />
                  </div>
                  <div class="single-feature-text">
                    <h4>10 Speakers</h4>
                    <p>Professional</p>
                  </div>
                </div>
                <div class="single-feature">
                  <div class="single-feature-icon">
                    <i class="icofont icofont-ui-calendar" />
                  </div>
                  <div class="single-feature-text">
                    <h4>20 - 26 Dec</h4>
                    <p>2018</p>
                  </div>
                </div>
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
