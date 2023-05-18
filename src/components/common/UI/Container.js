import React from "react";

const Container = (props) => {
  return (
    <div style={props.style} className={props.className}>
      {props.children}
    </div>
  );
};

export default Container;
