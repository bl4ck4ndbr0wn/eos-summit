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
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p> */}
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
                    class="nav-link active"
                  >
                    <p>Nov 30, 2018</p>
                    <p>1pm - 11:10pm</p>
                    <span>Session 1</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="#"
                    data-target="#two"
                    data-toggle="tab"
                    class="nav-link "
                  >
                    <p>Nov 30, 2018</p>
                    <p>1pm - 11:10pm</p>
                    <span>Session 2</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="#"
                    data-target="#three"
                    data-toggle="tab"
                    class="nav-link"
                  >
                    <p>Nov 30, 2018</p>
                    <p>1pm - 11:10pm</p>
                    <span>Session 3</span>
                  </a>
                </li>
              </ul>
              <div id="tabsJustifiedContent" class="tab-content">
                <div id="one" class="tab-pane active show  fade">
                  <div class="schedule-single">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="schedule-single-info">
                          <h4>Welcome & Opening</h4>
                        </div>
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
                          <h4>Worbli</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                          <h4>Ono</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>OracleChain</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>My Wish</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>Publyto</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="schedule-single-info">
                          <h4>Incubator</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end single schedule --> */}
                  <div class="schedule-single">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="schedule-single-info">
                          <h4>Break</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>If When Then</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>Prospectors</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>Weripedia</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>BOAA</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>Incubator</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>Panel</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>Break</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end single schedule --> */}
                </div>
                <div id="two" class="tab-pane fade">
                  <div class="schedule-single">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="schedule-single-info">
                          <h4>Opening</h4>
                        </div>
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
                          <h4>Bitjoy</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                          <h4>Slow Mist</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>Emanate</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>Infiniverse</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="schedule-single-info">
                          <h4>Incubator</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end single schedule --> */}
                  <div class="schedule-single">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="schedule-single-info">
                          <h4>Break</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>Bancor</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>Uncloak</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>Atticlab</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>Lumeos</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>Chintai</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>Incubator</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>Panel</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>Break</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end single schedule --> */}
                </div>
                <div id="three" class="tab-pane fade">
                  <div class="schedule-single">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="schedule-single-info">
                          <h4>Opening</h4>
                        </div>
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
                          <h4>Carmel</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                          <h4>EOS Bootcamp</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>Katalyo</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>Europechain</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="schedule-single-info">
                          <h4>Incubator</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end single schedule --> */}
                  <div class="schedule-single">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="schedule-single-info">
                          <h4>Break</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>Chestnut</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>IDPass</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>N/A</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>N/A</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>Incubator</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end single schedule --> */}{" "}
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
                          <h4>Panel</h4>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </p> */}
                          <span class="post-admin">
                            <a href="#">
                              <i class="icofont icofont-business-man-alt-3" />
                              Mark Henry
                            </a>
                          </span>
                          <span class="post-date">
                            <i class="icofont icofont-clock-time" />
                            40min
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
                  {/* <!-- end single schedule --> */}{" "}
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
