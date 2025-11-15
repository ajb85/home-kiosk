"use server";

import { Task } from "@/app/components/task/types";
import { areOnSameDay } from "@/app/util/time";
import axios from "axios";
import dayjs from "dayjs";

const taskMapperByTag: Record<string, (task: Task) => Task | null> = {
  trash: (task) =>
    areOnSameDay(dayjs().add(1, "day"), dayjs.unix(task.due)) ? task : null,
};

export async function getTasks(): Promise<Array<Task>> {
  const tasks = await axios.get("http://localhost:4000/api/tasks");
  const taskList = (tasks.data.tasks ?? ([] as Task[])).reduce(
    (acc: Task[], t: Task) => {
      if (!taskMapperByTag[t.tag]) {
        acc.push(t);
        return acc;
      }

      const results = taskMapperByTag[t.tag](t);
      if (results) {
        acc.push(results);
      }

      return acc;
    },
    [] as Task[]
  );

  return taskList;
}
