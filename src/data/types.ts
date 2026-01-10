export type ActionResponse<T> = {
  success: boolean | null;
  data?: T;
  message?: string;
};
