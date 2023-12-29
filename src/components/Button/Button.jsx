import React from 'react'
import './Button.css'

const Button = ({ children, onClick, style }) => {
  return (
    <div className="button-wrapper">
      <button className="button" onClick={onClick} style={style}>
        {children}
      </button>
    </div>
  );
};

export default Button