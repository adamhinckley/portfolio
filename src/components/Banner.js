import React from "react"
import SocialLinks from "./SocialLinks"

const Banner = () => (
    <div className="row banner">
        <div className="banner-text">
            <h1 className="responsive-headline">Adam Hinckley</h1>
            <h3>I'm creating web experiences for the next generation of consumer-facing companies</h3>
            <hr />
            <SocialLinks />
            <hr />
            <h3>Let's learn more about me</h3>
        </div>
    </div>
)

export default Banner
