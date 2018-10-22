import React, { Component } from "react";
import "./Agenda.css";

export default class Agenda extends Component {
  render() {
    return (
      <div
        class="section fp-auto-height-responsive animated-row"
        data-section="slide03"
      >
        <div class="section-inner">
          <div class="row justify-content-center">
            <div class="col-md-7 wide-col-laptop">
              <div class="title-block animate" data-animate="fadeInUp">
                <h2>Agenda</h2>
              </div>
              {/* <!--/.title-block--> */}
              <div class="skills-row">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="service-box">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="main-timeline4">
                            <div class="timeline">
                              <a href="#" class="timeline-content">
                                <span class="year">2018</span>
                                <div class="inner-content">
                                  <h3 class="title">Web Designer</h3>
                                  <p
                                    class="description"
                                    style={{ color: "#fff" }}
                                  >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                  </p>
                                </div>
                              </a>
                            </div>
                            <div class="timeline">
                              <a href="#" class="timeline-content">
                                <span class="year">2017</span>
                                <div class="inner-content">
                                  <h3 class="title">Web Developer</h3>
                                  <p
                                    class="description"
                                    style={{ color: "#fff" }}
                                  >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                  </p>
                                </div>
                              </a>
                            </div>
                            <div class="timeline">
                              <a href="#" class="timeline-content">
                                <span class="year">2016</span>
                                <div class="inner-content">
                                  <h3 class="title">Web Designer</h3>
                                  <p
                                    class="description"
                                    style={{ color: "#fff" }}
                                  >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                  </p>
                                </div>
                              </a>
                            </div>
                            <div class="timeline">
                              <a href="#" class="timeline-content">
                                <span class="year">2015</span>
                                <div class="inner-content">
                                  <h3 class="title">Web Developer</h3>
                                  <p
                                    class="description"
                                    style={{ color: "#fff" }}
                                  >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--/.row--> */}
              </div>
              {/* <!--/.skills-row--> */}
            </div>
          </div>
        </div>
        {/* <!--/.section-inner--> */}
      </div>
    );
  }
}
