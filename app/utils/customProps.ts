export interface TaskProps {
	title: string;
	description: string;
	date: string;
	isCompleted: boolean;
	isImportant?: boolean;
	id: string;
	openEditModal: (task: TaskProps) => void;
}
