"use server";

import { emptyStringThrows } from "@/app/util/nullthrows";
import axios from "axios";

export async function createTask(formData: FormData) {
  console.log("POST: ", {
    title: emptyStringThrows(formData.get("title")),
    description: emptyStringThrows(formData.get("description")),
    due: formData.get("due")?.toString(),
    tag: formData.get("tag")?.toString(),
  });
  await axios.post("http://localhost:4000/api/tasks", {
    title: emptyStringThrows(formData.get("title")),
    description: emptyStringThrows(formData.get("description")),
    due: formData.get("due")?.toString(),
    tag: formData.get("tag")?.toString(),
  });
}
