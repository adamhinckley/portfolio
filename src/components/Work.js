import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Experience</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Lambda School</h3>
          <p className="info">
            Project Manager
            <span>&bull;</span>
            <em className="date">March 2010 - Present</em>
          </p>
          <p>
            As a Project Manager, I oversee 10-15 students as they learn
            full-stack web development beginning on Front-End at HTML/CSS,
            Javascript, React, and Redux, then continuing through Back-End with
            Express and Node.js, Data Persistence, Authentication and Testing. 
            <br />
            I am tasked with:
            <br />
            • Leading Workshops on specific subjects with students, answering
            any questions on the topic.
            <br />
            • Reviewing the code of each student for accuracy.
            <br />
            • Managing attendance, participation, and progress of each student.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3> 24/7 InTouch</h3>
          <p className="info">
            Junior Operations Manager
            <span>&bull;</span>
            <em className="date">December 2016 - April 2018</em>
          </p>
          <p>
            As a Junior Ops Manager, I supervised a team of up to 21 Team
            Leaders, each with 15-20 agents on their team, for a total of over
            400 employees.
            <br />
            • Decreased Attrition by 10% and Absenteeism by 15% by implementing
            new policy on communication between team leaders and agents.
            <br />
            • Increased Quality by 20% and Productivity by 8% using active
            continuing education and monitoring techniques.
            <br />
            • Partnered with Workforce to ensure forecasting and staffing were
            appropriate across 24/7/365 coverage.
            <br />
            • Created and managed high-level Standard Operating Procedures
            <br />
            • Conducted internal interviews for multiple positions.
          </p>
        </div>
      </div>
      <div className="row item">
        <div className="twelve columns">
          <h3> Captel Service Specialists</h3>
          <p className="info">
            Supervisor/Trainer
            <span>&bull;</span>
            <em className="date">March 2012 - October 2015</em>
          </p>
          <p>
            As a Supervisor/Trainer, I Managed up to two teams of as many as 20
            employees at any given time.
            <br />
            • Conducted team meetings and workshops to further employees within
            the organization
            <br />
            • Trained employees on policies and procedures, filed policy
            violation paperwork, and processed releases when necessary.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
