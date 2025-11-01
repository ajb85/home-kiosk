import { getTasks } from "@/app/action/task/getTasks";
import { Box, Card, Flex, Text } from "@radix-ui/themes";
import { MiniTaskCard } from "./MiniCard";
import { TaskPageProps } from "./types";
import { FullTaskCard } from "./FullTaskCard";

export default async function TaskPage(props: TaskPageProps) {
  const tasks = await getTasks();
  const activeTaskID = (await props.searchParams).taskID;

  const activeTaskByQueryParam = activeTaskID
    ? tasks.find((t) => t.id === activeTaskID)
    : null;
  const activeTask = activeTaskByQueryParam ?? tasks[0];
  return (
    <Flex direction="row" gap="4">
      <Box width="40%">
        <Flex direction="column" gap="3" width="100%">
          {tasks.map((t) => (
            <MiniTaskCard task={t} key={t.title} />
          ))}
          {!tasks.length && (
            <Card>
              <Text>No tasks!</Text>
            </Card>
          )}
        </Flex>
      </Box>
      <Box width="100%">
        <FullTaskCard task={activeTask} />
      </Box>
    </Flex>
  );
}
