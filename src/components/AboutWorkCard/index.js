import React from "react";
import "./style.css";

// const style = {
//   float: left
// }

function AboutWorkCard(props) {
  return (
    // <div className="col-md-4 aboutTitle">
    <div className="col-md-4">
      <div className="row">
        <h4 >{props.title}</h4>
      </div>
      <div className="row">
        <ul>
          <li id="list">{props.line1}</li>
          <li id="list">{props.line2}</li>
          <li id="list">{props.line3}</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutWorkCard;
