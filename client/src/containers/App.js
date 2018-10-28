import React, { Component } from "react";
import axios from "axios";

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
  constructor(props) {
    super(props);
    this.state = {
      companyList: []
    };
  }

  // Enable Realtime updates via Socket.io
  async componentDidMount() {
    this.loadCompanies();
  }
  // Load posts
  loadCompanies = async () => {
    const response = await axios.get("http://localhost:5000/api/company");
    this.setState({ companyList: response.data.reverse() });
  };

  render() {
    const { companyList } = this.state;

    const coorganizes = companyList.filter(e => e.category === "CO");
    const blockproducer = companyList.filter(e => e.category === "BP");
    const advisorycommitee = companyList.filter(e => e.category === "AC");
    const sponsors = companyList.filter(e => e.category === "OS");

    return (
      <div>
        <div className="loader">
          <div className="loader--dot" />
          <div className="loader--dot" />
          <div className="loader--dot" />
          <div className="loader--dot" />
          <div className="loader--dot" />
          <div className="loader--dot" />
          <div className="loader--text" />
        </div>
        <div className="main-container">
          <Header />
          <Home />
          <About />
          <Agenda />
          <Boucher />
          <Organiser coorganizes={coorganizes} />
          <BlockProducer blockproducer={blockproducer} />
          <Advisory advisorycommitee={advisorycommitee} />
          <Sponsor sponsors={sponsors} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
