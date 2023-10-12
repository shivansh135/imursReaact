import PropTypes from "prop-types";
import React from "react";
import "./button.css";

export const ButtonSecondary = ({ className, customStyle }) => {
  return (
    <div className={`button-secondary ${className}`} style={customStyle}>
      <div className="text-wrapper">ORDER NOW</div>
    </div>
  );
};


ButtonSecondary.propTypes = {
    text: PropTypes.string,
};
