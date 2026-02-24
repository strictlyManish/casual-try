import React from "react";
import Create from "./Pages/Create";
import { useSelector } from "react-redux";

function App() {


 
   const data = useSelector((state)=> state.task.value);


  return (
    <div className="h-screen w-screen bg-gray-900 text-white px-5 py-5">
      <h1 className="bg-gray-700 w-fit px-5 py-2 rounded-full font-thin">
        Todos Creates
      </h1>

      <br />

      <hr />
      <br />


        <Create/>

        <br />


      <hr />
      <br />

        {data.map((obj)=>{
          return <li key={obj.id} className="px-5  bg-gray-600 w-fit rounded py-2 list-none">
            {obj.task}
          </li>
        })}



    </div>
  );
}

export default App;
