import React from "react";
import { Outlet, Link } from "react-router-dom";
// import Projects from "./code/Projects";
// import CodeSkills from "./code/CodeSkills";
// import SoftSkills from "./code/SoftSkills";

const Code = () => {
  // let id = useId();
  return (
    <div>
        <Link to="projects" className="link">
          Projects
        </Link>
        <Link to="skills" className="link">
          Skills
        </Link>
      <Outlet />
    </div>
  );
};

export default Code;
