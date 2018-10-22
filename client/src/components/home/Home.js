import React from "react";

export default function Home() {
  return (
    <div
      class="section fp-auto-height-responsive animated-row"
      // data-section="slide01"
    >
      <div class="section-inner">
        <div class="welcome-box">
          <h1 class="welcome-title animate" data-animate="fadeInUp">
            <span>Welcome to</span> EOS Summit
          </h1>
          <p class="animate" data-animate="fadeInUp">
            Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor
            incididunt ut dolore magna aliqua.
          </p>
          <span class="btn next-section animate" data-animate="fadeInUp">
            Get A ticket
          </span>
        </div>
        {/* <!--/.welcome-box--> */}
      </div>
      {/* <!--/.section-inner--> */}
    </div>
  );
}
