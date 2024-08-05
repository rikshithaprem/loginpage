import React, { useState, useRef, useEffect } from "react";
import Reset from "./Reset";
import zxcvbn from "zxcvbn";
import PasswordStrengthIndicator from "./PasswordStrengthIndicator";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const imgs = [
    "https://img.freepik.com/free-vector/emotion-detection-abstract-concept-vector-illustration-speech-emotional-state-recognition-emotion-detection-from-text-sensor-technology-machine-learning-ai-reading-face-abstract-metaphor_335657-2305.jpg?w=826&t=st=1702363912~exp=1702364512~hmac=f089ca027b135393942b6d60e37f8af12c29082e5798db135c5ad8e1a7a84e2b",
  ];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "hello@123" && password === "hello") {
      window.open("/Dashboard", "_self");
    } else if (email === "admin@123" && password === "admin") {
      navigate("/dashboard");
    } else if (email === "" || password === "") {
      console.log("Null Value");
    } else {
      window.alert("Invalid Email or Password");
    }
  };

  const [isPopupOpen, setPopupOpen] = useState(false);
  const popupRef = useRef();
  const openPopup = () => {
    setPopupOpen(true);
  };
  const closePopup = () => {
    setPopupOpen(false);
  };
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        closePopup();
      }
    };
    if (isPopupOpen) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isPopupOpen]);
  const passwordScore = zxcvbn(password).score;
  const Result = zxcvbn(password);
  const handleInputFocus = () => {
    setIsFocused(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="base-container">
      <div className="header">LOGIN</div>
      <div className="content">
        <div className="image">
          <img alt="img" src={imgs[0]} />
        </div>
        <form
          className="form"
          onSubmit={handleSubmit}
          autoComplete="off"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              onFocus={handleInputFocus}
              required
            />
            {isFocused && (
              <PasswordStrengthIndicator
                score={passwordScore}
                feedback={Result.feedback}
              />
            )}
          </div>
          <button className="btn" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
      <div className="footer">
        <div className="fyp">
          <button className="fyp-btn" onClick={openPopup}>
            Forgot Password?
          </button>
          {isPopupOpen && <Reset onClose={closePopup} ref={popupRef} />}
        </div>
      </div>
    </div>
  );
};

export default Login;
