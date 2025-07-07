import React from "react";
import { useState } from "react";
import {
	Container,
	Wrapper,
	Title,
	Desc,
	CardContainer,
	ToggleButtonGroup,
	ToggleButton,
	Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
	const [toggle, setToggle] = useState("all");
	return (
		<Container id="projects">
			<Wrapper>
				<Title>Projects</Title>
				<Desc>
					I have worked on a wide range of projects. From web apps to android
					apps. Here are some of my projects.
				</Desc>
				<ToggleButtonGroup>
					{toggle === "all" ? (
						<ToggleButton active value="all" onClick={() => setToggle("all")}>
							All
						</ToggleButton>
					) : (
						<ToggleButton value="all" onClick={() => setToggle("all")}>
							All
						</ToggleButton>
					)}
					<Divider />
					{toggle === "web app" ? (
						<ToggleButton
							active
							value="web app"
							onClick={() => setToggle("web app")}>
							Web App's
						</ToggleButton>
					) : (
						<ToggleButton value="web app" onClick={() => setToggle("web app")}>
							Web Apps
						</ToggleButton>
					)}
					<Divider />
					{toggle === "mobile app" ? (
						<ToggleButton
							active
							value="mobile app"
							onClick={() => setToggle("mobile app")}>
							Mobile Apps
						</ToggleButton>
					) : (
						<ToggleButton
							value="mobile app"
							onClick={() => setToggle("mobile app")}>
							Mobile Apps
						</ToggleButton>
					)}
					<Divider />
					{toggle === "tools" ? (
						<ToggleButton
							active
							value="tools"
							onClick={() => setToggle("tools")}>
							Python App's
						</ToggleButton>
					) : (
						<ToggleButton
							value="tools"
							onClick={() => setToggle("tools")}>
							Tools
						</ToggleButton>
					)}
				</ToggleButtonGroup>
				<CardContainer>
					{toggle === "all" &&
						projects.map((project) => (
							<ProjectCard
								project={project}
								openModal={openModal}
								setOpenModal={setOpenModal}
							/>
						))}
					{projects
						.filter((item) => item.category === toggle)
						.map((project) => (
							<ProjectCard
								project={project}
								openModal={openModal}
								setOpenModal={setOpenModal}
							/>
						))}
				</CardContainer>
			</Wrapper>
		</Container>
	);
};

export default Projects;
