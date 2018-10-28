import React from "react";

export default function Boucher() {
  return (
    <div className="counter-up-area pad100 bg-counter parallax">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3">
            <div className="single-counter xs-mb40">
              <div className="count-content">
                <span className="count">80</span>
                <p>Dapp Companies</p>
              </div>
            </div>
          </div>
          {/* <!-- /col end--> */}
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3">
            <div className="single-counter xs-mb40">
              <div className="count-content">
                <span className="count">120</span>
                <p>Programs</p>
              </div>
            </div>
          </div>
          {/* <!-- /col end--> */}
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3">
            <div className="single-counter xs-mb40">
              <div className="count-content">
                <span className="count">29</span>
                <p>Speakers</p>
              </div>
            </div>
          </div>
          {/* <!-- /col end--> */}
          <div className="col-xl-3 col-lg-3 d-md-none d-lg-block col-sm-3">
            <div className="single-counter">
              <div className="count-content">
                <span className="count">30</span>
                <p>Sponsors</p>
              </div>
            </div>
          </div>
          {/* <!-- /col end--> */}
        </div>
        {/* <!-- /row end--> */}
      </div>
      {/* <!-- /container end--> */}
    </div>
  );
}
