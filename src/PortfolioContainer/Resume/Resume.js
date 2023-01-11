import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
	const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
	const [carousalOffSetStyle, setCarouslOffSetStyle] = useState({});

	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};
	const fadeInSubscription =
		ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	const ResumeHeading = (props) => {
		return (
			<div className="resume-heading">
				<div className="resume-main-heading">
					<div className="heading-bullet"></div>
					<span>{props.heading ? props.heading : ""}</span>
					{props.fromDate && props.toDate ? (
						<div className="heading-date">
							{props.fromDate + "-" + props.toDate}
						</div>
					) : (
						<div></div>
					)}
				</div>
				<div className="resume-sub-heading">
					<span>{props.subHeading ? props.subHeading : ""}</span>
				</div>
				<div className="resume-heading-description">
					<span>{props.description ? props.description : ""}</span>
				</div>
			</div>
		);
	};

	const resumeBullets = [
		{ label: "Education", logoSrc: "education.svg" },
		{ label: "Work Experience", logoSrc: "work-history.svg" },
		{ label: "Programming Skills", logoSrc: "programming-skills.svg" },
		{ label: "Projects", logoSrc: "projects.svg" },
		{ label: "Interests", logoSrc: "interests.svg" },
	];

	const programmingSkillDetails = [
		{ skill: "PHP", ratingPercentage: 85 },
		{ skill: "HTML", ratingPercentage: 85 },
		{ skill: "CSS", ratingPercentage: 85 },
		{ skill: "REACT JS", ratingPercentage: 85 },
		{ skill: "NODE JS", ratingPercentage: 85 },
		{ skill: "MONGODB", ratingPercentage: 85 },
	];

	const projectDetails = [
		{
			title: "Personal Portfolio Website",
			duration: { fromDate: "2022", toDate: "2023" },
			description:
				"A personal website to show all my details and projects at a place",
			subHeading: "Techmologies Used: React Js , Bootstrap",
		},
		{
			title: "E-commerce Site For Furniture Using Nodejs And Nodejs",
			duration: { fromDate: "2020", toDate: "2021" },
			description:
				"An E-commerce website to sell various types of furniture",
			subHeading:
				"Techmologies Used: React Js , Bootstrap, Nodejs, Mongodb",
		},
		{
			title: "Food Delivery Website Using Nodejs",
			duration: { fromDate: "2019", toDate: "2020" },
			description: "A  website to deliver foods and track them",
			subHeading:
				"Technologies Used: Nodejs ,Express Js, Mongodb Bootstrap",
		},
	];

	const resumeDetails = [
		<div className="resume-screen-container" key="education">
			<ResumeHeading
				heading={"Brainware University"}
				subHeading={"MASTERS IN COMPUTER SCIENCE AND TECHNOLOGY"}
				fromDate={"2021"}
				toDate={"2023"}
			/>
			<ResumeHeading
				heading={"Brainware University"}
				subHeading={"BACHELOR IN COMPUTER SCIENCE AND TECHNOLOGY"}
				fromDate={"2021"}
				toDate={"2017"}
			/>
			<ResumeHeading
				heading={"Santragachi Kedarnath Institution For Girls'"}
				subHeading={"HIGHER SECONDARY (H.S)"}
				fromDate={"2015"}
				toDate={"2017"}
			/>
		</div>,
		/*WORK EXPERIENCE*/
		<div className="resume-screen-container" key="work-experience">
			<div className="experience-container">
				<ResumeHeading
					heading={"Fresher"}
					subHeading={"Still has no work-experience"}
				/>
				<div className="experience-description">
					<span className="resume-description-text">
						Currently searching for a job.
					</span>
				</div>
				<div className="experience-description">
					<span className="resume-description-text">
						- Took training on ReactJs and NodeJs, as i have very
						much interest in web development.
					</span>
					<br />
					<span className="resume-description-text">
						- Took training on ReactJs and NodeJs, as i have very
						much interest in web development.
					</span>
					<br />
					<span className="resume-description-text">
						- Took training on ReactJs and NodeJs, as i have very
						much interest in web development.
					</span>
					<br />
				</div>
			</div>
		</div>,
		<div
			className="resume-screen-container programming-skills-container"
			key="programming-skills"
		>
			{programmingSkillDetails.map((skill, index) => (
				<div className="skill-parent" key={index}>
					<div className="heading-bullet"></div>
					<span>{skill.skill}</span>
					<div className="skill-percentage">
						<div
							style={{ width: skill.ratingPercentage + "%" }}
							className="active-percentage-bar"
						></div>
					</div>
				</div>
			))}
		</div>,
		<div className="resume-screen-container" key="projects">
			{projectDetails.map((projectDetails, index) => (
				<ResumeHeading
					key={index}
					heading={projectDetails.title}
					subHeading={projectDetails.subHeading}
					description={projectDetails.description}
					fromDate={projectDetails.duration.fromDate}
					toDate={projectDetails.duration.toDate}
				/>
			))}
		</div>,

		<div className="resume-screen-container" key="interests">
			<ResumeHeading
				heading="Drawing"
				description="I also love to draw because I like colors and using various colors I like to make colorful visuals which makes me happy."
			/>
			<ResumeHeading
				heading="Music"
				description="Music helps me calm down in any situation."
			/>
			<ResumeHeading
				heading="Gaming"
				description="I usually play video games for stress relieving "
			/>
		</div>,
	];

	const handleCarousal = (index) => {
		let offsetHeight = 360;
		let newCarousalOffset = {
			style: {
				transform: "translateY(" + index * offsetHeight * -1 + "px)",
			},
		};
		setCarouslOffSetStyle(newCarousalOffset);
		setSelectedBulletIndex(index);
	};

	const getBullets = () => {
		return resumeBullets.map((bullet, index) => (
			<div
				onClick={() => handleCarousal(index)}
				className={
					index === selectedBulletIndex
						? "bullet selected-bullet"
						: "bullet"
				}
				key={index}
			>
				<img
					className="bullet-logo"
					src={require(`../../assets/Resume/${bullet.logoSrc}`)}
					alt=""
				/>
				<span className="bullet-label">{bullet.label}</span>
			</div>
		));
	};

	const getResumeScreen = () => {
		return (
			<div
				style={carousalOffSetStyle.style}
				className="resume-details-carousal"
			>
				{resumeDetails.map((ResumeDetail) => ResumeDetail)}
			</div>
		);
	};

	return (
		<div className="resume-container screen-container" id={props.id || ""}>
			<div className="resume-content">
				<ScreenHeading
					title={"Resume"}
					subHeading={"My Formal Bio Details"}
				/>
				<div className="resume-card">
					<div className="resume-bullets">
						<div className="bullet-container">
							<div className="bullet-icons"></div>
							<div className="bullets">{getBullets()}</div>
						</div>
					</div>
					<div className="resume-bullet-details">
						{getResumeScreen()}
					</div>
				</div>
			</div>
		</div>
	);
}
