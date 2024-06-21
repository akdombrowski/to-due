"use client";

import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useState } from "react";
import type { ReactNode } from "react";

export default function List() {
  const [tasks, setTasks] = useState<string[]>(["type first task here"]);

  const renderTasks = (tasks: string[]): ReactNode[] =>
    tasks.map((task, i) => {
      return (
        <TextField
          id="task-1"
          key={i}
          // label="Task 1"
          label={task}
          variant="outlined"
          // value={task}
          fullWidth
        />
      );
    });

  return renderTasks(tasks);
}
