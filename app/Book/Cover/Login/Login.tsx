import React, { useState } from "react";
import "./Login.css";

interface LoginProps {
	openBook: () => void;
	setLogin: (loginState: boolean) => void;
	setIsLoggedIn: (loggedInState: boolean) => void;
	setSignup: (signupState: boolean) => void;
	login: boolean;
}

export const Login: React.FC<LoginProps> = ({
	openBook,
	setLogin,
	setIsLoggedIn,
	login,
	setSignup,
}) => {
	const [info, setInfo] = useState({
		username: "",
		password: "",
	});
	const [error, setError] = useState<string | null>(null);

	console.log(error);

	const handleLogin = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		setError(null);
		e.preventDefault();

		try {
			const response = await fetch("http://localhost:8080/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: info.username,
					password: info.password,
				}),
			});

			if (response.status === 200) {
				openBook();
				setIsLoggedIn(true);
				setLogin(false);
			} else {
				const errorData = await response.text();
				setError("Error logging in: " + errorData);
			}
		} catch (err: unknown) {
			if (err instanceof Error) {
				setError("Error logging in: " + err.message);
			} else {
				setError("Error logging in");
			}
		}
	};

	return (
		<div
			className="login-container"
			style={{ display: login ? "flex" : "none" }}
		>
			<form className="login-form">
				<input
					className="login-input"
					placeholder="username"
					name="username"
					value={info.username}
					onChange={(e) => setInfo({ ...info, username: e.target.value })}
				/>
				<input
					className="login-input"
					placeholder="password"
					name="password"
					value={info.password}
					onChange={(e) => setInfo({ ...info, password: e.target.value })}
				/>
				<button onClick={(e) => handleLogin(e)} className="submit">
					Log In
				</button>
				<button onClick={() => setSignup(true)} className="signup-button">
					Dont have an account?
				</button>
			</form>
		</div>
	);
};
