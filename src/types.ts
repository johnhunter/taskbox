export type TaskResponse = {
  id: string;
  title: string;
  completed: boolean;
};

export type TaskData = {
  id: string;
  title: string;
  state: 'TASK_ARCHIVED' | 'TASK_INBOX' | 'TASK_PINNED';
};

export type TaskBoxData = {
  tasks: TaskData[];
  status: string;
  error: null | string;
};
