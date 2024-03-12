import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import axios from "axios";
import toast from "react-hot-toast";
import { useGlobalState } from "@/app/context/globalProvider";
import { TaskProps } from "../../utils/customProps";

function EditContent(task: TaskProps) {
	const [updateTitle, setUpdateTitle] = useState(task.title);
	const [updateDescription, setUpdateDescription] = useState(
		task.description
	);
	const [updateDate, setUpdateDate] = useState(task.date);
	const [updateCompleted, setUpdateCompleted] = useState(task.isCompleted);
	const [updateImportant, setUpdateImportant] = useState(task.isImportant);

	const { theme, allTasks, updateTask, closeModal } = useGlobalState();
	const handleChange = (name: string) => (e: any) => {
		switch (name) {
			case "title":
				setUpdateTitle(e.target.value);
				break;
			case "description":
				setUpdateDescription(e.target.value);
				break;
			case "date":
				setUpdateDate(e.target.value);
				break;
			case "completed":
				setUpdateCompleted(e.target.checked);
				break;
			case "important":
				setUpdateImportant(e.target.checked);
				break;
			default:
				break;
		}
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const updatedTask = {
			title: updateTitle,
			description: updateDescription,
			date: updateDate,
			isCompleted: updateCompleted,
			isImportant: updateImportant,
			id: task.id,
		};

		updateTask(updatedTask);

		/* closeModal(); */
		/* console.log("Task Title:", task.title); */
	};

	return (
		<EditContentStyled onSubmit={handleSubmit} theme={theme}>
			<h1>Edit Task</h1>
			<div className="input-control">
				<label htmlFor="title">Title</label>
				<input
					type="text"
					id="title"
					value={updateTitle}
					name="title"
					onChange={handleChange("title")}
				/>
			</div>
			<div className="input-control">
				<label htmlFor="description">Description</label>
				<textarea
					value={updateDescription}
					onChange={handleChange("description")}
					id="description"
					name="description"
					rows={4}
				/>
			</div>
			<div className="input-control">
				<label htmlFor="date">Date</label>
				<input
					value={updateDate}
					onChange={handleChange("date")}
					type="date"
					name="date"
					id="date"
				/>
			</div>
			<div className="input-control toggler">
				<label htmlFor="completed">Toggle Completed</label>
				<input
					value={updateCompleted.toString()}
					/* checked={updateCompleted} */
					onChange={handleChange("completed")}
					type="checkbox"
					name="completed"
					id="completed"
				/>
			</div>
			<div className="input-control toggler">
				<label htmlFor="important">Toggle Important</label>
				<input
					/* value={updateImportant.toString()} */
					checked={updateImportant}
					onChange={handleChange("important")}
					type="checkbox"
					name="important"
					id="important"
				/>
			</div>
			<div className="submit-btn flex justify-end">
				<Button
					type="submit"
					name="Update Task"
					padding={"0.8rem 2rem"}
					borderRad={"0.8rem"}
					fw={"500"}
					fs={"1.2rem"}
					background={"rgb(0, 163, 255)"}
				/>
			</div>
		</EditContentStyled>
	);
}

const EditContentStyled = styled.form`
	> h1 {
		font-size: clamp(1.2rem, 5vw, 1.6rem);
		font-weight: 600;
	}

	color: ${(props) => props.theme.colorGrey1};

	.input-control {
		position: relative;
		margin: 1.6rem 0;
		font-weight: 500;

		label {
			margin-bottom: 0.5rem;
			display: inline-block;
			font-size: clamp(0.9rem, 5vw, 1.2rem);

			span {
				color: ${(props) => props.theme.colorGrey3};
			}
		}

		input,
		textarea {
			width: 100%;
			padding: 1rem;

			resize: none;
			background-color: ${(props) => props.theme.colorGreyDark};
			color: ${(props) => props.theme.colorGrey2};
			border-radius: 0.5rem;
		}
	}

	.submit-btn button {
		transition: all 0.35s ease-in-out;

		i {
			color: ${(props) => props.theme.colorGrey0};
		}

		&:hover {
			background: ${(props) => props.theme.colorPrimaryGreen} !important;
			color: ${(props) => props.theme.colorWhite} !important;
		}
	}

	.toggler {
		display: flex;
		align-items: center;
		justify-content: space-between;

		cursor: pointer;

		label {
			flex: 1;
		}
		input {
			width: initial;
		}
	}
`;

export default EditContent;
