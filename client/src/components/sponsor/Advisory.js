import React, { Component } from "react";

export default class Advisory extends Component {
  render() {
    const advisoryList = this.props.advisorycommitee.map(image => (
      <div className="single-sponsers">
        <a href="#">
          <img
            src={image.image}
            alt=""
            style={{ width: "139px", height: "70px" }}
          />
        </a>
      </div>
    ));
    return (
      <div className="our-sponsers-area-tow pad100 bg-color">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="title-text mb50 xs-mb40">
                  <h2>Advisory Commitee</h2>
                </div>
              </div>
            </div>
            {/* <!-- /col end--> */}
          </div>
          {/* <!-- /row end--> */}
          <div className="row">
            <div className="sponsers-active owl-carousel owl-theme">
              <div className="col-lg-12">{advisoryList}</div>
            </div>
          </div>
          {/* <!-- /row end--> */}
        </div>
        {/* <!-- /container end--> */}
      </div>
    );
  }
}
