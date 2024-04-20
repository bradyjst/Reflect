/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// Ripple.tsx
import React, { useState } from "react";
import "./Ripple.css"; // Import the CSS for the ripple effect

interface RippleProps {
	children: React.ReactNode;
}

interface RippleInstance {
	x: number;
	y: number;
	size: number;
}

const Ripple: React.FC<RippleProps> = ({ children }) => {
	const [ripples, setRipples] = useState<RippleInstance[]>([]);

	const addRipple = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = event.currentTarget;
		const rect = target.getBoundingClientRect();
		const size = 15;
		const x = event.clientX - rect.left - size / 2;
		const y = event.clientY - rect.top - size / 2;
		const newRipple: RippleInstance = { x, y, size };

		setRipples((prevRipples) => [...prevRipples, newRipple]);

		setTimeout(() => {
			setRipples((prevRipples) => prevRipples.slice(1));
		}, 600);
	};

	return (
		<div
			onClick={addRipple}
			style={{ position: "relative", overflow: "hidden", width: "fit-content" }}
		>
			{children}
			{ripples.map((ripple, index) => (
				<span
					key={`ripple_${index}`}
					className="ripple"
					style={{
						left: ripple.x,
						top: ripple.y,
						width: ripple.size,
						height: ripple.size,
					}}
				/>
			))}
		</div>
	);
};

export default Ripple;
