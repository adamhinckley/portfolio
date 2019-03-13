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
import Logo from "../assets/images/logo2.png"

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
                    <p className="project-tagline">PWA Mobile underwriting tool</p>
                    <div className="project-links">
                        <a href="https://risk-assesment.netlify.com/">Visit Site</a>
                        <a href="https://github.com/adamhinckley/Insurance-Risk-Assesment">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Portfolio
