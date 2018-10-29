import React, { Component } from "react";
import PropTypes from "prop-types";
class Organiser extends Component {
  render() {
    const organizerList = this.props.coorganizes.map(image => (
      <div className="col-lg-12">
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
                  <h2>Co-Organizers</h2>
                </div>
              </div>
            </div>
            {/* <!-- /col end--> */}
          </div>
          {/* <!-- /row end--> */}
          <div className="row">
            <div className="sponsers-active owl-carousel owl-theme">
              {organizerList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Organiser.propTypes = {
  coorganizes: PropTypes.func.isRequired
};

export default Organiser;
