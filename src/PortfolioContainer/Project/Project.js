// import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import "./Project.css";

import lady from "../../../src/img/Project/lady.png";
import mike from "../../../src/img/Project/mike.png";
import man from "../../../src/img/Project/man.png";
import shape from "../../../src/img/Project/shape-bg.png";
import { ProjectDetails } from "./ProjectDetails";

export default function Project(props) {
	let fadeInScreenHandler = (screen) => {
		if (screen.fadeScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};

	const fadeInSubscription =
		ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	const options = {
		loop: true,
		margin: 0,
		nav: true,
		animateIn: "bounceInRight",
		animateOut: "bounceOutRight",
		dots: true,
		autoplay: true,
		smartSpeed: 1000,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 1,
			},
			1000: {
				items: 3,
			},
		},
	};

	return (
		<div id={props.id || ""}>
			<ScreenHeading title={"Project"} subHeading={"My Works"} />
			<section className="Project-section">
				<div className="container">
					<div className="row">
						<OwlCarousel className="owl-carousel" {...options}>
							{ProjectDetails.map((projectDetail) => {
								return (
									<div
										className="col-lg-12"
										key={projectDetail.id}
									>
										<div className="project-card">
											<div className="id">
												{projectDetail.id}
											</div>
											<img
												src={require(`../../../src/assets/Project/${projectDetail.img}`)}
												alt="No internet connection"
											/>
											<div className="name">
												{projectDetail.name}
											</div>
											<div className="technologies">
												{projectDetail.technologies}
											</div>
											<div className="description">
												{projectDetail.description}
											</div>
												<a
													href={projectDetail.gitlink}
													target="_blank"
													rel="noreferrer"
												>
													<button className="btn primary-btn">
														Gitlink
													</button>
												</a>
												<a
													href={
														projectDetail.livelink
													}
													target="_blank"
													rel="noreferrer"
												>
													<button className="btn highlighted-btn">
														Live Link
													</button>
												</a>
											</div>
										</div>
								);
							})}
						</OwlCarousel>
					</div>
				</div>
			</section>
			<div className="footer-image">
				<img src={shape} alt="image not responding" />
			</div>
		</div>
	);
}
