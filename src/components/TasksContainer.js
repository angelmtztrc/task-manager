import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const TasksContainer = ({ state, setState }) => {
  const handleDragEnd = data => {
    console.log(data);
    const { destination, source } = data;
    console.log('from', source);
    console.log('to', destination);

    // Prevent to drop in no box
    if (!destination) return;

    // Prevent to drop in same box
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
                          className="mb-2 px-4 py-3 text-center bg-white rounded-md shadow"
                        >
                          <p className="text-gray-600">{task.description}</p>
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
