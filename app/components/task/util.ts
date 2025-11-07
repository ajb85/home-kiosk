import dayjs from "dayjs";
import { Task } from "./types";
import { isInPast, isToday } from "@/app/util/time";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export function getTaskDueDateString(task: Task) {
  return dayjs.unix(task.due).format("MM/DD");
}

export function getDueDateInEnglishTime(task: Task) {
  const due = dayjs.unix(task.due);
  if (isToday(due)) {
    return "Today";
  }

  if (isInPast(due)) {
    return "Past Due";
  }

  return dayjs().to(due);
}
