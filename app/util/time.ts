import dayjs, { Dayjs } from "dayjs";

export function areOnSameDay(first: Dayjs, second: Dayjs) {
  return first.format("MM/DD/YYYY") === second.format("MM/DD/YYYY");
}

export function isToday(time: Dayjs) {
  return areOnSameDay(time, dayjs());
}

export function isInPast(time: Dayjs) {
  return time.unix() < dayjs().unix();
}

export function isInFuture(time: Dayjs) {
  return time.unix() > dayjs().unix();
}
