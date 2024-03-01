import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const { userId } = auth();
		if (!userId) {
			return NextResponse.json({ error: "Unauthorized", status: 401 });
		}

		const { title, description, date, completed, status, important } =
			await req.json();

		if (!title || !description || !date) {
			return NextResponse.json({
				error: "Missing required fields",
				status: 400,
			});
		}

		if (title.length < 3) {
			return NextResponse.json({
				error: "Title must be atleast 3 characters long",
				status: 400,
			});
		}

		const task = await prisma.task.create({
			data: {
				title,
				description,
				date,
				isCompleted: completed,
				isImportant: important,
				userId,
			},
		});

		console.log("TASK CREATED: ", task);
		return NextResponse.json(task);
	} catch (error) {
		console.error("ERROR CREATING TASKS: ", error);
		return NextResponse.json({ error: "Error Creating Task", status: 500 });
	}
}

export async function GET(req: Request) {
	try {
	} catch (error) {
		console.error("ERROR GETTING TASK: ", error);
		return NextResponse.json({ error: "Error getting Task", status: 500 });
	}
}

export async function PUT(req: Request) {
	try {
	} catch (error) {
		console.error("ERROR UPDATING TASK: ", error);
		return NextResponse.json({ error: "Error updating Task", status: 500 });
	}
}

export async function DELETE(req: Request) {
	try {
	} catch (error) {
		console.error("ERROR DELETING TASK: ", error);
		return NextResponse.json({ error: "Error deleting Task", status: 500 });
	}
}
