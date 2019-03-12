import React from "react"
import { FaCloudDownloadAlt } from "react-icons/fa"

import profilePic from "../assets/images/adam-head-shot.jpg"

const About = () => (
    <section id="about">
        <div className="row">
            <div className="three columns">
                <img className="profile-pic" src={profilePic} alt="" />
            </div>
            <div className="nine columns main-col">
                <h2>Hey There!</h2>
                <p>
                    I'm a former life insurance agency owner that found a love for web development after creating web
                    based underwriting solutions for the agents I worked with.
                </p>
                <div className="row">
                    <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                            <span>Adam Hinckley</span>
                            <br />
                            <span>Boise, ID</span>
                            <br />
                            <span>ahinckley2@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default About
