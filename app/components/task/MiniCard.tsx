"use client";
import { Card, Flex, Text } from "@radix-ui/themes";
import { MiniTaskCardProps } from "./types";
import { getDueDateInEnglishTime, getTaskDueDateString } from "./util";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { appendSearchParams } from "@/app/util/searchParams";

export function MiniTaskCard({ task }: MiniTaskCardProps) {
  const dueString = getTaskDueDateString(task);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return (
    <Card
      variant="classic"
      onClick={() =>
        router.push(
          pathname +
            appendSearchParams(searchParams.toString(), { taskID: task.id })
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
  );
}
