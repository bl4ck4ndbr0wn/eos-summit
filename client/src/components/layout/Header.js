import React from "react";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#home">
          <img
            class="img-fluid"
            src="assets/img/epcolor.png"
            alt=""
            style={{ height: "55px" }}
          />
        </a>
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          MENU
          <i class="fa fa-bars" />
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#agenda">
                Agenda
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#speakers">
                Speakers
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#dapp">
                DAPP COMPANIES
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#organizingsponsors">
                Partners
              </a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#media">
                Media Partners
              </a>
            </li> */}
            {/* <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#contact">
                Contact
              </a>
            </li> */}
            <li class="nav-item ticket-btn">
              <a class="nav-link" href="#">
                <i class="icofont icofont-plane-ticket" /> Get Ticket
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
