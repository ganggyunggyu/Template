import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

export type TodosType = string[];
export type TodoType = string;
export const getTodos = async () => {
  const response = await axios.get('/todos');
  return await response.data;
};
export const setTodo = async (todo: string) => {
  const result = await axios.post('/todo', todo);
  return await result.data;
};

const useTodoQuery = () => {
  const todos = useQuery<TodosType>({
    queryKey: ['todo'],
    queryFn: () => getTodos(),
  });
  return todos;
};
const useTodoMutaion = () => {
  const todo = useMutation<TodoType, Error, string>({
    mutationFn: async (todo: string) => {
      await new Promise((resolve) => {
        setTimeout(resolve, 5000);
      });
      return todo;
    },
    onSettled: () => console.log('데이터 업데이트'),
  });
  return todo;
};

export default useTodoQuery;
