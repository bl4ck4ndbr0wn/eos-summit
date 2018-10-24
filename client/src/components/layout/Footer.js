import React from "react";

export default function Footer() {
  return (
    <footer class="footer-top">
      <div class="container">
        <div class="row ml-auto">
          <div class="col-lg-6 col-md-12 col-sm-12 col-12 footer-widget">
            <div class="text-widget">
              <p>
                <span>EOS</span>
                Summit ipsum dolor sit amet, consectetuer adipiscing elitsd
                nonummy nibh euismod tincidunt ut laoreet dolore magn aliquam
                erat volutpat.Lorem ipsum dolor sit amet, conse adipiscing
                elit,sed diam nonummy. .Lorem ipsum dolor sit ametur
                consectetuer adipiscing elit.
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
                  <a href="#">About</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Speakers</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Sponsors</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Partners</a>
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
