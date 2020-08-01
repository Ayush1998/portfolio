import React, { useState, useEffect } from "react";
import { Animated } from "react-animated-css";
import "./about.css";

export default function About() {
  const [about, setAbout] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let last_known_scroll_position = window.scrollY;
      console.log(last_known_scroll_position);
      if (window.innerWidth > 768 && last_known_scroll_position >= 1640) {
        setAbout(true);
      } else if (
        window.innerWidth <= 768 &&
        last_known_scroll_position >= 2700
      ) {
        setAbout(true);
      }
    });
  }, []);
  return (
    <div className="about_me" id="about_me">
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        animationInDuration={1000}
        isVisible={about}
      >
        <div className="about_title">
          <h1>About Me</h1>
        </div>
      </Animated>

      <div className="about_content">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 column">
              <Animated
                animationIn="slideInUp"
                animationOut="fadeOut"
                animationInDuration={1000}
                isVisible={about}
              >
                <div className="container my_sec">
                  <p>
                    Hey there, I'm <span>Ayush</span>, I love to build web
                    application using MERN stack.
                  </p>
                  <p>
                    I'm also enthusiast about <span>Cyber Security</span> and
                    learning it.
                  </p>
                </div>
              </Animated>
            </div>
            <div className="col-md-6 col-12 column">
              <Animated
                animationIn="slideInUp"
                animationOut="fadeOut"
                animationInDuration={1000}
                isVisible={about}
              >
                <div className="container achievements">
                  <h3>Acievements &amp; Certificates</h3>
                  <ul className="all_achievments">
                    <li>
                      1. <span>Google Code In</span> mentor for ScoReLab
                      community, 2018
                    </li>
                    <li>
                      2. web developer intern in <span>Techno Softwares</span>,
                      2019
                    </li>
                    <li>
                      3. Front-End Web Development with <span>React</span> :
                      Coursera
                    </li>
                    <li>
                      4. Server-side Development with{" "}
                      <span>NodeJS, Express and MongoDB</span>: Coursera
                    </li>
                    <li>
                      5. Institute's dance club <span>Secretary</span>
                    </li>
                  </ul>
                </div>
              </Animated>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
