import React from "react";
import Timeline from "./Timeline.jsx";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <h4>About</h4>
      <p>
        As a recent graduate of the Flatiron School who studied software
        engineering with a focus on Ruby on Rails and Javascript, I love working
        through puzzles and solving problems. I love the beauty in simplisticity
        and efficiency. I've found life is enjoyable if you can have fun with
        and laugh at the bugs.
      </p>
      <div>
        <Timeline />
      </div>
    </div>
  );
};

export default About;
