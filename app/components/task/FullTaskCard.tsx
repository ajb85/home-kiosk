import { Button, Card, Flex, Text } from "@radix-ui/themes";
import { FullTaskCardProps } from "./types";
import { getTaskDueDateString } from "./util";

export function FullTaskCard({ task }: FullTaskCardProps) {
  if (!task) {
    return (
      <Card>
        <Text>No active task! Create one to view it here.</Text>
      </Card>
    );
  }
  const dueString = getTaskDueDateString(task);
  return (
    <Card variant="classic">
      <Flex gap="4" direction="column">
        <Text size="2" weight="bold">
          {task.title} - {dueString}
        </Text>
        <Text size="1">{task.description ?? "<No Description>"}</Text>
        <Flex gap="3">
          <Button color="green" highContrast>
            Complete
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
}
