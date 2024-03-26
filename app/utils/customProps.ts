export interface TaskProps {
	title: string;
	description: string;
	date: string;
	isCompleted: boolean;
	isImportant?: boolean;
	id: string;
}
