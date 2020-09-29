import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const Form = ({ state, setState, setError }) => {
  const [task, setTask] = useState({
    description: ''
  });

  const handleChange = e => {
    setTask({
      description: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { description } = task;
    if (description.trim() === '' || description.trim() === null) {
      setError('Name of the Task is required');
      setTimeout(() => {
        setError(null);
      }, 2000);
      return;
    }

    // Save in the App state
    setState({
      ...state,
      ['TODO']: {
        ...state['TODO'],
        items: [
          ...state['TODO'].items,
          {
            description,
            id: v4()
          }
        ]
      }
    });

    // Clear form
    setTask({
      description: ''
    });
  };

  return (
    <div className="w-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-4/5 md:w-3/5 lg:w-2/5 relative"
      >
        <input
          value={task.description}
          onChange={handleChange}
          placeholder="Name of the task"
          className="px-6 py-3 pr-12 rounded-md w-full appearance-none focus:outline-none"
        />
        <button className="absolute top-0 right-0 bg-green-500 hover:bg-green-600 py-2 px-4 mt-1 mr-2 rounded-md transition-colors ease-in duration-300">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired
};

export default Form;
