import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import "./style.css";
import Register from "./register";
import Login from "./login";
import bg from "../assets/bg2.jpg";

const Hero = () => {
  const [isLogginActive, setIsLogginActive] = useState(true);
  const containerRef = useRef(null);
  const currentRef = useRef(null);
  const rightSideRef = useRef(null);

  useEffect(() => {
    rightSideRef.current.classList.add("right");
  }, []);

  const changeState = () => {
    if (isLogginActive) {
      rightSideRef.current.classList.remove("right");
      rightSideRef.current.classList.add("left");
    } else {
      rightSideRef.current.classList.remove("left");
      rightSideRef.current.classList.add("right");
    }
    setIsLogginActive((prevState) => !prevState);
  };

  const current = isLogginActive ? "Register" : "Login";
  const currentActive = isLogginActive ? "login" : "register";

  return (
    <div className="App" id="app">
      <img src={bg} alt="img" className="bg" />
      <div className="login">
        <div className="left">
          <div className="container" ref={containerRef}>
            {isLogginActive && <Login containerRef={currentRef} />}
            {!isLogginActive && <Register containerRef={currentRef} />}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={rightSideRef}
            onClick={changeState}
          />
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <p className="text">{props.current}</p>
      </div>
    </div>
  );
};

export default Hero;
