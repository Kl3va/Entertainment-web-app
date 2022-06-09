import React from "react";

const Button = ({ btnText }) => {
  return (
    <button type="submit" className="btn">
      {btnText}
    </button>
  );
};

export default Button;
