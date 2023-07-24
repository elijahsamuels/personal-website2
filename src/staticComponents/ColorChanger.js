import React from "react";
import "./ColorChanger.css";

const ColorChanger = (string) => {
  let stringedArray = string?.split("");
  let randomLetterIndex = Math.floor(Math.random() * stringedArray.length);

  let str1 = string.slice(0, randomLetterIndex);
  let myWhiteString1 = <span style={{ color: "white" }}> {str1} </span>;

  let myColorfulLetter = (
    <span className={"fadeletter"} key="1">
      {stringedArray[randomLetterIndex]}
    </span>
  );

  let str3 = string.slice(randomLetterIndex + 1);
  let myWhiteString3 = <span style={{ color: "white" }}> {str3} </span>;

  let myCoolString = [
    myWhiteString1.props.children[1],
    myColorfulLetter,
    myWhiteString3.props.children[1],
  ];

  return <div>{myCoolString}</div>;
};

export default ColorChanger;
