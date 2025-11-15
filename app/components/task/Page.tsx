import { getTasks } from "@/app/action/task/getTasks";
import { Box, Flex } from "@radix-ui/themes";
import { Task, TaskPageProps } from "./types";
import { FullTaskCard } from "./FullTaskCard";
import { TaskProvider } from "./Context";
import { MiniTaskCardList } from "./MiniCardList";
import { NoTasks } from "./NoTasks";
import { CreateTaskButton } from "./CreateTaskButton";

export default async function TaskPage(props: TaskPageProps) {
  const tasks = await getTasks();
  const activeTaskID = (await props.searchParams).taskID;

  const activeTaskByQueryParam = activeTaskID
    ? tasks.find((t) => t.id === activeTaskID)
    : null;

  const activeTask: Task = activeTaskByQueryParam ?? tasks[0];

  return (
    <TaskProvider initialTasks={tasks}>
      <CreateTaskButton />
      <Flex direction="row" gap="4">
        <NoTasks />
        <MiniTaskCardList />
        {activeTask && (
          <Box width="100%">
            <FullTaskCard task={activeTask} />
          </Box>
        )}
      </Flex>
    </TaskProvider>
  );
}
