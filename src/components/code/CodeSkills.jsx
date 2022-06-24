import React from "react";
import {
  SiApplemusic,
  SiJavascript,
  SiRubyonrails,
  SiPostgresql,
  SiMysql,
  SiReact,
  SiRedux,
  SiRuby,
  SiMaterialui,
} from "react-icons/si";

const codewarsURL = "https://www.codewars.com/users/elijahsamuels/badges/large";

function CodeSkills() {
  return (
    <div >
      <div>
        <span>Skill Sets</span>
        <br />
        <div justify="center">
          <SiRuby fill={"rgb(255, 20, 90)"} className={"svg"} />
          <SiRubyonrails className={"svg"} />
          <SiApplemusic className={"svg"} />
        </div>
        <div justify="center">
          <SiJavascript className={"svg"} />
          <SiReact fill={"rgb(80, 80, 200)"} className={"svg"} />
          <SiRedux className={"svg"} />
        </div>
        <div justify="center">
          <SiMaterialui className={"svg"} />
          <SiMysql className={"svg"} />
          <SiPostgresql className={"svg"} />
        </div>
        <div>
          <img src={codewarsURL} alt="codewars_image" />
        </div>
      </div>
    </div>
  );
}

export default CodeSkills;
