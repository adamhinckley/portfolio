import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import { Parallax } from "react-spring/renderprops-addons.cjs"

// Components
import Layout from "../components/Layout"
import ProjectCard from "../components/ProjectCard"

// Elements
import Inner from "../elements/Inner"
import { Title, BigTitle, Subtitle } from "../elements/Titles"

// Views
import Hero from "../views/Hero"
import Projects from "../views/Projects"
import About from "../views/About"
import Contact from "../views/Contact"

import avatar from "../images/avatar.jpg"

const ProjectsWrapper = styled.div`
    ${tw`flex flex-wrap justify-between mt-8`};
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 1200px) {
        grid-gap: 3rem;
    }
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-gap: 2rem;
    }
`

const AboutHero = styled.div`
    ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
    ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
    ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const ContactText = styled.p`
    ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
    ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
    <>
        <Layout />
        <Parallax pages={5}>
            <Hero offset={0}>
                <BigTitle>
                    Hello, <br /> I'm Adam Hinckley.
                </BigTitle>
                <Subtitle>I'm creating web experiences for the next generation of consumer-facing companies.</Subtitle>
            </Hero>
            <Projects offset={1}>
                <Title>Projects</Title>
                <ProjectsWrapper>
                    <ProjectCard
                        title="Cadence"
                        link="https://getcadence.co/"
                        bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
                    >
                        SaaS application for scheduling employees
                    </ProjectCard>
                    <ProjectCard
                        title="Risk Assessment"
                        link="https://risk-assesment.netlify.com/"
                        bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
                    >
                        Mobile SPA for insurance agents to find a suitable product for a client based on age, gender,
                        height, weight, and prescriptions
                    </ProjectCard>
                </ProjectsWrapper>
            </Projects>
            <About offset={3}>
                <Title>About</Title>
                <AboutHero>
                    <Avatar src={avatar} alt="John Doe" />
                    <AboutSub>
                        Adam is a a former life insurance agency owner that found a love for web development after
                        creating underwriting solutions for the agents he worked with.
                    </AboutSub>
                </AboutHero>
            </About>
            <Contact offset={4}>
                <Inner>
                    <Title>Get in touch</Title>
                    <ContactText>
                        <a href="mailto:adamhinckley@mac.com">Email me</a> or find me on{" "}
                        <a href="https://twitter.com/HinckleyAdam">Twitter</a> &{" "}
                        <a href="https://www.linkedin.com/in/adamhinckley/">LinkedIn</a>
                    </ContactText>
                </Inner>
                <Footer>&copy; 2019 Adam Hinckley</Footer>
            </Contact>
        </Parallax>
    </>
)

export default Index
