import React, { useState } from "react";
import "./Signup.css";

interface SignupProps {
	setSignup: (signupState: boolean) => void;
}

export const Signup: React.FC<SignupProps> = ({ setSignup }) => {
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);
	const [info, setInfo] = useState({
		username: "",
		password: "",
		email: "",
	});

	const handleSignup = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);
		setSuccess(null);

		console.log(error, success);

		try {
			const response = await fetch("http://localhost:8080/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: info.username,
					password: info.password,
					email: info.email,
				}),
			});

			if (response.status == 201) {
				setSuccess("User registered!");
			} else {
				const errorData = await response.text();
				setError("Error registering user:" + errorData);
			}
		} catch (err: unknown) {
			if (err instanceof Error) {
				setError("Error registering user: " + err.message);
			}
		}
	};

	return (
		<div className="signup-container">
			<form className="signup-form">
				<input
					className="signup-input"
					placeholder="username"
					name="username"
					value={info.username}
					onChange={(e) => setInfo({ ...info, username: e.target.value })}
				/>
				<input
					className="signup-input"
					placeholder="email"
					name="email"
					value={info.email}
					onChange={(e) => setInfo({ ...info, email: e.target.value })}
				/>
				<input
					className="signup-input"
					placeholder="password"
					name="password"
					value={info.password}
					onChange={(e) => setInfo({ ...info, password: e.target.value })}
				/>
				<button onClick={(e) => handleSignup(e)} className="submit">
					Signup
				</button>
				<button onClick={() => setSignup(false)} className="signup-button">
					Trying to log in?
				</button>
			</form>
		</div>
	);
};
