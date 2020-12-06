import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import PortfolioCard from "../../components/PortfolioCard";
import PortfolioOther from "../../components/PortfolioOther";
import frontprojects from "../../frontprojects.json";
import backprojects from "../../backprojects.json";
import "./style.css";

class Portfolio extends Component {
  state = {
    frontprojects,
    backprojects
  };

  render() {
    return (
      <div id="portfolioRoot">
        <Navbar />
        <main className="mainTop">
          <div className="container-fluid">
            <article id="parentportfolio">

              <div className="row articleHeading" >
                <div className="col-md-12">
                  <h3>Check out some of my projects</h3>
                </div>
              </div>

              <div className="row" className="portfolio">
                  <div id="front">

                    <h2 className="portfolioh2">Front-End</h2>
                    <div className="row">

                      <div className="col-sm">
                        {this.state.frontprojects.map(frontproject => (

                          <PortfolioCard

                            id={frontproject.id}
                            key={frontproject.id}
                            title={frontproject.title}
                            github={frontproject.github}
                            deployed={frontproject.deployed}
                            image={frontproject.image}
                            alt={frontproject.alt}
                            text={frontproject.text}

                          />
                        ))}

                      </div>
                    </div>
                  </div>

                  <div id="back">
                    <h2 className="portfolioh2">Back-End</h2>
                    <div className="row">

                      <div className="col-sm">
                        {this.state.backprojects.map(backproject => (

                          <PortfolioCard

                            id={backproject.id}
                            key={backproject.id}
                            title={backproject.title}
                            github={backproject.github}
                            deployed={backproject.deployed}
                            image={backproject.image}
                            alt={backproject.alt}
                            text={backproject.text}

                          />
                        ))}

                      </div>
                    </div>
                  </div>

                  <PortfolioOther />

                {/* </div> */}
              </div>
            </article>
          </div>
        </main >
      </div >
    );
  }
}

export default Portfolio;
