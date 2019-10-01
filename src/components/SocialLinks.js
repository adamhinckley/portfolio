import React from "react"
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
    <ul className="social">
        <li>
            <a href="https://github.com/adamhinckley" target="_blank">
                <FaGithub />
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/adamhinckley/" target="_blank">
                <FaLinkedin />
            </a>
        </li>
        <li>
            <a href="https://twitter.com/zeroadameleven" target="_blank">
                <FaTwitter />
            </a>
        </li>
    </ul>
)

export default SocialLinks
