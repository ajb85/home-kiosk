"use client";
import { Box, Card } from "@radix-ui/themes";
import { useTasks } from "./Context";

export function NoTasks() {
  const { tasks } = useTasks();

  if (tasks.length) {
    return null;
  }

  return (
    <Box width="100%">
      <Card>All caught up!</Card>
    </Box>
  );
}
