import React from "react";
import myImage from "../img/myImage.png";
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";
import joinuspic from "../img/joinus.png";
import localscale_pic from "../img/localscale_pic.png";
import simmer_pic from "../img/simmer_pic.png";
import predictai_pic from "../img/predictai_pic.png";
import styled from 'styled-components';

class Temp_Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      portfolio: [
        {
          name: "Predict.ai",
          linktowebsite:"https://github.com/andywu8/hackday-predict.ai",
          linktogithub:"https://github.com/andywu8/hackday-predict.ai",
          description: "Built at State Farm Hackday. NodeJS, Express, HTML, CSS, Javascript",
          image: predictai_pic
        },
        {
          name: "Simmer",
          linktowebsite:"https://simmer-hackthenorth.netlify.app/",
          linktogithub:"https://github.com/andywu8/simmer",
          description: "Built at Hack the North. ReactJS, Vonage API, Spoonacular API, Firebase. I worked on the Firebase backend.",
          image: simmer_pic
        },
        {
          name: "LocalScale",
          linktowebsite:"https://localscale.netlify.app/",
          linktogithub:"https://github.com/andywu8/localscale",
          description: "Built at Hack the North. Built using Figma, HTML, CSS, Javascript, and Firebase. I worked on the firebase login system, created the routes, added in user profile customization, created payment page, linked all of the pages together",
          image: localscale_pic
        },
        {
          name: "Join Us Web Application",
          linktowebsite:"https://andywu8.github.io/JoinUs/",
          linktogithub:"https://github.com/andywu8/JoinUs",
          description: "NodeJS, Express, HTML, CSS, Javascript",
          image: joinuspic
        }
      ]
    };
  }

  render() {
    return (
    <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
    
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            <h3 className="title-a">Portfolio</h3>
                            <p className="subtitle-a">
                            These are some of the cool projects I've made! Be sure to check them out!
                            </p>
                        <div className="line-mf"></div>
                    </div>
                </div>
                <div className="row">
                      {this.state.portfolio.map(content => {
                        return (
                            <div className="col-md-4">
                            <div className="work-box">
                              {/* <a href={content.image} data-lightbox="gallery-mf"> */}
                                <div className="work-img">
                                  <img src={content.image} alt="" className="img-fluid" />
                                </div>
                                <div className="work-content">
                                  <div className="row">
                                    <div className="col-sm-8">
                                      <h2  className="w-title">
                                        <a href = {content.linktowebsite}>
                                          {content.name}
                                        </a>
                                      </h2>
                                      <div>
                                          <h6>
                                            <a href={content.linktogithub}>
                                              <HoverText>Github Repo</HoverText>
                                            </a>  
                                          </h6>                                        
                                      </div>
                                      <div className="w-more">
                                        <span className="w-ctegory">
                                          {content.description}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="col-sm-4">
                                      <div className="w-like">
                                        <span className="ion-ios-plus-outline"></span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              {/* </a> */}
                              <a
                                href={stock1}
                                data-lightbox="gallery-mf"
                                style={{ display: "none" }}
                              >
                                jsx-a11y/anchor-has-content warning
                              </a>
                              <a
                                href={stock2}
                                data-lightbox="gallery-mf"
                                style={{ display: "none" }}
                              >
                                jsx-a11y/anchor-has-content warning
                              </a>
                              <a
                                href={stock3}
                                data-lightbox="gallery-mf"
                                style={{ display: "none" }}
                              >
                                jsx-a11y/anchor-has-content warning
                              </a>
                              <a
                                href={stock4}
                                data-lightbox="gallery-mf"
                                style={{ display: "none" }}
                              >
                                jsx-a11y/anchor-has-content warning
                              </a>
                              <a
                                href={stock5}
                                data-lightbox="gallery-mf"
                                style={{ display: "none" }}
                              >
                                jsx-a11y/anchor-has-content warning
                              </a>
                            </div>
                          </div>
                        );
                      })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

      </section>
    );
  }
}

const HoverText = styled.p`
	color: #0078ff;
	:hover {
		color: #000;
		cursor: pointer;
	}
`
  
export default Temp_Portfolio;
