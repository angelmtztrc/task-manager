import React from 'react';
import PropTypes from 'prop-types';

const TasksContainer = ({ tasks }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
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
        className="w-full h-full p-8 bg-gray-200 rounded-md shadow-md my-16 lg:my-0 mx-0 lg:mx-16"
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
                <p className="text-gray-600 line-through">{task.description}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

TasksContainer.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default TasksContainer;
