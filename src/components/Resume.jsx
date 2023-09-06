import React from 'react';
import './Resume.css'; 

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Resume</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Darrshan Seshathrri K S</h4>
              <p>
                <em>An aspirant to work in an atmosphere that promotes and permits leveraging my knowledge in Machine learning, Data analytics, Mathematics, and Web development to create high-performance applications in an efficient and economical way.</em>
              </p>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor Of Technology, Artificial Intelligence and Data Science</h4>
              <h5>2020 - 2024</h5>
              <p><em>KGiSL Institute Of Technology, Saravanampatti</em></p>
              <p>Learned and gained knowledge in Artificial Intelligence, Machine Learning, Front-End and various technical stacks, that enables me to develop applications effectively and economically</p>
            </div>
            <div className="resume-item">
              <h4>Grade 12 - 94.8%</h4>
              <h5>2019 - 2020</h5>
              <p><em>Rank International Senior Secondary School, Sathyamangalam</em></p>
            </div>
            <div className="resume-item">
              <h4>Grade 10 - 83.2%</h4>
              <h5>2017 - 2018</h5>
              <p><em>Rank International Senior Secondary School, Sathyamangalam</em></p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Internships</h3>
            <div className="resume-item">
              <h4>Machine Learning and Data Analytics Intern</h4>
              <h5>Dec 2022 - Jan 2023</h5>
              <p><em>Edunet Foundation - IBM Skillsbuils - (Online Mode) </em></p>
              <ul>
                <li>Learnt and built small scale models for prediction and Classification</li>
                <li>Completed Courses from IBM Skillbuild platform</li>
                <li>Gained knowledge in AI ethics and current job opportunities and pre-requisites </li>
                <li>Learned about Data Analysis and Manipulation</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Front-End React JS Intern</h4>
              <h5>Aug 2021 - Nov 2021</h5>
              <p><em>Binary Cube Technologies - (Online Mode)</em></p>
              <ul>
                <li>Learned about Front-End scripting languages and stylesheets</li>
                <li>Learned about React JS basics, components, routing and life-cycle</li>
                <li>Learned to create a Front-End using components with appropriate routing</li>                
                <li>Learned about the importance of cards and state management of cards</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Certification Courses</h3>
            <div className="resume-item">
              <h5><a href="https://coursera.org/verify/professional-cert/TJNNNQUE4BXJ">Machine Learning Certification by IBM</a></h5>
            </div>
            <div className="resume-item">
              <h5><a href="https://coursera.org/verify/23W4AS8FEA3Z" style={{ textDecoration: 'none' }}>Agile Project Management - Google/Coursera</a></h5>
            </div>
            <div className="resume-item">
              <h5><a href="https://coursera.org/verify/PTSA9KEUK8LL" style={{ textDecoration: 'none' }}>Using Python to access Web data</a></h5>
            </div>
            <div className="resume-item">
              <h5><a href="https://coursera.org/verify/KF3CVW9W8956" style={{ textDecoration: 'none' }}>Introduction to Networking and Storage</a></h5>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Field Of Interests</h3>
            <div className="resume-item">
              <h5><a>Deep Learning</a></h5>
            </div>
            <div className="resume-item">
              <h5><a>Front-End</a></h5>
            </div>
            <div className="resume-item">
              <h5><a>NLP</a></h5>
            </div>
            <div className="resume-item">
              <h5><a>Orchestrations(Music Production/Composing/Re-Composing)</a></h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
