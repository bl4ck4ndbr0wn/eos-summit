import React, { Component } from "react";

export default class Speaker extends Component {
  render() {
    return (
      <div
        class="section fp-auto-height-responsive animated-row"
        data-section="slide04"
      >
        <div class="section-inner">
          <div class="row justify-content-center">
            <div class="col-md-8 wide-col-laptop">
              <div class="title-block animate" data-animate="fadeInUp">
                <h2>Speakers</h2>
              </div>
              {/* <!--/.title-block--> */}
              <div class="services-section">
                <div class="services-list owl-carousel">
                  <div class="item animate" data-animate="fadeInUp">
                    <div class="service-box">
                      <span class="service-icon">
                        {/* <i class="fa fa-television" aria-hidden="true" /> */}
                        {/* <figure class="client-img">
                          <img src="images/client-04.jpg" alt="" />
                        </figure> */}
                        <img
                          src="images/client-04.jpg"
                          alt=""
                          style={{
                            borderRadius: "50%",
                            boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.4)",
                            border: "10px solid #f54957"
                          }}
                        />
                      </span>
                      <h3>Web Development</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                    </div>
                    {/* <!--/.service-box--> */}
                  </div>
                  {/* <!--/.item--> */}
                  <div class="item animate" data-animate="fadeInUp">
                    <div class="service-box">
                      <span class="service-icon">
                        <i class="fa fa-paint-brush" aria-hidden="true" />
                      </span>
                      <h3>Web Design</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                    </div>
                  </div>
                  {/* <!--/.item--> */}
                  <div class="item animate" data-animate="fadeInUp">
                    <div class="service-box">
                      <span class="service-icon">
                        <i class="fa fa-gift" aria-hidden="true" />
                      </span>
                      <h3>Brand Identity</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                    </div>
                  </div>
                  {/* <!--/.item--> */}

                  <div class="item animate" data-animate="fadeInUp">
                    <div class="service-box">
                      <span class="service-icon">
                        <i class="fa fa-bullseye" aria-hidden="true" />
                      </span>
                      <h3>SEO</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                    </div>
                  </div>
                  {/* <!--/.item--> */}
                  <div class="item animate" data-animate="fadeInUp">
                    <div class="service-box">
                      <span class="service-icon">
                        <i class="fa fa-bullhorn" aria-hidden="true" />
                      </span>
                      <h3>Marketing</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                    </div>
                  </div>
                  {/* <!--/.item--> */}
                  <div class="item animate" data-animate="fadeInUp">
                    <div class="service-box">
                      <span class="service-icon">
                        <i class="fa fa-camera" aria-hidden="true" />
                      </span>
                      <h3>Photography</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                    </div>
                  </div>
                  {/* <!--/.item--> */}
                </div>
                {/* <!--/.services-list--> */}
              </div>
              {/* <!--/.services-section--> */}
            </div>
          </div>
        </div>
        {/* <!--/.section-inner--> */}
      </div>
    );
  }
}
