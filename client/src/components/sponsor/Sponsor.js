import React, { Component } from "react";
import PropTypes from "prop-types";

class Sponsor extends Component {
  render() {
    const sponsorList = this.props.sponsors.map(image => (
      <div className="col-md-3">
        <div className="single-sponsers" key={image._id}>
          <a href="#">
            <img
              src={image.image}
              alt={image.name}
              style={{ width: "139px", height: "70px" }}
            />
          </a>
        </div>
      </div>
    ));
    return (
      <div className="our-sponsers-area-tow pad100 bg-color">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="title-text mb50 xs-mb40">
                  <h2>Our Sponsers</h2>
                  <p>Supporting Partners</p>
                </div>
              </div>
            </div>
            {/* <!-- /col end--> */}
          </div>
          {/* <!-- /row end--> */}
          <div className="row">
            <div
              className="sponsers-active owl-carousel owl-theme"
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              {sponsorList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Sponsor.propTypes = {
  sponsors: PropTypes.func.isRequired
};

export default Sponsor;
