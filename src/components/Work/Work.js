import React, { useState, useEffect } from "react";
import "./work.css";
import { Animated } from "react-animated-css";

export default function Work() {
  const [visible, setVisible] = useState(false);
  const [card1, setCard1] = useState(false);
  const [card2, setCard2] = useState(false);
  const [card3, setCard3] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let last_known_scroll_position = window.scrollY;
      console.log(last_known_scroll_position);
      if (last_known_scroll_position >= 200) {
        setVisible(true);
      }
      if (last_known_scroll_position >= 300) {
        setCard1(true);
      }
      if (last_known_scroll_position >= 400) {
        setCard2(true);
      }
      if (last_known_scroll_position >= 650) {
        setCard3(true);
      }
    });
  }, []);

  return (
    <div className="my_work" id="my_work">
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        animationInDuration={1000}
        isVisible={visible}
      >
        <div className="title">
          <h1>Projects</h1>
        </div>
      </Animated>

      <div className="container projects">
        <div className="row project_row">
          <div className="col-md-10 col-12 mx-auto project_col">
            <Animated
              animationIn="slideInUp"
              animationOut="fadeOut"
              animationInDuration={1000}
              isVisible={card1}
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Clone Applications</h5>
                  <p className="card-text">
                    Clone Applications of Instaagram, Netflix and Amazon
                  </p>

                  <p className="tech_used">
                    <span>Tech used </span>: React, Firebase
                  </p>
                  <div className="app_buttons">
                    <a href="https://netflix-clone-f4b64.web.app/">Netflix</a>
                    <a href="https://insta-clone-cbf2f.web.app/">Insta</a>
                    <a href="https://clone-6b6ea.web.app/">Amazon</a>
                  </div>
                </div>
              </div>
            </Animated>
          </div>

          <div className="col-md-6 project_col">
            <Animated
              animationIn="slideInUp"
              animationOut="fadeOut"
              animationInDuration={1000}
              isVisible={card2}
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">ShopDeal</h5>
                  <p className="card-text">A book Store for book lovers</p>

                  <p className="tech_used">
                    <span>Tech used </span>: mongoDB, nodeJs, ReactJs, Express
                  </p>
                  <div className="app_buttons">
                    <a href="https://github.com/Ayush1998/Shopdeal-backend/">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </Animated>
          </div>

          <div className="col-md-6 project_col">
            <Animated
              animationIn="slideInUp"
              animationOut="fadeOut"
              animationInDuration={1000}
              isVisible={card2}
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Social App</h5>
                  <p className="card-text">
                    A website where developers can connect
                  </p>

                  <p className="tech_used">
                    <span>Tech used </span>: mongoDB, nodeJs, Express
                  </p>
                  <div className="app_buttons">
                    <a href="https://github.com/Ayush1998/socialApp/">Github</a>
                  </div>
                </div>
              </div>
            </Animated>
          </div>
        </div>

        <div className="row project_row">
          <div className="col-md-6 project_col">
            <Animated
              animationIn="slideInUp"
              animationOut="fadeOut"
              animationInDuration={1000}
              isVisible={card3}
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Labper</h5>
                  <p className="card-text">A classroom type web application</p>

                  <p className="tech_used">
                    <span>Tech used </span>: Django
                  </p>
                  <div className="app_buttons">
                    <a href="https://github.com/Ayush1998/labper-1/">Github</a>
                  </div>
                </div>
              </div>
            </Animated>
          </div>

          <div className="col-md-6 project_col">
            <Animated
              animationIn="slideInUp"
              animationOut="fadeOut"
              animationInDuration={1000}
              isVisible={card3}
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Covid 19 Tracker</h5>
                  <p className="card-text">
                    Web appliction to track covid cases
                  </p>

                  <p className="tech_used">
                    <span>Tech used </span>: ReactJs, MaterialUi
                  </p>
                  <div className="app_buttons">
                    <a href="https://ayush1998.github.io/covid19/">Covid</a>
                  </div>
                </div>
              </div>
            </Animated>
          </div>
        </div>
      </div>
    </div>
  );
}
