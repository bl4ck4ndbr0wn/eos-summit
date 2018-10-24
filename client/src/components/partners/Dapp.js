import React from "react";
import "./Dapp.css";

export default function Dapp() {
  return (
    <section id="dapp" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="section-title">
              <h3>Dapp Companies</h3>
              <span />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          {/* <!-- end col --> */}
          <div class="col-lg-4 col-md-4 col-sm-12 col-12">
            <div class="single-price">
              <div class="single-price-header text-center">
                <img
                  class="rounded-circle  img-fluid"
                  src="assets/img/speakers/person7.jpg"
                  alt=""
                />
              </div>
              <div class="single-price-btn text-center">
                <a href="#">ALpha Nganga</a>
                <p>Dance Party</p>
              </div>
            </div>
          </div>
          {/* <!-- end col --> */}
          <div class="col-lg-4 col-md-4 col-sm-12 col-12">
            <div class="single-price">
              <div class="single-price-header text-center">
                <img
                  class="rounded-circle  img-fluid"
                  src="assets/img/speakers/person7.jpg"
                  alt=""
                />
              </div>
              <div class="single-price-btn text-center">
                <a href="#">ALpha Nganga</a>
                <p>Dance Party</p>
              </div>
            </div>
          </div>
          {/* <!-- end col --> */}
          <div class="col-lg-4 col-md-4 col-sm-12 col-12">
            <div class="single-price">
              <div class="single-price-header text-center">
                <img
                  class="rounded-circle  img-fluid"
                  src="assets/img/speakers/person7.jpg"
                  alt=""
                />
              </div>
              <div class="single-price-btn text-center">
                <a href="#">ALpha Nganga</a>
                <p>Dance Party</p>
              </div>
            </div>
          </div>
          {/* <!-- end col --> */}
        </div>
      </div>
    </section>
  );
}
