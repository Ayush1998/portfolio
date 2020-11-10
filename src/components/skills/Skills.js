import React, { useState, useEffect } from "react";
import WordCloud from "react-d3-cloud";
import { Animated } from "react-animated-css";

import "./skills.css";

const data = [
  {
    text: "reactJs",
    value: 20,
  },
  {
    text: "Firebase",
    value: 12,
  },
  {
    text: "redux",
    value: 10,
  },
  {
    text: "nodeJs",
    value: 25,
  },
  {
    text: "mongoDB",
    value: 22,
  },
  {
    text: "graphQL",
    value: 8,
  },
  {
    text: "Express",
    value: 17,
  },
  {
    text: "postgreSql",
    value: 9,
  },
  {
    text: "Java",
    value: 9,
  },
  {
    text: "JS",
    value: 17,
  },
  {
    text: "Git",
    value: 10,
  },
  {
    text: "c++",
    value: 13,
  },
  {
    text: "html",
    value: 14,
  },
  {
    text: "css",
    value: 7,
  },
  {
    text: "python",
    value: 13,
  },
];

const fontSizeMapper = (word) => {
  if (window.innerWidth > 600) {
    return word.value * 5;
  } else {
    return word.value * 3;
  }
};
export default function Skills() {
  const [cloud, setCloud] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let last_known_scroll_position = window.scrollY;
      if (window.innerWidth > 800 && last_known_scroll_position >= 1300) {
        setCloud(true);
      } else if (
        window.innerWidth <= 800 &&
        last_known_scroll_position >= 1750
      ) {
        setCloud(true);
      }
    });
  }, []);

  return (
    <div className="skills" id="skills">
      <Animated
        animationIn="slideInUp"
        animationOut="fadeOut"
        animationInDuration={1000}
        isVisible={cloud}
      >
        <div className="tech_title">
          <h1>Tech Stack</h1>
        </div>
      </Animated>

      <div className="conainer cloud_container">
        <Animated
          animationIn="bounceIn"
          animationOut="fadeOut"
          animationInDuration={1000}
          isVisible={cloud}
        >
          <div className="word_cloud">
            {window.innerWidth > 600 ? (
              <WordCloud
                data={data}
                padding={0}
                fontSizeMapper={fontSizeMapper}
              />
            ) : (
              <WordCloud
                data={data}
                width={window.innerWidth}
                padding={0}
                fontSizeMapper={fontSizeMapper}
              />
            )}
          </div>
        </Animated>
      </div>
    </div>
  );
}
