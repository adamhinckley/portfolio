import React from "react"

const Education = () => (
    <div className="row education">
        <div className="three columns header-col">
            <h1>
                <span>Education</span>
            </h1>
        </div>

        <div className="nine columns main-col">
            <div className="row item">
                <div className="twelve columns">
                    <h3>Lambda School</h3>
                    <p className="info">
                        Full-Stack Web Development/Computer Science Fundamentals
                        <span>&bull;</span>
                        <em className="date">April 2019</em>
                    </p>

                    <p>
                        <a href="https://lambdaschool.com/">Lambda School</a> is a Computer Science & Software
                        Engineering Academy that provides an immersive hands-on{" "}
                        <a href="https://learn.lambdaschool.com/course/cs-fsw">curriculum</a> with a focus on computer
                        science, software engineering and web development.
                    </p>
                    <ul>
                        <li>• Comprehensive implementation of modern JavaScript environments and tooling. (ES6+)</li>
                        <li>• Detailed study and implementation of data structures and algorithms.</li>
                        <li>• Implemented responsive web pages with semantic HTML & CSS</li>
                        <li>• Developed Single Page Applications (SPAs) with ES6+, React, Redux, & React Router.</li>
                        <li>• Built various backend REST APIs backed by relational databases (SQLite3, PostgreSQL).</li>
                        <li>
                            • Implemented authentication workflows using stateless JWTs, cookie-based systems, and
                            third-party OAuth providers.
                        </li>
                        <li>
                            • Tested frontend and backend JavaScript applications with tooling such as Jest, Supertest,
                            Enzyme, & React-Testing-Library
                        </li>
                        <li>• Deployed web applications and microservices using Heroku & Netlify</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)

export default Education
