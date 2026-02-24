import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../app/features/TaskSlice";
import { nanoid } from "nanoid";

function Create() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch  =useDispatch()

  const createTask = (data) => {
    data.id = nanoid(3)
    console.log("Data Fethched : ", data);

    dispatch(addTask(data))

  };


  return (
    <form
      onSubmit={handleSubmit(createTask)}
      className="bg-transparent text-gray-200 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded shadow-[0px_0px_10px_0px] shadow-black/10"
    >
      <label htmlFor="task" className="flex items-center gap-1">
        Add task
        {errors.task && <sup className="text-red-500">*</sup>}
      </label>

      <input
        {...register("task", {
          required: true,
        })}
        id="task"
        className={`w-full border mt-1 outline-none rounded py-2.5 px-4 
      ${errors.task ? "border-red-500" : "border-gray-500/30 focus:border-indigo-500"}`}
        type="text"
        placeholder="Add Your Task"
      />

      <button
        type="submit"
        className="w-full my-3 bg-gray-800 active:scale-95 transition py-2.5 rounded text-white"
      >
        Add task
      </button>
    </form>
  );
}

export default Create;
