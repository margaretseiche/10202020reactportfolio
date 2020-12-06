import React from "react";
import "react-bootstrap";

function PortfolioOther() {
  return (
    <div id="other">
      <h2>Other Projects</h2>

      <div className="card">
        <div className="img-container">
          <img src="../../../assets/FBCwebsite.JPG" className="portfolioImage"
            alt="redesigned website" />
        </div>
        <div className="content">
          <h5 className="card-title">Website Re-design</h5>
          <p className="card-text">I re-designed a trilingual website, taking it from text-heavy to personable.</p>

          <a href="../../../assets/Churchwebsite_originalversion.pdf" className="portfolioButton"
            target="_blank" rel="noopener noreferrer">Before</a>
          <a href="https://www.fbcflushing.org/" className="portfolioButton"
            target="_blank" rel="noopener noreferrer">After</a>
        </div>
      </div>


      <div className="card">
        <div className="img-container">
          <video className="portfolioImage" src="../../../assets/acamis.mp4" controls muted >Video of a
        conference</video>
        </div>

        <div className="content">
          <h5 className="card-title">Event Management</h5>
          <p className="card-text">During leadership transition and project expansion, I led 9 teams remotely.
           (Video by: In-kind sponsor Eduku)</p>
        </div>
      </div>

      <div className="card">

        <img src="../../../assets/FriendsPage1.JPG" className="d-block w-100"
          alt="Friends of Dulwich Beijing" />

        <div className="card-body">

          <h5 className="card-title">Non-Profit Operations</h5>
          <p className="card-text">With a team, grew retail and event surpluses 64% annually for 10 years.</p>
          <a href="../../../assets/Friends2006to2016.pdf" id="friends" 
            target="_blank" rel="noopener noreferrer">Read a summary</a>
        </div>

      </div>


      <div className="card">
        <div className="img-container">

          <img src="../../../assets/Animation.JPG" className="portfolioImage"
            alt="animated story of Noah" />
        </div>

        <div className="content">
          <h5 className="card-title">Animation</h5>
          <p className="card-text">Telling a story to children over Zoom is so much more fun with animation.</p>
          <a href="https://scratch.mit.edu/projects/393666371" className="animationBtn"
            target="_blank" rel="noopener noreferrer">Part 1</a>
          <a href="https://scratch.mit.edu/projects/394058364/" className="animationBtn"
            target="_blank" rel="noopener noreferrer">Part 2</a>
          <a href="https://scratch.mit.edu/projects/394083008" className="animationBtn"
            target="_blank" rel="noopener noreferrer">Part 3</a>
        </div>

      </div>

      <div className="card">
        <div className="img-container">
          <img src="../../../assets/calendar.JPG" className="portfolioImage" alt="calendar design" />
        </div>

        <div className="content">
          <h5 className="card-title">Calendar Design</h5>
          <p className="card-text">Published a calendar for fundraising, working closely with the printing vendor and sales team.</p>
        </div>

      </div>


    </div>


  );
}

export default PortfolioOther;