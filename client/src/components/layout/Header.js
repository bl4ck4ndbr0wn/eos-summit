import React from "react";

export default function Header() {
  return (
    <header className="header base-style-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="brand-logo">
              <a className="eventex-brand" href="index.html">
                {/* <img
                  src="assets/img/epblack.png"
                  alt=""
                  style={{ height: "60px" }}
                /> */}
              </a>
            </div>
          </div>
          {/* <!-- /col end--> */}
          <div className="col-lg-8">
            <nav className="navbar navbar-expand-lg">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <i className="fa fa-bars" />
                </span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active ">
                    <a className="nav-link" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Speakers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#events">
                      Event Schedule
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          {/* <!-- /col end--> */}
        </div>
        {/* <!-- /row end--> */}
      </div>
      {/* <!-- container end--> */}
    </header>
  );
}
