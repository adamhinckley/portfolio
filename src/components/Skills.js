import React from "react"
import { IconContext } from "react-icons"

import { FaHtml5, FaCss3, FaReact, FaJsSquare, FaNode, FaPython } from "react-icons/fa"

const Skills = () => (
    <div className="row skill">
        <div className="three columns header-col">
            <h1>
                <span>Skills</span>
            </h1>
        </div>

        <div className="nine columns main-col skills-icons">
            <FaHtml5 size={32} />
            <FaCss3 size={32} />
            <FaJsSquare size={32} />
            <FaReact size={32} />
            <FaNode size={32} />
            <FaPython size={32} />
        </div>
    </div>
)

export default Skills
