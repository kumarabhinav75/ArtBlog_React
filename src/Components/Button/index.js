import React from 'react';
import './style.css';

const Button = (props) => {
  return (
    <button type="button" className="create-button" onClick={props.onClick}>Create Post</button>
  );
}

export default Button;