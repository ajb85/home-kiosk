"use client";
import { Button, Dialog, Flex, Select, TextField } from "@radix-ui/themes";
import { CreateTaskButtonProps } from "./types";
import { useBoolean } from "@/app/hooks/useBoolean";
import { useState } from "react";
import dayjs from "dayjs";
import { createTask } from "@/app/action/task/createTask";

export function CreateTaskButton(props: CreateTaskButtonProps) {
  const controlModal = useBoolean();
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button color="gold" onClick={controlModal.setTrue} mb="4">
          Create New Task
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Create New Task</Dialog.Title>
        <CreateTaskModalContent />
      </Dialog.Content>
    </Dialog.Root>
  );
}

function CreateTaskModalContent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [tag, setTag] = useState("");

  const dueDate = dayjs(date, "MM/DD/YYYY");
  const isValidDate = dueDate.isValid();
  const due = isValidDate ? dueDate.unix() : null;

  return (
    <Flex direction="column" gap="4">
      <TextField.Root
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField.Root
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Select.Root value={tag} onValueChange={(value) => setTag(value)}>
        <Select.Trigger placeholder="Category" />
        <Select.Content>
          <Select.Group>
            <Select.Label>Tag</Select.Label>
            <Select.Item value="chore">Chore</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <TextField.Root
        placeholder="Due Date MM/DD/YYYY"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Button
        color="green"
        onClick={async () => {
          if (!title || !description || !due) {
            console.log("BAD DATA, RETURN");
            return;
          }

          const formData = new FormData();
          formData.set("title", title);
          formData.set("description", description);
          formData.set("tag", tag);
          formData.set("due", due.toString());
          await createTask(formData);
        }}
        disabled={!title || !description || !due}
      >
        Create Task
      </Button>
    </Flex>
  );
}
