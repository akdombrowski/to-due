"use client";

import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useState } from "react";
import type { ChangeEvent } from "react";

export default function Task({ id }: { id: number }) {
  const [taskContent, setTaskContent] = useState<string>("task");

  return (
    <TextField
      id={`task-${id}`}
      label={`Task ${id}`}
      // label={task}
      variant="outlined"
      value={taskContent}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        setTaskContent(event.target.value)
      }
      fullWidth
    />
  );
}
