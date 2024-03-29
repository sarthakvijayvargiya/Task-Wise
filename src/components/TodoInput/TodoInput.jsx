import { useState } from "react";
import { useTodo } from "../../context/TodoContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoInput = () => {
  const [todo, setTodo] = useState("");

  const { saveTodo } = useTodo();

  const notifyToast = () => {
    toast.error("Item Cannot be Empty");
  };

  const handleClick = (e) => {
    e.preventDefault();
    todo.length ? saveTodo(todo) : notifyToast();
    setTodo("");
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="mb-4 shadow-md z-10 w-full md:w-[450px]">
      <form onSubmit={handleClick} className="flex justify-between">
        <input
          type="text"
          id="inputarea"
          className="bg-[#AD9CC2] p-2 pl-4 pr-4 rounded-l-lg w-full outline-none text-white placeholder:text-white"
          placeholder="Add Item..."
          value={todo}
          onChange={(e) => handleChange(e)}
        />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <button
          className="bg-green-700 text-[#55D6BE]  p-2 rounded-r-md hover:bg-[#55D6BE] hover:text-green-700 transition-all duration-200"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
