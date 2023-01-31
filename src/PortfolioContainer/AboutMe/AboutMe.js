import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};
	const fadeInSubscription =
		ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	const SCREEN_CONSTSANTS = {
		description:
			"Interested in Web-development. I have knowledge about React.js and Node.js.I am looking for an oppertunity to implement this knowledge in real life projects and ready to face the challenges",
		highlights: {
			bullets: [
				"React.js",
				"Interactive Front End",
				"CSS",
				"Managing database",
			],
			heading: "Here are a few highlights:",
		},
	};
	const renderHighlight = () => {
		return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
			<div className="highlight" key={i}>
				<div className="highlight-blob"></div>
				<span>{value}</span>
			</div>
		));
	};

	return (
		<div
			className="about-me-container screen-container"
			id={props.id || " "}
		>
			<div className="about-me-parent">
				<ScreenHeading
					title={"About Me"}
					subHeading={"Why Choose Me?"}
				/>
				<div className="about-me-card">
					<div className="about-me-profile"></div>
					<div className="about-me-details">
						<span className="about-me-description">
							{SCREEN_CONSTSANTS.description}
						</span>
						<div className="about-me-highlights">
							<div className="about-me-heading">
								<span>
									{SCREEN_CONSTSANTS.highlights.heading}
								</span>
							</div>
							{renderHighlight()}
						</div>
						<div className="about-me-options">
							<button
								className="btn primary-btn"
								onClick={() =>
									ScrollService.scrollService.scrollToHireMe()
								}
							>
								Hire Me
							</button>
							<a
								href="SOHINI_SEN_8240150887.pdf"
								download="SOHINI_SEN_8240150887.pdf"
							>
								<button className="btn highlighted-btn">
									Get Resume
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
