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
import Organiser from "../components/sponsor/Organiser";
import Advisory from "../components/sponsor/Advisory";
import BlockProducer from "../components/sponsor/BlockProducer";

class App extends Component {
  render() {
    return (
      <div>
        <div class="loader">
          <div class="loader--dot" />
          <div class="loader--dot" />
          <div class="loader--dot" />
          <div class="loader--dot" />
          <div class="loader--dot" />
          <div class="loader--dot" />
          <div class="loader--text" />
        </div>
        <div class="main-container">
          <Header />
          <Home />
          <About />
          <Boucher />
          <Sponsor />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
