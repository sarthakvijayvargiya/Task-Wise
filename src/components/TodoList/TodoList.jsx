import { useTodo } from "../../context/TodoContext";
import deleteImg from "../../assets/delete.svg";
import save from "../../assets/save.svg";
import edit from "../../assets/edit.svg";
import { useState } from "react";
const TodoList = ({ todoItem }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todoItem.todoContent);
  const [todoCom, setTodoCom] = useState(todoItem.completed);
  const {  updateTodo, deleteTodo, completeTodo } = useTodo();

  const handleUpdate = () => {
    updateTodo(todoItem.id, todoMsg);
    setIsTodoEditable(!isTodoEditable);
  };

  const handleEdit = () => {
    setIsTodoEditable(!isTodoEditable);
  };

  const handleDelete = () => {
    deleteTodo(todoItem.id);
  };

const handleComplete=()=>{
  setTodoCom(!todoCom)
  completeTodo(todoItem.id)
}
  return (
    <>
      <div
        className={`p-2 pl-3  
          flex flex-row rounded-lg outline-none text-white text-xl mb-3
          ${todoCom ? `bg-green-800 line-through` : `bg-[#FC6471]`}
          `}
      >
        <span className="pr-3 w-full flex flex-row justify-center items-center">
          <input
            className="outline-none border-none size-4 mr-3 accent-black"
            type="checkbox"
            id="checkbox"
            onClick={handleComplete}
          />
          <input
            type="text"
            id="inputarea"
            className={`w-full outline-none
            ${todoCom ? `bg-green-800 line-through` : `bg-[#FC6471]`}
            ${
              isTodoEditable
                ? `border outline-1 rounded-lg pl-4`
                : `border-none`
            }`}
            readOnly={!isTodoEditable}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
          />
        </span>
        <span className="flex flex-row">
          {!todoCom&&
          <button
          type="button"
          onClick={isTodoEditable ? handleUpdate : handleEdit}
          >
            {isTodoEditable ? (
              <img src={save} alt="Save" height={25} width={25} />
              ) : (
                <img src={edit} alt="Edit" height={25} width={25} />
                )}
          </button>
            }
          <button type="button" onClick={handleDelete}>
            <img src={deleteImg} alt="Delete" height={25} width={25} />
          </button>
        </span>
      </div>
    </>
  );
};

export default TodoList;

/* ${todoCom ? `bg-green-800 line-through` : `bg-[#FC6471]`}
${isTodoEditable ?  outline-1 rounded-lg pl-4` : `border-none`}`*/
