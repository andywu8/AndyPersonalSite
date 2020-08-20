import React from "react";
import myImage from "../img/myImage.png";
import styled from 'styled-components';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "ReactNative_skill",
          content: "ReactNative",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "80%",
          value: "80"
        },
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "Express",
          content: "Express",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "Node_JS",
          content: "NodeJS",
          porcentage: "60%",
          value: "60"
        },
        {
          id: "Mongo",
          content: "Mongo",
          porcentage: "60%",
          value: "60"
        },
        {
          id: "Swift",
          content: "Swift",
          porcentage: "25%",
          value: "25"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          // heading: "Relevant Coursework:",
          content:
            "I'm a sophomore at Yale double majoring in Computer Science/Economics and Statistics."
        },
        {
          id: "second-p-about",
          heading: "Interests",
          content:
            "Reading, running, watching Youtube, and watching films. Some of my favorite films are Dark Knight, Casa Blanca, and Jurassic Park"
        },
        {
          id: "third-p-about",
          heading: "Extracurriculars",
          content:
            "Vice President of Yale Computer Society, Logistics Chair of Yhack, Treasurer of Dwight Hall Socially Responsible Investment Fund, TSAI City Student Advisory Board, Stars I"
        },
        {
          id: "fourth p-about",
          heading: "Volunteer Work",
          content:
            "Event Producer Intern for Human Growth Foundation, Key Club President, Read Write Discover Branch Coordinator"
        },
        {
          id: "fifth p-about",
          heading: "Awards",
          content:
            "LEDA Career Fellow (McKinsey Case Competition Winner), Nation Merit Scholar, National AP Scholar, AP Scholar with Distinction, George Lorbeer Scholar, Lee Embry Scholar"
        },
        {
          id: "sixth p-about",
          heading: "Languages",
          content:
            "English(Fluent), Cantonese(Proficient), Italian(Novice)"
        },
        {
          id: "seventh p-about",
          heading: "Relevant Coursework",
          content:
            "Data Structures and Programming Techniques, Mathematical Tools for COmputer Science, Linear Algebra with Applications, Computational Intelligence for Games, Computational Vision and Biological Perception"
        }
      ],
      work_experience: [
        {
          role:"Software Engineer Intern",
          company: "Avenue",
          linktocompany: "https://www.linkedin.com/company/avenu1/",
          date: "August-Present",
          id: "first-p-about",
          content:
            "Currently working at a startup and developing an event planning app in React Native and Firestore."
        },
        {
          role:"Full Stack Developer",
          company: "PPE4NYC",
          linktocompany: "https://ppe4nyc.org/",
          date: "August-Present",
          id: "second-p-about",
          content:
            "Currently working at a nonprofit and developing the website which has enabled PPE4NYC to deliver 10,000 PPE to people in need. Currently working on a content management system in Javascript. Also developing in ReactJS/Gatsby."
        },
        {
          role:"Machine Learning Intern",
          company: "Yale Intelligent Computing Lab",
          linktocompany: "https://intelligentcomputinglab.yale.edu/",
          date: "May-August",
          id: "third-p-about",
          content:
            "Trained and evaluated performance of spiking and artificial neural networks. Coded in Pytorch on Google Colab. Research found that spiking neural networks, a novel neural network that ran on a spiking time dependent framework had more adversarial robustness and energy efficiency than the artificial neural network"
        },
        {
          role:"Open Climate Collabathon Coordinator",
          company: "Yale OpenLab",
          linktocompany: "https://www.collabathon.openclimate.earth/",
          date: "February-Present",
          id: "fourth p-about",
          content:
            "Planned, marketed, and handled logistics of a global open source initiative to tackle climate change through blockchain solutions. Led the node iniative and onboarded 14 nodes. Created 2 slide decks and improved node registration system making it easier to onboard."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
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
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <div>
                            <h6>{content.heading}</h6>
                            <p key={content.id}>
                              {content.content}
                            </p>
                            <hr></hr>
                          </div>
                        );
                      })}

                    </div>
                  </div>
                  
                </div>
                    <br></br>
                    <br></br>
                    <div className="title-box-2">
                        <center>
                        <h5 className="title-left">Work Experience</h5>
                        </center>
                      </div>

                      {this.state.work_experience.map(content => {
                        return (
                          <div className="w-more">
                            <h5>{content.role}</h5>
                            <h6 >
                              <a href={content.linktocompany}>
                                <HoverText>
                                  {content.company}
                                </HoverText>  
                              </a>
                            </h6>
                            <h6>{content.date}</h6>
                            <p className="lead" key={content.id}>
                              {content.content}
                            </p>
                            <hr></hr>
                          </div>
                        );
                      })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


const HoverText = styled.p`
	color: #000;
	:hover {
		color: #0078ff;
		cursor: pointer;
	}
`

export default About;
