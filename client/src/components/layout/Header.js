import React from "react";

export default function Header() {
  return (
    <header id="header">
      <div class="container-fluid">
        <div class="navbar">
          <a href="index.html#" id="logo" title="Eos summit">
            <img
              src="images/logo.png"
              alt="Eos summit"
              style={{ height: "66px" }}
            />
          </a>
          <div class="navigation-row">
            <nav id="navigation">
              <button type="button" class="navbar-toggle">
                {" "}
                <i class="fa fa-bars" />{" "}
              </button>
              <div class="nav-box navbar-collapse">
                <ul class="navigation-menu nav navbar-nav navbars" id="nav">
                  <li data-menuanchor="slide01" class="active">
                    <a href="index.html#slide01">Home</a>
                  </li>
                  <li data-menuanchor="slide02">
                    <a href="index.html#slide02">About</a>
                  </li>
                  <li data-menuanchor="slide03">
                    <a href="index.html#slide03">Agenda</a>
                  </li>
                  <li data-menuanchor="slide04">
                    <a href="index.html#slide04">Speakers</a>
                  </li>
                </ul>
                {/* <!--/.navigation-menu--> */}
              </div>
              {/* <!--/.nav-box--> */}
            </nav>
            {/* <!--/#navigation--> */}
          </div>
          {/* <!--/.navigation-row--> */}
        </div>
        {/* <!--/.navbar--> */}
      </div>
      {/* <!--/.container--> */}
    </header>
    // <!--/#header-->
  );
}
