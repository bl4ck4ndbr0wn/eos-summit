import React, { Component } from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Boucher from "../components/about/Boucher";
import Agenda from "../components/agenda/Agenda";
import Speaker from "../components/speakers/Speaker";
import Sponsor from "../components/sponsor/Sponsor";
import MediaPartner from "../components/partners/MediaPartner";
import Dapp from "../components/partners/Dapp";

class App extends Component {
  render() {
    return (
      <div>
        <div class="preloader">
          <div class="loadscreen">
            <div class="loadscreen-in">
              <img class="img-fluid" src="assets/img/epcolor.png" alt="" />
            </div>
          </div>
        </div>

        {/* <!--HEADER START--> */}
        <Header />
        {/* <!--HEADER END--> */}

        {/* <!--MAIN SECTION START--> */}
        <Home />
        <About />
        <Boucher />
        <Agenda />
        <Speaker />
        <Dapp />
        <MediaPartner />
        <Sponsor />
        {/* <!--MAIN SECTION END--> */}

        {/* <!--FOOTER START--> */}
        <Footer />
        {/* <!--FOOTER END--> */}
      </div>
    );
  }
}

export default App;
