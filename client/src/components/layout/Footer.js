import React from "react";

export default function Footer() {
  return (
    <footer class="footer-top">
      <div class="container">
        <div class="row ml-auto">
          <div class="col-lg-6 col-md-12 col-sm-12 col-12 footer-widget">
            <div class="text-widget">
              <p>
                <span>M</span>
                Months after its official Mainnet launch, EOS continued to
                receive support from its growing community. Everyone is waiting
                to see the progress of this much-hyped blockchain network.
                <br />
                The EOS summit will showcase the very best of DAPPS and projects
                in the EOS ecosystem.
                <br />
                Everyone is waiting to see the next big DAPP
              </p>
              <div class="footer-social">
                <ul>
                  <li>
                    <a href="#">
                      <i class="icofont icofont-social-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont icofont-social-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont icofont-social-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icofont icofont-social-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- end col --> */}
          <div class="col-lg-2 col-md-6 col-sm-6 col-12 footer-widget">
            <div class="footer-menu">
              <ul>
                <li>
                  {" "}
                  <a href="#about">About</a>
                </li>
                <li>
                  {" "}
                  <a href="#speakers">Speakers</a>
                </li>
                <li>
                  {" "}
                  <a href="#dapp">Dapp Companies</a>
                </li>
                <li>
                  {" "}
                  <a href="#organizingsponsors">Partners</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- end col --> */}
          <div class="col-lg-4 col-md-6 col-sm-6 col-12 footer-widget">
            <div class="copyright text-right">
              <p>&copy; 2018 EOS Summit | All Rights Reserved</p>
            </div>
            {/* <!--- END FOOTER COPYRIGHT --> */}
          </div>
          {/* <!-- end col --> */}
        </div>
        {/* <!--- END ROW --> */}
      </div>
      {/* <!--- END CONTAINER --> */}
    </footer>
  );
}
