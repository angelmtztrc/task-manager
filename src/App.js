import React, { useState } from 'react';

// Components
import Form from './components/Form';

function App() {
  const [tasks, setTasks] = useState([]);
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
          <Form tasks={tasks} setTasks={setTasks} setError={setError} />
        </div>
      </header>
      <div className="-m-24 container mx-auto">
        <div className="flex justify-between">
          <div
            style={{ minHeight: '177px' }}
            className="w-full h-full p-8 bg-gray-200 rounded-md shadow-md"
          >
            <h2 className="mb-5 text-3xl text-green-500 text-center font-bold">
              Todo
            </h2>
            <ul className="list-none">
              {tasks
                .filter(task => task.status === 'PENDING')
                .map(task => (
                  <li
                    key={task.id}
                    className="mb-2 px-4 py-3 text-center bg-white rounded-md shadow"
                  >
                    <p className="text-gray-600">{task.description}</p>
                  </li>
                ))}
            </ul>
          </div>
          <div
            style={{ minHeight: '177px' }}
            className="w-full h-full p-8 bg-gray-200 rounded-md shadow-md mx-16"
          >
            <h2 className="mb-5 text-3xl text-green-500 text-center font-bold">
              In Progress
            </h2>
            <ul className="list-none">
              {tasks
                .filter(task => task.status === 'IN_PROGRESS')
                .map(task => (
                  <li
                    key={task.id}
                    className="mb-2 px-4 py-3 text-center bg-white rounded-md shadow"
                  >
                    <p className="text-gray-600">{task.description}</p>
                  </li>
                ))}
            </ul>
          </div>
          <div
            style={{ minHeight: '177px' }}
            className="w-full h-full p-8 bg-gray-200 rounded-md shadow-md"
          >
            <h2 className="mb-5 text-3xl text-green-500 text-center font-bold">
              Done
            </h2>
            <ul className="list-none">
              {tasks
                .filter(task => task.status === 'COMPLETED')
                .map(task => (
                  <li
                    key={task.id}
                    className="mb-2 px-4 py-3 text-center border-2 border-green-300 bg-white rounded-md shadow"
                  >
                    <p className="text-gray-600 line-through">
                      {task.description}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
