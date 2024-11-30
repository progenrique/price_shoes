import React from "react";

const Button = (props) => {
  const { children, handleClick, type } = props;
  return (
    <button
      onClick={handleClick}
      data-type={type}
      type="button"
      className="btn btn-primary">
      {children}
    </button>
  );
};

export default Button;
