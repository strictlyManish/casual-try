import React from "react";
import Create from "./Pages/Create";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "./app/features/TaskSlice";

function App() {
  const data = useSelector((state) => state.task.value);
  const dispatch = useDispatch();

  const delHandler = (id) => {
    dispatch(removeTodo(id))
  };

  console.log(data)

  return (
    <div className="h-screen w-screen bg-gray-900 text-white px-5 py-5">
      <h1 className="bg-gray-700 w-fit px-5 py-2 rounded-full font-thin">
        Todos Creates
      </h1>

      <br />

      <hr />
      <br />

      <Create />

      <br />

      <hr />
      <br />

      {data.length > 0 ? data.map((obj) => {
        return (
          <li
            key={obj.id}
            className="px-5 mt-1 flex justify-between w-full bg-gray-600  rounded py-2 list-none"
          >
            <p>{obj.task}</p>

            
            <button className="bg-gray-800 cursor-pointer rounded-full px-5 py-2 active:scale-95 " onClick={() => delHandler(obj.id)}>Del</button>
          </li>
        );
      }):<p>Task not added yet</p>}
    </div>
  );
}

export default App;
