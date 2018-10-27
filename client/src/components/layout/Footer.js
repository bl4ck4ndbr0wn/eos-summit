import React from "react";

export default function Footer() {
  return (
    <div class="footer-area bg-footer parallax ptb">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="am">
              <div class="f-logo">
                <img
                  src="assets/img/epwhite.png"
                  alt=""
                  style={{ height: "198px" }}
                />
              </div>
              <div class="border-right" />
            </div>
          </div>
          {/* <!-- /col end--> */}
          <div class="col-lg-6 offset-1">
            <div class="f-content">
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
              <div class="sub-btn">
                <input type="text" placeholder="Your email address " />
                <button type="submit">Subscribe</button>
              </div>
              <div class="f-social">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-camera" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-pinterest" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- /col end--> */}
        </div>
        {/* <!-- /row end--> */}
        <div class="row">
          <div class="col-lg-12">
            <div class="copyright">
              <p>©2018. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /container end--> */}
    </div>
  );
}
