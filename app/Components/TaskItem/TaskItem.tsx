"use client";
import React from "react";

interface Props {
	title: string;
	description: string;
	date: string;
	isCompleted: boolean;
	id: string;
}

function TaskItem({ title, description, date, isCompleted, id }: Props) {
	return (
		<div>
			<h1>{title}</h1>
			<p>{description}</p>
			<p className="date">{date}</p>
			<div className="task-footer">
				{isCompleted ? (
					<button className="completed">Completed</button>
				) : (
					<button className="incomplete">Incomplete</button>
				)}
				<div className="edit">{edit}</div>
			</div>
		</div>
	);
}

export default TaskItem;
