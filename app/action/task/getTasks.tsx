"use server";

import { Task } from "@/app/components/task/types";
import dayjs from "dayjs";

export async function getTasks() {
  return [
    {
      id: "trash",
      title: "Take Out Trash",
      due: dayjs().add(3, "day").unix(),
      completed: false,
      description: "Take out trash, recycling, and compost.",
    },
    {
      id: "cooper",
      title: "Cooper Massage",
      completed: false,
      due: dayjs().unix(),
      description:
        "Cooper's swollen limbs need a hot pack and a massage in order to help blood flow",
    },
  ].sort((a, b) => a.due - b.due) as Array<Task>;
}
