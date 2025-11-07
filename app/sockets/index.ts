"use client";
import { io } from "socket.io-client";

export function getSocket(namespace: string) {
  const maybeSlash = namespace[0] === "/" ? "" : "/";
  return io(process.env.NEXT_PUBLIC_BE_URL + maybeSlash + namespace);
}
