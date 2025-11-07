"use client";
import { Box, Card, Flex, Text } from "@radix-ui/themes";
import { MiniTaskCardProps } from "./types";
import { getDueDateInEnglishTime } from "./util";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { appendSearchParams } from "@/app/util/searchParams";
import { useTasks } from "./Context";

export function MiniTaskCardList(props: MiniTaskCardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { tasks } = useTasks();

  if (!tasks.length) {
    return null;
  }

  return (
    <Box width="40%">
      <Flex direction="column" gap="3" width="100%">
        {tasks.map((task) => (
          <Card
            key={task.id}
            variant="classic"
            onClick={() =>
              router.push(
                pathname +
                  appendSearchParams(searchParams.toString(), {
                    taskID: task.id,
                  })
              )
            }
          >
            <Flex gap="4" direction="column">
              <Text size="2" weight="bold">
                {task.title}
              </Text>
              <Text size="1">{getDueDateInEnglishTime(task)}</Text>
            </Flex>
          </Card>
        ))}
        {!tasks.length && (
          <Card>
            <Text>No tasks!</Text>
          </Card>
        )}
      </Flex>
    </Box>
  );
}
