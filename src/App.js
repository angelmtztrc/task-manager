import React, { useState } from 'react';

// Components
import Form from './components/Form';
import TasksContainer from './components/TasksContainer';

function App() {
  const [state, setState] = useState({
    TODO: {
      name: 'Todo',
      items: []
    },
    IN_PROGRESS: {
      name: 'In Progress',
      items: []
    },
    COMPLETED: {
      name: 'Done',
      items: []
    }
  });
  const [error, setError] = useState(null);

  return (
    <div className="w-full min-h-screen box-border relative">
      {error ? (
        <div className="absolute top-0 right-0 mt-10 mr-10 px-6 py-3 bg-red-500 rounded-md">
          <p className="text-lg text-white font-bold">{error}</p>
        </div>
      ) : null}
      <header className="bg-green-500 pt-12 pb-32">
        <div className="container mx-auto h-64 flex flex-col justify-center items-center">
          <h1 className="text-5xl text-white font-bold mb-3">Task Manager</h1>
          <Form state={state} setState={setState} setError={setError} />
        </div>
      </header>
      <div className="-m-24 container mx-auto px-8 md:px-16 lg:px-0">
        <TasksContainer state={state} setState={setState} />
      </div>
    </div>
  );
}

export default App;
