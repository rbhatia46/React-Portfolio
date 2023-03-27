import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>
              Check Out Some of My projects I have created or collaborated on.
            </h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    
                    <div className="columns portfolio-item">
                      <li><a className="portfolio" href={item.url} target="_blank">{item.name}</a></li>
                      <div className="item-wrap btn">
                      <a href={item.url}>
                          <img
                            src={`${item.imgurl}`}
                            className="item-img"
                          />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
