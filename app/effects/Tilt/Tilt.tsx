// Tilt.tsx
import React, { useState, useRef, useEffect } from "react";

interface TiltProps {
	children: React.ReactNode;
}

const Tilt: React.FC<TiltProps> = ({ children }) => {
	const tiltRef = useRef<HTMLDivElement>(null);
	const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});

	useEffect(() => {
		const tiltNode = tiltRef.current;

		const handleMouseMove = (e: MouseEvent) => {
			if (!tiltNode) return;

			const { left, top, width, height } = tiltNode.getBoundingClientRect();
			const centerX = left + width / 2;
			const centerY = top + height / 2;
			const mouseX = e.clientX - centerX;
			const mouseY = e.clientY - centerY;
			const rotateX = (mouseY / height) * 30; // Tilt degree, adjust as needed
			const rotateY = -(mouseX / width) * 30; // Tilt degree, adjust as needed

			setTiltStyle({
				transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
				transition: "transform 0.2s", // Smooth transition
			});
		};

		const handleMouseLeave = () => {
			setTiltStyle({
				transform: "rotateX(0deg) rotateY(0deg)",
				transition: "transform 0.5s", // Smooth reset transition
			});
		};

		if (tiltNode) {
			tiltNode.addEventListener("mousemove", handleMouseMove);
			tiltNode.addEventListener("mouseleave", handleMouseLeave);
		}

		return () => {
			if (tiltNode) {
				tiltNode.removeEventListener("mousemove", handleMouseMove);
				tiltNode.removeEventListener("mouseleave", handleMouseLeave);
			}
		};
	}, []);

	return (
		<div
			ref={tiltRef}
			style={{
				...tiltStyle,

				perspective: "1000px" /* Adjust for effect depth */,
			}}
		>
			{children}
		</div>
	);
};

export default Tilt;
