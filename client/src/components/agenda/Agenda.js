import React, { Component } from "react";
import "./Agenda.css";

export default class Agenda extends Component {
  render() {
    return (
      <section id="agenda" class="section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="section-title">
                <h3>Agenda</h3>
                <span />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            {/* <!-- end col --> */}
            <div class="col-lg-12 schedule-tab">
              <ul
                id="tabsJustified"
                class="nav nav-tabs justify-content-center text-center"
              >
                <li class="nav-item">
                  <a
                    href="#"
                    data-target="#one"
                    data-toggle="tab"
                    class="nav-link"
                  >
                    <p>Dec 24, 2018</p>
                    <span>Saturday</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="#"
                    data-target="#two"
                    data-toggle="tab"
                    class="nav-link active"
                  >
                    <p>Dec 25, 2018</p>
                    <span>Sunday</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="#"
                    data-target="#three"
                    data-toggle="tab"
                    class="nav-link"
                  >
                    <p>Dec 26, 2018</p>
                    <span>Monday</span>
                  </a>
                </li>
              </ul>
              <div id="tabsJustifiedContent" class="tab-content">
                <div id="one" class="tab-pane fade">
                  <div class="schedule-single">
                    <div class="row">
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <img
                          class="rounded  img-fluid"
                          src="assets/img/speakers/person6.jpg"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="schedule-single-info">
                          <h4>Reinventing Experiences to All</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p>
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Jon Doe
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            20 Dec 2018
                          </span>
                          <span class="post-comment">
                            <i class="icofont icofont-location-pin" />
                            Theater Room 5
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <a href="##" class="schedule-btn">
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end single schedule --> */}
                  <div class="schedule-single">
                    <div class="row">
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <img
                          class="rounded  img-fluid"
                          src="assets/img/speakers/person7.jpg"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="schedule-single-info">
                          <h4>Champagne Serving</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p>
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            21 Dec 2018
                          </span>
                          <span class="post-comment">
                            <i class="icofont icofont-location-pin" />
                            Theater Room 5
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <a href="##" class="schedule-btn">
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end single schedule --> */}
                  <div class="schedule-single">
                    <div class="row">
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <img
                          class="rounded  img-fluid"
                          src="assets/img/speakers/person8.jpg"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="schedule-single-info">
                          <h4>July Food Festival</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p>
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Dran Group
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            22 Dec 2018
                          </span>
                          <span class="post-comment">
                            <i class="icofont icofont-location-pin" />
                            Theater Room 5
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <a href="##" class="schedule-btn">
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end single schedule --> */}
                  <div class="schedule-single">
                    <div class="row">
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <img
                          class="rounded  img-fluid"
                          src="assets/img/speakers/person4.jpg"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="schedule-single-info">
                          <h4>Nikkole Singing</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p>
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mike Smith
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            23 Dec 2018
                          </span>
                          <span class="post-comment">
                            <i class="icofont icofont-location-pin" />
                            Theater Room 5
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <a href="##" class="schedule-btn">
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end single schedule --> */}
                </div>
                <div id="two" class="tab-pane active show fade">
                  <div class="schedule-single">
                    <div class="row">
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <img
                          class="rounded  img-fluid"
                          src="assets/img/speakers/person5.jpg"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="schedule-single-info">
                          <h4>Welcome & Registration</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p>
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Kyle Mark
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            24 Dec 2018
                          </span>
                          <span class="post-comment">
                            <i class="icofont icofont-location-pin" />
                            Theater Room 5
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <a href="##" class="schedule-btn">
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end single schedule --> */}
                  <div class="schedule-single">
                    <div class="row">
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <img
                          class="rounded  img-fluid"
                          src="assets/img/speakers/person2.jpg"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="schedule-single-info">
                          <h4>How to make beautiful design ?</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p>
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Stepen Bay
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            25 Dec 2018
                          </span>
                          <span class="post-comment">
                            <i class="icofont icofont-location-pin" />
                            Theater Room 5
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <a href="##" class="schedule-btn">
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end single schedule --> */}
                  <div class="schedule-single">
                    <div class="row">
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <img
                          class="rounded  img-fluid"
                          src="assets/img/speakers/person4.jpg"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="schedule-single-info">
                          <h4>How to optimize design ?</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p>
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Maria law
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            26 Dec 2018
                          </span>
                          <span class="post-comment">
                            <i class="icofont icofont-location-pin" />
                            Theater Room 5
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <a href="##" class="schedule-btn">
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end single schedule --> */}
                  <div class="schedule-single">
                    <div class="row">
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <img
                          class="rounded  img-fluid"
                          src="assets/img/speakers/person1.jpg"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="schedule-single-info">
                          <h4>Introduction about event & conference</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p>
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Marlen Waller
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            27 Dec 2018
                          </span>
                          <span class="post-comment">
                            <i class="icofont icofont-location-pin" />
                            Theater Room 5
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <a href="##" class="schedule-btn">
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end single schedule --> */}
                </div>
                <div id="three" class="tab-pane fade">
                  <div class="schedule-single">
                    <div class="row">
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <img
                          class="rounded  img-fluid"
                          src="assets/img/speakers/person2.jpg"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="schedule-single-info">
                          <h4>Halloween Festival</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p>
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mhala Deen
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            21 Dec 2018
                          </span>
                          <span class="post-comment">
                            <i class="icofont icofont-location-pin" />
                            Theater Room 5
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <a href="##" class="schedule-btn">
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end single schedule --> */}
                  <div class="schedule-single">
                    <div class="row">
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <img
                          class="rounded  img-fluid"
                          src="assets/img/speakers/person3.jpg"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="schedule-single-info">
                          <h4>Menu Serving</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p>
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Hory Moon
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            22 Dec 2018
                          </span>
                          <span class="post-comment">
                            <i class="icofont icofont-location-pin" />
                            Theater Room 5
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <a href="##" class="schedule-btn">
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end single schedule --> */}
                  <div class="schedule-single">
                    <div class="row">
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <img
                          class="rounded  img-fluid"
                          src="assets/img/speakers/person1.jpg"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="schedule-single-info">
                          <h4>Fireworks</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p>
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Sat Rolens
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            20 Dec 2018
                          </span>
                          <span class="post-comment">
                            <i class="icofont icofont-location-pin" />
                            Theater Room 5
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <a href="##" class="schedule-btn">
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end single schedule --> */}
                  <div class="schedule-single">
                    <div class="row">
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <img
                          class="rounded  img-fluid"
                          src="assets/img/speakers/person4.jpg"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="schedule-single-info">
                          <h4>Introduction about event & conference</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p>
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Sharleen Charles
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            23 Dec 2018
                          </span>
                          <span class="post-comment">
                            <i class="icofont icofont-location-pin" />
                            Theater Room 5
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <a href="##" class="schedule-btn">
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end single schedule --> */}
                </div>
              </div>
            </div>
            <div class="col-lg-12 text-center">
              <div class="do-schedule-btn">
                <a href="##">
                  <i class="icofont icofont-download-alt" /> Download Schedule
                </a>
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
}
