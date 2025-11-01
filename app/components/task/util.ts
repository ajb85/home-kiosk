import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Task } from "./types";

dayjs.extend(relativeTime);

export function getTaskDueDateString(task: Task) {
  return dayjs.unix(task.due).format("MM/DD");
}

export function getDueDateInEnglishTime(task: Task) {
  const due = dayjs.unix(task.due);
  const now = dayjs();
  if (due.format("MM/DD/YYYY") === now.format("MM/DD/YYYY")) {
    return "Today";
  }

  if (due.unix() < now.unix()) {
    return "Past Due";
  }

  return dayjs().to(due);
}
