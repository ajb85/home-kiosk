"use client";
import { useState, createContext, useContext, useEffect } from "react";
import { Task, TaskProviderProps } from "./types";
import { getSocket } from "@/app/sockets";

const socket = getSocket("/");
const context = createContext({
  tasks: [] as Array<Task>,
  upsertTask: (t: Task) => {},
});
const { Provider } = context;

export function TaskProvider(props: TaskProviderProps) {
  const [tasks, setTasks] = useState(props.initialTasks);
  const upsertTask = (task: Task) => {
    console.log("UPSERT: ", task);
    setTasks((currentState) => {
      let didFind = false;
      const newState = currentState.map((t) => {
        if (t.id === task.id) {
          didFind = true;
          return task;
        }
        return t;
      });

      if (!didFind) {
        newState.push(task);
      }

      return newState;
    });
  };

  useEffect(() => {
    socket.on("newTask", ({ task }) => upsertTask(task));
    socket.on("updateTask", ({ task }) => upsertTask(task));
  }, []);

  return <Provider value={{ tasks, upsertTask }}>{props.children}</Provider>;
}

export function useTasks() {
  return useContext(context);
}
