import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Animated } from "react-animated-css";
import "./home.css";

export default function Home() {
  return (
    <div className="home" id="home">
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        animationInDuration={1000}
        isVisible={true}
      >
        <div className="home_part">
          <div className="container">
            <div className="home_content">
              <h1>
                Hi, I'm <span>Ayush Mudgal</span>
              </h1>
              <h3>
                I'm a <span>Full </span>stack developer &amp; I build things on{" "}
                <span>Internet</span>
              </h3>
            </div>

            <div className="home_buttons">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Contact me
              </Link>

              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Skills
              </Link>
            </div>
          </div>
        </div>
      </Animated>
    </div>
  );
}
