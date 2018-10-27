import React from "react";

export default function Header() {
  return (
    <header class="header base-style-2">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="brand-logo">
              <a class="eventex-brand" href="index.html">
                <img
                  src="assets/img/epblack.png"
                  alt=""
                  style={{ height: "60px" }}
                />
              </a>
            </div>
          </div>
          {/* <!-- /col end--> */}
          <div class="col-lg-8">
            <nav class="navbar navbar-expand-lg">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon">
                  <i class="fa fa-bars" />
                </span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active ">
                    <a class="nav-link" href="#">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Speakers
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Event Schedule
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          {/* <!-- /col end--> */}
          <div class="col-lg-2 d-none d-lg-block">
            <ul>
              <li class="header-ticket">
                <a class="pr-0" href="#">
                  Buy Ticket
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- /col end--> */}
        </div>
        {/* <!-- /row end--> */}
      </div>
      {/* <!-- container end--> */}
    </header>
  );
}
