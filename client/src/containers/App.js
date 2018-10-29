import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CreateAgenda from "../components/admin/Agenda";
import LandingPage from "../components/landingPage/LandingPage";
import CreateCompany from "../components/admin/Company";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/eosAdmin/agenda" component={CreateAgenda} />
          <Route exact path="/eosAdmin/company" component={CreateCompany} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
