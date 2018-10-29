import React, { Component } from "react";
import axios from "axios";

import AdminHeader from "./AdminHeader";
import SelectListGroup from "../common/SelectListGroup";
import TextFieldGroup from "../common/TextFieldGroup";

export default class CreateAgenda extends Component {
  constructor() {
    super();
    this.state = {
      session: "",
      day: "30",
      month: "November",
      fileupload: "",
      title: "",
      speaker: "",
      time: "",
      link: "",
      agendaList: [],
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async componentDidMount() {
    this.loadAgendas();
  }
  // Load posts
  loadAgendas = async () => {
    const response = await axios.get("http://localhost:5000/api/agenda");
    this.setState({ agendaList: response.data });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onFileChange(e) {
    this.setState({
      fileupload: e.target.files[0]
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const fd = new FormData();

    if (this.state.fileupload === null) {
      this.setState({ errors: { fileUpload: "File Field can not be Empty." } });
    } else {
      fd.append(
        "fileUpload",
        this.state.fileupload,
        this.state.fileupload.name
      );

      const formAgenda = {
        session: this.state.session,
        day: this.state.day,
        month: this.state.month,
        fd,
        title: this.state.title,
        speaker: this.state.speaker,
        time: this.state.time,
        link: this.state.link
      };

      console.log(formAgenda);

      axios
        .post("http://localhost:5000/api/agenda", formAgenda)
        .then(res => console.log);
    }
  }

  render() {
    const { session, errors } = this.state;

    const sessionList = this.state.agendaList.map(event => (
      <tr key={event._id}>
        <th scope="row">{event.day}</th>
        <td>{event.month}</td>
        <td>
          <img src={event.speakerImage} alt="" />
        </td>
        <td>{event.title}</td>
        <td>{event.speaker}</td>
        <td>{event.time}</td>
        <td>{event.link} </td>
      </tr>
    ));

    const options = [
      { label: "Session: *", value: 0 },
      { label: "One", value: "one" },
      { label: "Two", value: "two" },
      { label: "Three", value: "three" }
    ];

    return (
      <React.Fragment>
        <AdminHeader />
        <div className="container mb-4">
          {JSON.stringify(errors, null, 2)}
          <div className="row">
            <div className="col-md-12">
              <form>
                <div class="row mb-4 mt-4">
                  <div class="col">
                    <SelectListGroup
                      name="session"
                      value={session}
                      onChange={this.onChange}
                      options={options}
                      error={errors.session}
                      info="Select a session number"
                    />
                  </div>
                  <div class="col">
                    <TextFieldGroup
                      placeholder="Session Day"
                      type="number"
                      name="day"
                      value={this.state.day}
                      onChange={this.onChange}
                      error={errors.day}
                    />
                  </div>

                  <div class="col">
                    <TextFieldGroup
                      placeholder="Session month"
                      type="text"
                      name="month"
                      value={this.state.month}
                      onChange={this.onChange}
                      error={errors.month}
                    />
                  </div>
                </div>

                <div class="row mb-4">
                  <div class="col">
                    <TextFieldGroup
                      placeholder="Session title"
                      type="text"
                      name="title"
                      value={this.state.title}
                      onChange={this.onChange}
                      error={errors.title}
                    />
                  </div>
                  <div class="col">
                    <TextFieldGroup
                      placeholder="Session speaker"
                      type="text"
                      name="speaker"
                      value={this.state.speaker}
                      onChange={this.onChange}
                      error={errors.speaker}
                    />
                  </div>
                  <div class="col">
                    <TextFieldGroup
                      placeholder="Session Duration"
                      type="number"
                      name="time"
                      value={this.state.time}
                      onChange={this.onChange}
                      error={errors.time}
                    />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <input
                      className="inputfile"
                      id="file"
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      onChange={this.onFileChange}
                    />
                  </div>
                  <div className="col">
                    <TextFieldGroup
                      placeholder="Session link"
                      type="text"
                      name="link"
                      value={this.state.link}
                      onChange={this.onChange}
                      error={errors.link}
                    />
                  </div>
                </div>
                <div className="form-group text-center row m-t-20">
                  <div className="col-12">
                    <button
                      className="btn btn-info btn-block waves-effect waves-light"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Day</th>
                    <th scope="col">Month</th>
                    <th scope="col">Image</th>
                    <th scope="col">title</th>
                    <th scope="col">speaker</th>
                    <th scope="col">time</th>
                    <th scope="col">Link</th>
                  </tr>
                </thead>
                <tbody>{sessionList}</tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
