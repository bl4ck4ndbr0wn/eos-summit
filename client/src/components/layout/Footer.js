import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <div class="container-fluid">
        <div class="footer-row">
          <ul class="social-icons">
            <li>
              <a href="index.html#" title="Facebook">
                <i class="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="index.html#" title="Twitter">
                <i class="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="index.html#" title="Linkedin">
                <i class="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="index.html#" title="Instagram">
                <i class="fa fa-instagram" />
              </a>
            </li>
          </ul>
          {/* <!--/.social-icons--> */}
          <div class="subscribe-section">
            <a href="index.html#" class="btn btn-xs btn-outline btn-subscribe">
              Subscribe
            </a>
            <div class="subscribe-row">
              <div class="row align-items-center">
                <div class="col-lg-3">
                  <h5>Subscribe to our Newsletters</h5>
                  <p>
                    Get Latest News, Information, Notifications & Announcements
                  </p>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                  <div class="input-field">
                    <input
                      class="form-control form-control-dark"
                      placeholder="Name"
                      type="text"
                    />
                  </div>
                  {/* <!--/.input-field--> */}
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                  <div class="input-field">
                    <input
                      type="email"
                      class="form-control form-control-dark"
                      placeholder="Email"
                    />
                  </div>
                  {/* <!--/.input-field--> */}
                </div>
                <div class="col-lg-3 col-md-4">
                  <button class="btn btn-dark">Subscribe</button>
                </div>
              </div>
              <a href="index.html#" class="close-btn close-subscribe" />
            </div>
            {/* <!--/.subscribe-row--> */}
          </div>
          {/* <!--/.subscribe-section--> */}
          <div class="footer-right">
            &copy; 2018 EOS Summit. All Rights Reserved
          </div>
          {/* <!--/.footer-right--> */}
        </div>
        {/* <!--/.footer-row--> */}
      </div>
      {/* <!--/.container--> */}
    </footer>
  );
}
