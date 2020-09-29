import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const TasksContainer = ({ state, setState }) => {
  // Move task to another column
  const handleDragEnd = data => {
    const { destination, source } = data;

    // Prevent to drop in no column
    if (!destination) return;

    // Prevent to drop in same column
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    )
      return;

    // Copy of the task
    const taskCopy = {
      ...state[source.droppableId].items[source.index]
    };

    // Move to another column
    setState(object => {
      object = { ...object };

      // Remove from previous column
      object[source.droppableId].items.splice(source.index, 1);

      // Add to the new column
      object[destination.droppableId].items.splice(
        destination.index,
        0,
        taskCopy
      );
      return object;
    });
  };

  // Delete a task
  const handleRemove = (id, column) => {
    setState({
      ...state,
      [column]: {
        ...state[column],
        items: [...state[column].items.filter(task => task.id !== id)]
      }
    });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex flex-col lg:flex-row justify-between">
        {Object.entries(state).map(([columnName, column], index) => (
          <div
            className="column w-full h-full p-8 bg-gray-200 rounded-md shadow-md mb-10 lg:mb-0"
            key={columnName}
          >
            <h2 className="mb-5 text-3xl text-green-500 text-center font-bold">
              {column.name}
            </h2>
            <Droppable droppableId={columnName}>
              {provided => (
                <ul
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="list-none"
                >
                  {column.items.map((task, index) => (
                    <Draggable
                      key={task.id}
                      index={index}
                      draggableId={task.id}
                    >
                      {provided => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="mb-2 px-4 py-3 bg-white rounded-md shadow flex justify-between items-center"
                        >
                          <p className="text-gray-600">{task.description}</p>
                          <button
                            onClick={() => handleRemove(task.id, columnName)}
                          >
                            <svg
                              className="w-6 h-6 text-red-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              ></path>
                            </svg>
                          </button>
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

TasksContainer.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired
};

export default TasksContainer;
