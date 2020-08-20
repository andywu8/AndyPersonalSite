import React from "react";
import myImage from "../img/myImage.png";
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";


class Temp_Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      portfolio: [
        {
          name: "Join Us Web Application",
          linktowebsite:"",
          linktogithub:"https://github.com/andywu8/JoinUs",
          description: "NodeJS, Express, HTML, CSS, JS",
          image: stock1   
        },
        {
          name: "To Do List",
          linktowebsite:"",
          linktogithub:"https://github.com/andywu8/ToDoList",
          description: "",
          image: stock1 
        },
        {
          name: "Blog and Vlog",
          linktowebsite:"https://andy-blog-website.herokuapp.com/",
          linktogithub:"https://github.com/andywu8/my-blog",
          description: "",
          image: stock1    
        },
        {
          name: "Mail Chimp Registration Link",
          linktowebsite:"https://newsletter-signup-andy.herokuapp.com/",
          linktogithub:"https://github.com/andywu8/MailChimp_API",
          description: "",
          image: stock1
        },
        {
          name: "Color Guessing Game",
          linktowebsite:"",
          linktogithub:"https://github.com/andywu8/Color-Guessing-Game",
          description: "",
          image: stock1
        },
        {
          name: "Music Player App",
          linktowebsite:"",
          linktogithub:"https://github.com/andywu8/MusicPlayer_IOS",
          description: "IOS",
          image: stock1
        },
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
                            <h3 className="title-a">Temp Portfolio</h3>
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
                                      <div className="w-more">
                                        <span className="w-ctegory">
                                          <u>
                                            <a href={content.linktogithub}>Github Repo</a>
                                          </u>
                                        </span> 
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

export default Temp_Portfolio;
