import React from "react";
import { Animated } from "react-animated-css";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        animationInDuration={1000}
        isVisible={true}
      >
        <div className="contact_title">
          <h1>Contact me</h1>
        </div>
      </Animated>

      <div className=" container contact_content">
        <div className="row">
          <div className="col-10 mx-auto ">
            <div className="container section">
              <div className="contact_text">
                <h1>Want to connect or work together?</h1>
                <h2>Feel free to reach me, just ping me at</h2>
              </div>
              <div className="contact_email">
                <a href="mailto:@ayushmudgal11@gmail.com">
                  <h3>
                    {" "}
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    {"   "}
                    <span>ayushmudgal11@gmail.com</span>{" "}
                  </h3>
                </a>
              </div>
              <div className="social_media">
                <a href="https://github.com/Ayush1998">
                  <i class="fa fa-github fa-2x" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/in/ayush-mudgal-ba71a9150/">
                  <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/ayushmudgal786">
                  <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
                </a>
                <a href="https://www.instagram.com/mudgal011/">
                  <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
