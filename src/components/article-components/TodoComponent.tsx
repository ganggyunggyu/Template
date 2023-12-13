import useTodoQuery from '../../Queries/useTodoQuery';

// interface TodoComponentProps {}

const TodoComponent = () => {
  const todo = useTodoQuery();

  return <div>{todo.data?.map((el, i) => <div key={i}>{el}</div>)}</div>;
};

export default TodoComponent;
