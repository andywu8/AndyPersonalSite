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
          porcentage: "100%",
          value: "100"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "100%",
          value: "100"
        },
        {
          id: "ReactNative_skill",
          content: "ReactNative",
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
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          // heading: "Relevant Coursework:",
          content:
            "I'm a new graduate from Yale where I double majored in Computer Science/Economics and Statistics/Data Science."
        },
        {
          id: "second-p-about",
          heading: "Programming Languages",
          content:
            "Programming: React (JS, Native), Javascript (Node, Express), Mongo, Python (Pytorch, Flask), AWS, R, HTML, CSS, C, Java"
        },
        {
          id: "second-p-about",
          heading: "Interests",
          content:
            "Reading fantasy books, running, playing basketball, watching Youtube, and watching films. Some of my favorite films are La La Land, Dark Knight, and Jurassic Park"
        },
        {
          id: "third-p-about",
          heading: "Extracurriculars",
          content:
            "President of Yale Computer Society, Director of Yhack, Treasurer of Dwight Hall Socially Responsible Investment Fund, TSAI City Student Advisory Board, Stars I"
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
            "English(Fluent), Cantonese(Proficient), Mandarin(Proficient), Italian(Elementary)"
        },
        {
          id: "seventh p-about",
          heading: "Relevant Coursework",
          content:
            "Intro to Systems Programming, Data Structures and Programming Techniques, Mathematical Tools for COmputer Science, Linear Algebra with Applications, Computational Intelligence for Games, Computational Vision and Biological Perception"
        }
      ],
      work_experience: [
        {
          role:"Software Engineer Intern",
          company: "Meta",
          linktocompany: "https://www.google.com/search?q=meta&oq=meta+&aqs=chrome..69i57j69i60j69i65l3j69i60.2665j0j4&sourceid=chrome&ie=UTF-8",
          date: "May 2022 - August 2022",
          id: "second-p-about",
          content:
            "Through the use of DPer3, Pytorch, Presto, SQL, and Bento notebooks, optimized the configuration for the Instagram multi-ads multi-task multi-label relevance model, which improved ad relevance classification by 25%. Implemented Dataswarm pipelines in SQL to deliver key labels (click, rater, taxon, priority queue, related) to the relevance model, allowing for experimental label iteration and task iteration that allowed for identification of key labels to include in the model"
        },
        {
          role:"Full Stack Developer",
          company: "PPE4NYC",
          linktocompany: "https://www.ppe4all.net/",
          date: "August 2020 - February 2022",
          id: "second-p-about",
          content:
            "Currently working at a nonprofit and developing the website which has enabled PPE4NYC to deliver 10,000 PPE to people in need. Currently working on a content management system in Javascript. Also developing in ReactJS/Gatsby."
        },
        {
          role:"Software Engineer Intern",
          company: "State Farm",
          linktocompany: "https://jobs.statefarm.com/main/career-areas/technology-and-user-experience-careers",
          date: "May 2021 - August 2021",
          id: "second-p-about",
          content:
            "Created an API for the cloud onboarding team, which expedited the onboarding process through generated a report which allowed for easy tracking of users and their onboarding status. "
        },
        {
          role:"Machine Learning Intern",
          company: "Yale Intelligent Computing Lab",
          linktocompany: "https://intelligentcomputinglab.yale.edu/",
          date: "May 2020 - July 2020",
          id: "third-p-about",
          content:
            "Trained and evaluated performance of spiking and artificial neural networks. Coded in Pytorch on Google Colab. Research found that spiking neural networks, a novel neural network that ran on a spiking time dependent framework had more adversarial robustness and energy efficiency than the artificial neural network"
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
                      {/* {this.state.skills.map(skill => {
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
                      })} */}
                    </div>
                  </div>
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
	color: #0078ff;
	:hover {
		color: #000;
		cursor: pointer;
	}
`

export default About;
