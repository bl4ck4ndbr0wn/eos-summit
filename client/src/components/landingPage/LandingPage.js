import React, { Component } from "react";
import axios from "axios";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Home from "../home/Home";
import About from "../about/About";
import Boucher from "../about/Boucher";
import Agenda from "../agenda/Agenda";
import Sponsor from "../sponsor/Sponsor";
import Organiser from "../sponsor/Organiser";
import Advisory from "../sponsor/Advisory";
import BlockProducer from "../sponsor/BlockProducer";

class LandingPage extends Component {
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
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default LandingPage;
