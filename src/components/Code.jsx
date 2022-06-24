import React, { useId } from "react";
import { Outlet, Link } from "react-router-dom";
import Projects from "./code/Projects";
import CodeSkills from "./code/CodeSkills";
import SoftSkills from "./code/SoftSkills";

function Code() {
  // let id = useId();
  return (
    <div>
      <div>
        <Link to="projects" className="link">
          Projects
        </Link>
      </div>
      <div>
        <Link to="skills" className="link">
          Skills
        </Link>
      </div>

      {/* <CodeSkills /> */}
      {/* <Projects /> */}
      {/* <SoftSkills /> */}
			<Outlet />

    </div>
  );
}

export default Code;
