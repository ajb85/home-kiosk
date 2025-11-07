export type Task = {
  id: string;
  title: string;
  tag: string;
  due: number;
  completed: boolean;
  description?: string;
};

export type MiniTaskCardProps = {};

export type FullTaskCardProps = {
  task?: Task;
};

export type TaskPageProps = {
  searchParams: Promise<{ taskID: string }>;
};

export type TaskProviderProps = {
  initialTasks: Task[];
  children: React.ReactNode;
};
