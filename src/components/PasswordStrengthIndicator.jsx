import React from "react";
import "./resetstyle.css";

const PasswordStrengthIndicator = ({ score, feedback }) => {
  const indicatorClasses = ["weak", "fair", "good", "strong", "very-strong"];

  const customMessages = [
    "Very Weak",
    "Weak",
    "Okay",
    "Strong",
    "Very strong!Your password is secure.",
  ];
  return (
    <div className={`password-strength ${indicatorClasses[score]}`}>
      {customMessages[score]}
    </div>
  );
};

export default PasswordStrengthIndicator;
