import React from "react";
import Bio from "../../components/Bio";
import Navbar from "../../components/Navbar";
import "./style.css";

const style = {
  spanStyle: {
    color: "#4537c2",
    fontSize: "20px"
  }
}

function Home() {
  return (
    <div id="homeRoot">
    <div className="background">

      <Navbar />
      <main id="indexmain">
        <Bio >

          <section id="intro">

            <img id="bio-image" src="/assets/MargaretSeiche.JPG" alt="Margaret Seiche" />
          </section>

          <section id="main-bio">
            <h2 id="index-bio-intro">Hi, I'm Margaret,<br /> a Full-Stack Developer</h2>
            <p>with experience in website management,<br /> marketing, finance, and event management. <br /></p>
          </section>
        </Bio>
      </main>
    </div>
    </div>
  );
}

export default Home;
