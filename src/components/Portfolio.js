import React from "react"

const Portfolio = () => (
    <section id="portfolio">
        <div className="row">
            <div className="project-title">
                <h1>Check Out Some of My Projects</h1>
            </div>
            <div className="projects-container">
                <div className="project">
                    <h1>Cadence</h1>
                    <p className="project-tagline">SaaS Employee Scheduling</p>
                    <div className="project-links">
                        <a href="https://getcadence.co/">Visit Site</a>
                        <a href="https://github.com/Lambda-School-Labs/labs9-employee-scheduler">GitHub</a>
                    </div>
                </div>
                <div className="project">
                    <h1>Risk Assessment</h1>
                    <p className="project-tagline">Mobile Insurance Underwriting Tool</p>
                    <div className="project-links">
                        <a href="https://risk-assessment.netlify.com/">Visit Site</a>
                        <a href="https://github.com/adamhinckley/Insurance-Risk-Assesment">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Portfolio
