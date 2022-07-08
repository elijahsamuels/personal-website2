/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import ColorChanger from "./ColorChanger";
import "./Greeting.css";

function Greeting() {
  const hello = [
    "Hello",
    "Hi",
    "Hey there!",
    "¡Hola!",
    "Bonjour",
    "Salut",
    "Privet",
    "Nǐ hǎo",
    "Ciao",
    "Konnichiwa",
    "Guten Tag",
    "Olá",
    "Anyoung",
    "Ahlan",
    "Hej, Halløj",
    "Hoi, Hallo",
    "Yassou",
    "Cześć, Witaj",
    "Hai, Helo",
    "Selam",
    "Shalom",
    "Hej, Tjena",
    "God dag",
    "Kumusta",
  ];

  const greeting = hello[Math.floor(Math.random() * hello.length)];
  console.log("greeting:", greeting);

  const [ , setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="greeting">
      <div>{ColorChanger(greeting)}</div>
      <div>{ColorChanger("I'm Elijah Samuels")}</div>
    </div>
  );
}

export default Greeting;
