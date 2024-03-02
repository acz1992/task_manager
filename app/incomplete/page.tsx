"use client";

import React from "react";
import Tasks from "../Components/Tasks/Tasks";
import { useGlobalState } from "../context/globalProvider";

function page() {
	const { incompleteTasks } = useGlobalState();
	return <Tasks title="Incomplete Tasks" tasks={incompleteTasks}></Tasks>;
}

export default page;
