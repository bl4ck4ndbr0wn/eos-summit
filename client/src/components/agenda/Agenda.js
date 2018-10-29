import React, { Component } from "react";
import axios from "axios";

import "./Agenda.css";

export default class Agenda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agendaList: []
    };
  }

  // Enable Realtime updates via Socket.io
  async componentDidMount() {
    this.loadAgendas();
  }
  // Load posts
  loadAgendas = async () => {
    const response = await axios.get("/api/agenda");
    this.setState({ agendaList: response.data });
  };

  render() {
    const { agendaList } = this.state;

    const session_one = agendaList.filter(e => e.session === "one");
    const session_two = agendaList.filter(e => e.session === "two");
    const session_three = agendaList.filter(e => e.session === "three");
    const sessionOne = session_one.map(event => (
      <tr className="inner-box" key={event._id}>
        <th scope="row">
          <div className="event-date">
            <span>{event.day}</span>
            <p>{event.month}</p>
          </div>
        </th>
        <td>
          <div className="event-img">
            <img src={event.speakerImage} alt="" />
          </div>
        </td>
        <td>
          <div className="event-wrap">
            <h3>
              <a href="speakers-single.html">{event.title}</a>
            </h3>
            <div className="meta">
              {event.speaker !== "" ? (
                <div className="organizers">
                  <a href="#">{event.speaker}</a>
                </div>
              ) : (
                ""
              )}

              <div className="time">
                <span>{event.time}</span>
              </div>
            </div>
          </div>
        </td>
        <td>
          <a href={event.link} style={{ fontSize: "40px", color: "darkblue" }}>
            <i className="fa fa-play-circle" />
          </a>
        </td>
      </tr>
    ));

    const sessionTwo = session_two.map(event => (
      <tr className="inner-box" key={event._id}>
        <th scope="row">
          <div className="event-date">
            <span>{event.day}</span>
            <p>{event.month}</p>
          </div>
        </th>
        <td>
          <div className="event-img">
            <img src={event.speakerImage} alt="" />
          </div>
        </td>
        <td>
          <div className="event-wrap">
            <h3>
              <a href="speakers-single.html">{event.title}</a>
            </h3>
            <div className="meta">
              {event.speaker !== "" ? (
                <div className="organizers">
                  <a href="#">{event.speaker}</a>
                </div>
              ) : (
                ""
              )}

              <div className="time">
                <span>{event.time}</span>
              </div>
            </div>
          </div>
        </td>
        <td>
          <a href={event.link} style={{ fontSize: "40px", color: "darkblue" }}>
            <i className="fa fa-play-circle" />
          </a>
        </td>
      </tr>
    ));
    const sessionThree = session_three.map(event => (
      <tr className="inner-box" key={event._id}>
        <th scope="row">
          <div className="event-date">
            <span>{event.day}</span>
            <p>{event.month}</p>
          </div>
        </th>
        <td>
          <div className="event-img">
            <img src={event.speakerImage} alt="" />
          </div>
        </td>
        <td>
          <div className="event-wrap">
            <h3>
              <a href="speakers-single.html">{event.title}</a>
            </h3>
            <div className="meta">
              {event.speaker !== "" ? (
                <div className="organizers">
                  <a href="#">{event.speaker}</a>
                </div>
              ) : (
                ""
              )}

              <div className="time">
                <span>{event.time}</span>
              </div>
            </div>
          </div>
        </td>
        <td>
          <a href={event.link} style={{ fontSize: "40px", color: "darkblue" }}>
            <i className="fa fa-play-circle" />
          </a>
        </td>
      </tr>
    ));
    return (
      <div className="event-schedule-area-two bg-color pad100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="title-text">
                  <h2>Event Schedule</h2>
                </div>
              </div>
            </div>
            {/* <!-- /.col end--> */}
          </div>
          {/* <!-- row end--> */}
          <div className="row">
            <div className="col-lg-12">
              <ul className="nav custom-tab" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-taThursday"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Session 1
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Session 2
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="contact-tab"
                    data-toggle="tab"
                    href="#contact"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Session 3
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                >
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="text-center" scope="col">
                            Date
                          </th>
                          <th scope="col">Speakers</th>
                          <th scope="col">Session</th>
                          <th className="text-center" scope="col">
                            -
                          </th>
                        </tr>
                      </thead>
                      <tbody>{sessionOne}</tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="text-center" scope="col">
                            Date
                          </th>
                          <th scope="col">Speakers</th>
                          <th scope="col">Session</th>
                          <th className="text-center" scope="col">
                            -
                          </th>
                        </tr>
                      </thead>
                      <tbody>{sessionTwo}</tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="text-center" scope="col">
                            Date
                          </th>
                          <th scope="col">Speakers</th>
                          <th scope="col">Session</th>
                          <th className="text-center" scope="col">
                            -
                          </th>
                        </tr>
                      </thead>
                      <tbody>{sessionThree}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
