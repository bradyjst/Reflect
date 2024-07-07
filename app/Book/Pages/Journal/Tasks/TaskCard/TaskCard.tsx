import React, { useState } from "react";
import "./TaskCard.css";

interface TaskCardProps {
	content: string;
	id: number;
	removeTask: () => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
	content,
	id,
	removeTask,
}) => {
	const [strikethrough, setStrikethrough] = useState<boolean>(false);

	return (
		<div className="task-card-container">
			<span className="task-card-id">{id + 1}.</span>
			<span
				onClick={() => setStrikethrough(!strikethrough)}
				className="task-card-content"
				style={
					strikethrough
						? { textDecoration: "line-through" }
						: { textDecoration: "none" }
				}
			>
				{content}
			</span>
			<button className="task-delete-button" onClick={removeTask}>
				X
			</button>
		</div>
	);
};
