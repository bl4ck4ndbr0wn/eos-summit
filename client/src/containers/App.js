import React, { Component } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Agenda from "../components/agenda/Agenda";
import Speaker from "../components/speakers/Speaker";

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <div class="preloader">
          <div class="preloader-bounce">
            <span />
            <span />
            <span />
          </div>
          <h3>EOS Summit</h3>
        </div>

        {/* <!--HEADER START--> */}
        <Header />
        {/* <!--HEADER END--> */}

        <div
          class="wrapper-background"
          style={{ backgroundImage: "url(images/wrapper-bg.jpg)" }}
        />

        {/* <!--MAIN SECTION START--> */}
        <div id="fullpage" class="fullpage-default">
          <Home />
          <About />
          <Agenda />
          <Speaker />
          {/* <!--/.section--> */}
        </div>
        {/* <!--MAIN SECTION END--> */}

        {/* <!--FOOTER START--> */}
        <Footer />
        {/* <!--FOOTER END--> */}
      </div>
    );
  }
}

export default App;
