"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import React, { useState } from "react";
import styled from "styled-components";
import TaskItem from "../Task_Item/Task_Item";
import { plus } from "../../utils/icons";
import CreateContent from "../Modals/CreateContent";
import Modal from "../Modals/Modal";
import EditContent from "../Modals/EditContent";
import { TaskProps } from "../../utils/customProps";

interface Props {
	title: string;
	tasks: any[];
}

interface EditContentProps {
	task: TaskProps;
}

function Tasks({ title, tasks }: Props) {
	const {
		theme,
		isLoading,
		openModal,
		modal,
		setEditingTaskId,
		editingTaskId,
	} = useGlobalState();

	/* const editForm = (taskId: string) => {
		setEditingTaskId(taskId);
	}; */

	// Function to handle opening the edit modal
	const openEditModal = (task: TaskProps) => {
		setEditingTaskId(task.id);
		openModal(); // Open the modal
	};

	return (
		<TaskStyled theme={theme}>
			{modal && <Modal content={<CreateContent />} />}
			{/* Render EditContent only if editingTaskId matches */}
			{modal && editingTaskId && (
				<Modal
					content={
						<EditContent
							{...tasks.find((task) => task.id === editingTaskId)}
						/>
					}
				/>
			)}
			<h1>{title}</h1>
			<div className="tasks grid">
				{tasks.map((task) => (
					<TaskItem
						key={task.id}
						title={task.title}
						description={task.description}
						date={task.date}
						isCompleted={task.isCompleted}
						id={task.id}
						openEditModal={openEditModal} // Pass the openEditModal function
					/>
				))}
				<button className="create-task" onClick={openModal}>
					{plus}Add New Task
				</button>
			</div>
		</TaskStyled>
	);
}
const TaskStyled = styled.main`
	padding: 2rem;
	width: 100%;
	background-color: ${(props) => props.theme.colorBg2};
	border: 2px solid ${(props) => props.theme.borderColor2};
	border-radius: 1rem;
	height: 100%;

	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 0.5rem;
	}

	.tasks {
		margin: 2rem 0;
	}

	> h1 {
		font-size: clamp(1.5rem, 2vw, 2rem);
		font-weight: 800;
		position: relative;

		&::after {
			content: "";
			position: absolute;
			bottom: -0.5rem;
			left: 0;
			width: 3rem;
			height: 0.2rem;
			background-color: ${(props) => props.theme.colorPrimaryGreen};
			border-radius: 0.5rem;
		}
	}

	.create-task {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;

		height: 16rem;
		color: ${(props) => props.theme.colorGrey2};
		font-weight: 600;
		cursor: pointer;
		border-radius: 1rem;
		border: 3px dashed ${(props) => props.theme.colorGrey5};
		transition: all 0.3s ease;

		&:hover {
			background-color: ${(props) => props.theme.colorGrey5};
			color: ${(props) => props.theme.colorGrey0};
		}
	}
`;

export default Tasks;
