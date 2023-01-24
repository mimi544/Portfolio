import React, { useState, useRef } from "react";
import Typewriter from "typewriter-effect";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

import "./ContactMe.css";

export default function ContactMe(props) {
	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};
	const fadeInSubscription =
		ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	const form = useRef();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [banner, setBanner] = useState("");
	const [bool, setBool] = useState(false);

	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleMessage = (e) => {
		setMessage(e.target.value);
	};
	// console.log(name);
	const submitForm = (e) => {
		e.preventDefault();
		try {
			if (
				name.length === 0 ||
				email.length === 0 ||
				message.length === 0
			) {
				setBanner("Please Fill all the fields");
				toast.error("Please Fill all the fields");
				setBool(false);
			} else {
				setBool(true);
				emailjs
					.sendForm(
						"service_y7m9nv7",
						"template_k1i40y9",
						form.current,
						"R44nkPSYFI36nBmP4"
					)
					.then(
						(res) => {
							// console.log(res);
							if (res.status === 200) {
								setBanner("Thanks for contacting Sohini");
								toast.success("Email sent successfully");
								setBool(false);
								setName("");
								setMessage("");
								setEmail("");
							}
						},
						(error) => {
							// console.log(error.text);
							toast.error(
								"Please contact Sohini33 with Linkedin"
							);
						}
					);
			}
		} catch (error) {
			console.log(error);

			toast.error("Please contact Sohini12 with Linkedin");
		}
	};

	return (
		<div className="main-container" id={props.id || ""}>
			<ScreenHeading
				subHeading={"Lets Keep In Touch"}
				title={"Contact Me"}
			/>
			<ToastContainer />
			<div className="central-form">
				<div className="col">
					<h2 className="title">
						{""}
						<Typewriter
							options={{
								strings: ["Get In Touch 🤝"],
								cursor: ["...."],
								autoStart: true,
								loop: true,
							}}
						/>
					</h2>
					<a href="https://www.instagram.com/i.am.sohini/">
						<i className="fa-brands fa-instagram"></i>
					</a>
					<a href="https://twitter.com/SohiniS28948919">
						<i className="fa-brands fa-twitter"></i>
					</a>
					<a href="https://www.linkedin.com/in/sohini-sen-96ab951a2/">
						<i className="fa-brands fa-linkedin"></i>
					</a>
					<a href="https://github.com/mimi544">
						<i className="fa-brands fa-github"></i>
					</a>
				</div>
				<div className="back-form">
					<div className="img-back">
						<h4> Send Your Email Here !</h4>
						<img src={imgBack} alt=" not found" />
					</div>
					<form ref={form} onSubmit={submitForm}>
						<p>{banner}</p>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							onChange={handleName}
							value={name}
							name="name"
						/>
						<label htmlFor="email">Email Address</label>
						<input
							type="email"
							onChange={handleEmail}
							value={email}
							name="email"
						/>
						<label htmlFor="message">Message</label>
						<textarea
							type="text"
							onChange={handleMessage}
							value={message}
							name="message"
						/>
						<div className="send-btn">
							<button type="submit">
								send <i className="fa fa-paper-plane" />
								{bool ? (
									<b className="load">
										<img
											src={load1}
											alt=" not responding"
										/>
									</b>
								) : (
									""
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
