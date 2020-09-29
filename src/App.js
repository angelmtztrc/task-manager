import React from 'react';

function App() {
  return (
    <div className="w-full min-h-screen">
      <header className="bg-green-500 pt-12 pb-32">
        <div className="container mx-auto h-64 flex flex-col justify-center items-center">
          <h1 className="text-5xl text-white font-bold mb-3">Task Manager</h1>
          <div className="w-full flex justify-center items-center">
            <form className="w-2/5 relative">
              <input
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
        </div>
      </header>
      <div className="-m-24 container mx-auto">
        <div className="flex justify-between">
          <div className="w-full h-full p-8 bg-gray-200 rounded-md shadow-md">
            <h2 className="mb-5 text-3xl text-green-500 text-center font-bold">
              Todo
            </h2>
            <ul className="list-none">
              <li className="px-4 py-3 text-center bg-white rounded-md shadow">
                <p className="text-gray-600">Buy a Xbox Series X</p>
              </li>
            </ul>
          </div>
          <div className="w-full h-full p-8 bg-gray-200 rounded-md shadow-md mx-16">
            <h2 className="mb-5 text-3xl text-green-500 text-center font-bold">
              In Progress
            </h2>
            <ul className="list-none">
              <li className="px-4 py-3 text-center bg-white rounded-md shadow">
                <p className="text-gray-600">Build a ReactJS App</p>
              </li>
            </ul>
          </div>
          <div className="w-full h-full p-8 bg-gray-200 rounded-md shadow-md">
            <h2 className="mb-5 text-3xl text-green-500 text-center font-bold">
              Done
            </h2>
            <ul className="list-none">
              <li className="px-4 py-3 text-center border-2 border-green-300 bg-white rounded-md shadow">
                <p className="text-gray-600 line-through">
                  Buy a Xbox Game Pass Ultimate
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
