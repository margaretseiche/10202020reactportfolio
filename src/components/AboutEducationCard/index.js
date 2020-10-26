import React from "react";
import "./style.css";

function AboutEducationCard(props) {
  return (
    // <div className="col-md-4 aboutTitle">
    <div className="col-md-4">

      <div className="row">
        <h4 >{props.title}</h4>
      </div>
      <div className="row">
        <img className="about-image float-left" alt={props.alt} src={props.image} />
        <div className="float-left">
          <h6 className="educationH">{props.name}</h6>
          <p className="educationP">{props.line1}</p>
          <p className="educationP">{props.line2}</p>
          <p className="educationP">{props.line3}</p>
        </div>
      </div>
    </div>

  );
}

export default AboutEducationCard;
