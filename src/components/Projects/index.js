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
							Web App's
						</ToggleButton>
					)}
					<Divider />
					{toggle === "UI/UX Designs" ? (
						<ToggleButton
							active
							value="UI/UX Designs"
							onClick={() => setToggle("UI/UX Designs")}>
							UI/UX Designs
						</ToggleButton>
					) : (
						<ToggleButton
							value="UI/UX Designs"
							onClick={() => setToggle("UI/UX Designs")}>
							UI/UX Designs
						</ToggleButton>
					)}
					<Divider />
					{toggle === "python" ? (
						<ToggleButton
							active
							value="python"
							onClick={() => setToggle("python")}>
							Python App's
						</ToggleButton>
					) : (
						<ToggleButton
							value="python"
							onClick={() => setToggle("python")}>
							Python App's
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
