import React from "react";

export default function Footer() {
  return (
    <div className="footer-area bg-footer parallax ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="am">
              <div className="f-logo">
                <img
                  src="assets/img/epwhite.png"
                  alt=""
                  style={{ height: "198px" }}
                />
              </div>
              <div className="border-right" />
            </div>
          </div>
          {/* <!-- /col end--> */}
          <div className="col-lg-6 offset-1">
            <div className="f-content">
              <p>
                Months after its official Mainnet launch, EOS continued to
                receive support from its growing community. Everyone is waiting
                to see the progress of this much-hyped blockchain network.
                <br />
                The EOS summit will showcase the very best of DAPPS and projects
                in the EOS ecosystem.
                <br />
                Everyone is waiting to see the next big DAPP
              </p>
              <div className="sub-btn">
                <input type="text" placeholder="Your email address " />
                <button type="submit">Subscribe</button>
              </div>
              <div className="f-social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-camera" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-pinterest" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- /col end--> */}
        </div>
        {/* <!-- /row end--> */}
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright">
              <p>©2018. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /container end--> */}
    </div>
  );
}
