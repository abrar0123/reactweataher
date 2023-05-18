import React from "react";

const Card = (props) => {
  return (
    <div style={props.style} className={props.className}>
      {props.children}
    </div>
  );
};

export default Card;
