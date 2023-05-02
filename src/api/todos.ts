import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export const postTodos = (userId: number, data: Todo) => {
  return client.post<Todo[]>(`/todos?userId=${userId}`, data);
};

export const patchTodos = (userId: number, data: Todo) => {
  return client.patch<Todo[]>(`/todos?userId=${userId}`, data);
};

export const deleteTodo = (id: number) => {
  return client.delete(`/todos/${id}`);
};