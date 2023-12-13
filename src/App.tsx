import React from 'react';
import './App.css';
import TodoComponent from './components/article-components/TodoComponent';
import Button from './components/atom-components/Button';

const App = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col'>
      <div className=' flex items-center justify-center bg-red-300 p-3'>할일목록</div>
      <React.Suspense fallback={<div>loading</div>}>
        <TodoComponent />
      </React.Suspense>
      <Button label='버튼'></Button>
    </div>
  );
};

export default App;
