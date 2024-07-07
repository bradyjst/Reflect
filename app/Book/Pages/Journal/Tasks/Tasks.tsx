import React, { useState } from "react";
import "./Tasks.css";
import { Header } from "~/Book/PageComponents/Header/Header";
import { TaskCard } from "./TaskCard/TaskCard";

interface TasksProps {}

interface Task {
	content: string;
	id: number;
}

export const Tasks: React.FC<TasksProps> = () => {
	const [tasklist, setTasklist] = useState<Task[]>([]);
	const [taskContent, setTaskContent] = useState<string>("");

	const addTask = () => {
		const newTask = {
			id: tasklist.length,
			content: taskContent,
		};
		setTasklist((prevTasks) => [...prevTasks, newTask]);
		setTaskContent("");
		console.log("Task Added");
	};

	const removeTask = (taskId: number) => {
		setTasklist((prevTaskList) =>
			prevTaskList.filter((task) => taskId != task.id)
		);
	};

	return (
		<div className="tasks-container">
			<Header title="Tasks" />
			<div className="task-input-container">
				<form className="add-task-form">
					<input
						className="task-add"
						type="text"
						placeholder="What do you need to do?"
						value={taskContent}
						onChange={(e) => setTaskContent(e.target.value)}
					/>
					<button
						onClick={(e) => {
							e.preventDefault();
							addTask();
						}}
						className="add-task-button"
						disabled={tasklist.length > 11 ? true : false}
					>
						<img className="add-task-img" src="featherpen1.png" />
					</button>
				</form>
			</div>
			<div className="to-do-container">
				{tasklist.map((task) => (
					<TaskCard
						content={task.content}
						key={task.id}
						id={task.id}
						removeTask={() => removeTask(task.id)}
					/>
				))}
			</div>
		</div>
	);
};
