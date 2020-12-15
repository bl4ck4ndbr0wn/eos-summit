import React from "react";
// import "./About.css";

export default function About() {
  return (
    <section id="about" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-5 col-sm-12">
            <div class="about-image">
              <img class="img-fluid" src="assets/img/epcolor.jpg" alt="" />
            </div>
          </div>
          {/* <!-- end col --> */}
          <div class="col-lg-7 col-md-7 col-sm-12">
            <div class="section-title">
              <h3>About</h3>
              <span />
              <p>
                The EOS summit brings together some of the finest dApp projects
                and it will be streamed live via crowdcast, twitch, youtube and
                Bilibili (tentatively). All presentations will be processed and
                uploaded to youtube and Bilibili. We hope to invite everyone who
                just wants to know more about the EOS Blockchain and what it can
                offer.
                <br />
                We will be selecting DAPPS based on this idea. We need DAPPS and
                projects that are easy to understand. They must also be ready or
                preparing for mass adoption.
                <br />
                We will be selecting DAPPS based on this idea. We need DAPPS and
                projects that are easy to understand. They must also be ready or
                preparing for mass adoption.
              </p>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="single-feature">
                  <div class="single-feature-icon">
                    <i class="icofont icofont-microphone-alt" />
                  </div>
                  <div class="single-feature-text">
                    <h4>29 Speakers</h4>
                    <p>Professional</p>
                  </div>
                </div>
                <div class="single-feature">
                  <div class="single-feature-icon">
                    <i class="icofont icofont-ui-calendar" />
                  </div>
                  <div class="single-feature-text">
                    <h4>30th November</h4>
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
