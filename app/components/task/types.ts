export type Task = {
  id: string;
  title: string;
  due: number;
  completed: boolean;
  description?: string;
};

export type MiniTaskCardProps = {
  task: Task;
};

export type FullTaskCardProps = {
  task: Task;
};

export type TaskPageProps = {
  searchParams: Promise<{ taskID: string }>;
};
