import React from "react";
// import "./About.css";

export default function About() {
  return (
    <div className="conference-synopsis-area pad100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 xs-mb40">
            <img className="img-fluid" src="assets/img/mockup/man.png" alt="" />
          </div>
          <div className="col-lg-6">
            <div className="inner-content">
              <div className="section-title">
                <div className="title-text pl">
                  <h2>Conference Synopsis</h2>
                </div>
              </div>
              <p>
                {" "}
                The EOS summit brings together some of the finest dApp projects
                and it will be streamed live via crowdcast, twitch, youtube and
                Bilibili (tentatively). All presentations will be processed and
                uploaded to youtube and Bilibili. We hope to invite everyone who
                just wants to know more about the EOS Blockchain and what it can
                offer.
              </p>
              <p>
                We will be selecting DAPPS based on this idea. We need DAPPS and
                projects that are easy to understand. They must also be ready or
                preparing for mass adoption.
              </p>
            </div>
          </div>
          {/* <!-- /col end--> */}
        </div>
        {/* <!-- /row end--> */}
      </div>
      {/* <!-- /container end--> */}
    </div>
  );
}
