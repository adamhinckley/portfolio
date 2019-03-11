import React from "react"
import { FaPlus, FaTag } from "react-icons/fa"

import Coffee from "../assets/images/portfolio/coffee.jpg"
import Console from "../assets/images/portfolio/console.jpg"
import Judah from "../assets/images/portfolio/judah.jpg"
import IntoTheLight from "../assets/images/portfolio/into-the-light.jpg"
import Farmerboy from "../assets/images/portfolio/farmerboy.jpg"
import Girl from "../assets/images/portfolio/girl.jpg"
import Origami from "../assets/images/portfolio/origami.jpg"
import Retrocam from "../assets/images/portfolio/retrocam.jpg"

import CoffeeModal from "../assets/images/portfolio/modals/m-coffee.jpg"
import ConsoleModal from "../assets/images/portfolio/modals/m-console.jpg"
import JudahModal from "../assets/images/portfolio/modals/m-judah.jpg"
import IntoTheLightModal from "../assets/images/portfolio/modals/m-intothelight.jpg"
import FarmerboyModal from "../assets/images/portfolio/modals/m-farmerboy.jpg"
import GirlModal from "../assets/images/portfolio/modals/m-girl.jpg"
import OrigamiModal from "../assets/images/portfolio/modals/m-origami.jpg"
import RetrocamModal from "../assets/images/portfolio/modals/m-retrocam.jpg"

const Portfolio = () => (
    <section id="portfolio">
        <div className="row">
            <div className="twelve columns collapsed">
                <h1>Check Out Some of My Works</h1>

                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                    {/* FlexLog */}

                    <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-02" title="">
                                <img alt="" src={Console} />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>FlexLog </h5>
                                        <p>Full-Stack Workout Tracker</p>
                                    </div>
                                </div>
                                <div className="link-icon">
                                    <FaPlus />
                                </div>
                            </a>
                        </div>
                    </div>
                    {/* Notes */}

                    <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-01" title="">
                                <img alt="" src={Coffee} />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>DiFulvio Notes</h5>
                                        <p>Full-Stack Notes Application </p>
                                    </div>
                                </div>
                                <div className="link-icon">
                                    <FaPlus />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Mox Draft */}

                    <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-03" title="">
                                <img alt="" src={Judah} />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>Mox</h5>
                                        <p>Mock Drafting Application</p>
                                        <p>Lambda Winter Hackathon 2019</p>
                                    </div>
                                </div>
                                <div className="link-icon">
                                    <FaPlus />
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-04" title="">
                                <img alt="" src={IntoTheLight} />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>FlexBlog</h5>
                                        <p>Weekly Blog for my workout-tracker app, FlexLog</p>
                                    </div>
                                </div>
                                <div className="link-icon">
                                    <FaPlus />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* POPUPS */}
            {/* FlexLog Popup */}

            <div id="modal-02" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src={ConsoleModal} alt="" />

                <div className="description-box">
                    <h4>FlexLog</h4>
                    <p>
                        Workout-Tracking Application where users can create and schedule custom workouts as well as
                        track their progress.
                    </p>
                    <span className="categories">
                        <FaTag />
                        Full-Stack, Team-Project, React, Hooks, Node.js
                    </span>
                </div>

                <div className="link-box">
                    <a href="https://flexlog.netlify.com/" target="_blank">
                        Visit
                    </a>
                    <a href="#portfolio" className="popup-modal-dismiss">
                        Close
                    </a>
                </div>
            </div>

            {/* Notes App Popup */}
            <div id="modal-01" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src={CoffeeModal} alt="" />

                <div className="description-box">
                    <h4>Full-Stack</h4>
                    <p>Full-Stack Notes Application using React front-end and fully-functional backend database.</p>
                    <span className="categories">
                        <FaTag /> Full-Stack, React, Front-End, Back-End
                    </span>
                </div>

                <div className="link-box">
                    <a href="https://difulvionotes.netlify.com" target="_blank">
                        visit
                    </a>
                    <a href="#portfolio" className="popup-modal-dismiss">
                        Close
                    </a>
                </div>
            </div>

            {/* Mox Popup */}
            <div id="modal-03" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src={JudahModal} alt="" />

                <div className="description-box">
                    <h4>Mox Demo</h4>
                    <p>
                        Demo of a Fantasy Football Mock Drafting Application built over two days for the Lambda School
                        Winter Hackathon
                    </p>
                    <span className="categories">
                        <FaTag />
                        React, Front-End, Hackathon, Team-Project
                    </span>
                </div>

                <div className="link-box">
                    <a href="https://youtu.be/t-AfcaYolxY" target="_blank">
                        Watch
                    </a>
                    <a href="#portfolio" className="popup-modal-dismiss">
                        Close
                    </a>
                </div>
            </div>

            {/* FlexBlog Popup */}
            <div id="modal-04" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src={IntoTheLightModal} alt="" />

                <div className="description-box">
                    <h4>FlexBlog</h4>
                    <p>
                        Weekly Blog as I built my workout-tracker app, FlexLog. From day 1 decisions like data
                        structure, through design and presentation.
                    </p>
                    <span className="categories">
                        <FaTag />
                        Blog
                    </span>
                </div>

                <div className="link-box">
                    <a href="https://billd-labs-blog.netlify.com/">Details</a>
                    <a href="#portfolio" className="popup-modal-dismiss">
                        Close
                    </a>
                </div>
            </div>
        </div>
    </section>
)

export default Portfolio
