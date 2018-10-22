import React from "react";
import "./About.css";

export default function About() {
  return (
    <div
      class="section fp-auto-height-responsive animated-row"
      data-section="slide02"
    >
      <div class="section-inner">
        <div class="about-section">
          <div class="row justify-content-center">
            <div class="col-lg-8 wide-col-laptop">
              <div class="row">
                <div class="col-md-6">
                  <figure class="about-img animate" data-animate="fadeInUp">
                    <img src="images/about-img.jpg" alt="" />
                    {/* <div class="centered">Centered</div> */}
                    <div class="overlay">
                      <a href="#" class="icon" title="User Profile">
                        <i class="fa fa-play-circle" />
                      </a>
                    </div>
                  </figure>
                </div>
                <div class="col-md-6">
                  <div class="about-contentbox">
                    <div class="animate" data-animate="fadeInUp">
                      <h2>About us</h2>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est.
                      </p>
                    </div>
                    <div class="facts-row animate" data-animate="fadeInUp">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="counter-box">
                            {/* <!--/.count-number--> */}
                            GET A Ticket
                          </div>
                          {/* <!--/.counter-box--> */}
                        </div>
                        {/* <!--/.col--> */}
                      </div>
                      {/* <!--/.row--> */}
                    </div>
                  </div>
                  {/* <!--/.about-contentbox--> */}
                </div>
              </div>
              {/* <!--/.row--> */}
            </div>
          </div>
          {/* <!--/.row--> */}
        </div>
        {/* <!--/.about-section--> */}
      </div>
      {/* <!--/.section-inner--> */}
    </div>
  );
}
