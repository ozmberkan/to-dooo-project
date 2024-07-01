import React from "react";
import { MdDone } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { VscServerProcess } from "react-icons/vsc";
import { Tooltip } from "react-tooltip";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import useMedia from "../hooks/useMedia";
import {toast, Toaster} from "react-hot-toast";

export default function Info({
  todos,
  setTodos,
  setTest,
  test,
  setComplete,
  complete,
  time,
  setTime
}) {
  const [todoParent] = useAutoAnimate();
  const [completeParent] = useAutoAnimate();
  const [testParent] = useAutoAnimate();

  const isMobile = useMedia(1024)

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.success(`Seçilen to-dooo silindi`)
  };

  const deleteCompleteTodo = (id) => {
    setComplete(complete.filter((todo) => todo.id !== id));
    toast.success(`Seçilen to-dooo silindi`)
  };

  const deleteTestTodo = (id) => {
    setTest(test.filter((todo) => todo.id !== id));
    toast.success(`Seçilen to-dooo silindi`)
  };

  const testToCompleteTodo = (id) => {
    toast.success("Tamamlananlara aktarıldı.")
    const testTodo = test.find((todo) => todo.id === id);
    if (testTodo) {
      setComplete([...complete, testTodo]);
    }
    setTest(test.filter((todo) => todo.id !== id));
  };

  const testTodo = (id) => {
    toast.success("Test Aşamasına aktarıldı.")
    setTodos(todos.filter((todo) => todo.id !== id));
    setTest([...test, todos.find((todo) => todo.id === id)]);
  };

  const completeTodo = (id) => {
    toast.success("Tamamlananlara aktarıldı.")
    setTodos(todos.filter((todo) => todo.id !== id));
    setComplete([...complete, todos.find((todo) => todo.id === id)]);
  };
  
  


  

  if (isMobile) {
    return (
      <div className="flex flex-col gap-y-6">
      <div
  className="border border-[#141414]/10 p-4 rounded-md flex flex-col gap-y-5 "
  ref={todoParent}
  
>
  <h1 className="text-[18px] font-bold font-poppins text-[#141414] w-full py-2 px-2 rounded-md">
    Yapılacaklar
  </h1>
  {todos &&
    todos.map((todo) => (
      <div
        className="flex  justify-between items-center border border-[#404040]/20 ring-2 ring-inset ring-black/5 rounded-md mb-2 py-6 px-5"
        key={todo.id}
      >
        <p className=" w-[55%] font-poppins font-normal text-ellipsis break-words">
          {todo.title}
        </p>
        <div className="flex gap-x-2 justify-center items-center w-[40%]">
          <button
            className="p-2 bg-[#f8d2d2] rounded-full hover:bg-red-300 transition-all duration-500 hover:ring-2 ring-offset-2 ring-[#ff3939] delete-todo-tooltip"
            onClick={() => deleteTodo(todo.id)}
          >
            <TiDeleteOutline size={22} className="text-[#ff3939]" />
            <Tooltip anchorSelect=".delete-todo-tooltip" place="top">
              Sil
            </Tooltip>
          </button>
          <button
            className="p-2 bg-[#6ae943] rounded-full hover:bg-[#91ff70] transition-all duration-500 hover:ring-2 ring-offset-2 ring-green-500 shadow-green-700 complete-todo-tooltip"
            onClick={() => completeTodo(todo.id)}
          >
            <MdDone size={22} className="text-[#114411]" />
            <Tooltip anchorSelect=".complete-todo-tooltip" place="top">
              Tamamlandı
            </Tooltip>
          </button>
          <button
            className="p-2 bg-[#3a3838] rounded-full hover:bg-[#7a7676] hover:ring-2 ring-offset-2 ring-zinc-700 transition-all duration-500 test-todo-tooltip"
            onClick={() => testTodo(todo.id)}
          >
            <VscServerProcess size={22} className="text-white" />
            <Tooltip anchorSelect=".test-todo-tooltip" place="top">
              Test
            </Tooltip>
          </button>
        </div>
      </div>
    ))}
</div>



      <div
        className="border border-[#141414]/10 p-4 rounded-md flex flex-col gap-y-5 overflow-y-auto"
        ref={completeParent}
      >
         <h1 className="text-[18px] font-bold font-poppins text-[#141414] w-full py-2 px-2 rounded-md">
    Tamamlananlar
        </h1>
        {complete &&
          complete.map((complete) => (
            <div
              className="flex justify-between items-center border border-[#404040]/20 ring-2 ring-inset ring-black/5 rounded-md mb-2 py-6 px-5"
              key={complete.id}
            >
              <p className=" w-[55%] font-poppins font-normal text-ellipsis break-words">
              {complete.title}
              </p>
              <button
                className="p-2 bg-[#f8d2d2] rounded-full hover:bg-red-300 transition-all duration-500 hover:ring-2 ring-offset-2 ring-[#ff3939]"
                onClick={() => deleteCompleteTodo(complete.id)}
              >
                <TiDeleteOutline size={22} className="text-[#ff3939]" />

              </button>
            </div>
          ))}
      </div>
      <div
        className="border border-[#141414]/10 p-4 rounded-md flex flex-col gap-y-5 overflow-y-auto"
        ref={testParent}
      >
        <h1 className="text-[18px] font-bold font-poppins text-[#141414] w-full py-2 px-2 rounded-md">
          Test Aşamasında
        </h1>
        {test &&
          test.map((testItem) => (
            <div
              className="flex justify-between items-center border border-[#404040]/20 ring-2 ring-inset ring-black/5 rounded-md mb-2 py-6 px-5"
              key={testItem.id}
            >
              <span className="font-poppins font-medium w-full mr-5 break-words">
                {testItem.title}
              </span>
              <div className="flex gap-x-2">
                <button
                  className="p-2 bg-[#6ae943] rounded-full hover:bg-[#91ff70] transition-all duration-500 hover:ring-2 ring-offset-2 ring-green-500 shadow-green-700 complete-test-tooltip"
                  onClick={() => testToCompleteTodo(testItem.id)}
                >
                  <MdDone size={22} />
                  <Tooltip anchorSelect=".complete-test-tooltip" place="top">
                    Tamamlandı
                  </Tooltip>
                </button>
                <button
                  className="p-2 bg-[#f8d2d2] rounded-full hover:bg-red-300 transition-all duration-500 hover:ring-2 ring-offset-2 ring-[#ff3939] delete-test-tooltip"
                  onClick={() => deleteTestTodo(testItem.id)}
                >
                  <TiDeleteOutline size={22} className="text-[#ff3939]" />
                  <Tooltip anchorSelect=".delete-test-tooltip" place="top">
                    Sil
                  </Tooltip>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
    )
  }










  return (
    <div className="grid grid-cols-3 gap-10 mt-8">
      <div
  className="border border-[#141414]/10 p-4 max-h-[700px] rounded-md flex flex-col gap-y-5 overflow-auto"
  ref={todoParent}
  
>
  <h1 className="text-[18px] font-bold font-poppins text-[#141414] w-full py-2 px-2 rounded-md">
    Yapılacaklar
  </h1>
  <hr />
        <div className="w-full flex flex-col gap-y-3 overflow-auto px-5">
          {todos &&
    todos.map((todo) => (
      <div
        className="flex relative mt-2 justify-between items-center border border-[#404040]/20 ring-2 ring-inset ring-black/5 rounded-md mb-2 py-6 px-5"
        key={todo.id}
      >
        <p className=" w-[55%] font-poppins font-normal text-ellipsis break-words">
          {todo.title}
        </p>
        <div className="flex gap-x-2 justify-center items-center w-[40%]">
          <button
            className="p-2 bg-[#f8d2d2] rounded-full hover:bg-red-300 transition-all duration-500 hover:ring-2 ring-offset-2 ring-[#ff3939] delete-todo-tooltip"
            onClick={() => deleteTodo(todo.id)}
          >
            <TiDeleteOutline size={22} className="text-[#ff3939]" />
            <Tooltip anchorSelect=".delete-todo-tooltip" place="top">
              Sil
            </Tooltip>
          </button>
          <button
            className="p-2 bg-[#6ae943] rounded-full hover:bg-[#91ff70] transition-all duration-500 hover:ring-2 ring-offset-2 ring-green-500 shadow-green-700 complete-todo-tooltip"
            onClick={() => completeTodo(todo.id)}
          >
            <MdDone size={22} className="text-[#114411]" />
            <Tooltip anchorSelect=".complete-todo-tooltip" place="top">
              Tamamlandı
            </Tooltip>
          </button>
          <button
            className="p-2 bg-[#3a3838] rounded-full hover:bg-[#7a7676] hover:ring-2 ring-offset-2 ring-zinc-700 transition-all duration-500 test-todo-tooltip"
            onClick={() => testTodo(todo.id)}
          >
            <VscServerProcess size={22} className="text-white" />
            <Tooltip anchorSelect=".test-todo-tooltip" place="top">
              Test
            </Tooltip>
          </button>
        </div>
      </div>
    ))}
  </div>
</div>



      <div
        className="border border-[#141414]/10 p-4 rounded-md max-h-[700px] flex flex-col gap-y-5 overflow-y-auto"
        ref={completeParent}
      >
         <h1 className="text-[18px] font-bold font-poppins  text-[#141414] w-full py-2 px-2 rounded-md">
    Tamamlananlar
        </h1>
        <hr />
        <div className="w-full flex flex-col gap-y-3 overflow-auto px-5">
        {complete &&
          complete.map((complete) => (
            <div
              className="flex justify-between items-center border border-[#404040]/20 ring-2 ring-inset ring-black/5 rounded-md mb-2 py-6 px-5"
              key={complete.id}
            >
              <p className=" w-[55%] font-poppins font-normal text-ellipsis break-words">
              {complete.title}
              </p>
              <button
                className="p-2 bg-[#f8d2d2] rounded-full hover:bg-red-300 transition-all duration-500 hover:ring-2 ring-offset-2 ring-[#ff3939]"
                onClick={() => deleteCompleteTodo(complete.id)}
              >
                <TiDeleteOutline size={22} className="text-[#ff3939]" />

              </button>
            </div>
          ))}

        </div>
      </div>
      <div
        className="border border-[#141414]/10 max-h-[700px] p-4 rounded-md flex flex-col gap-y-5 overflow-y-auto"
        ref={testParent}
      >
        <h1 className="text-[18px] font-bold font-poppins text-[#141414] w-full py-2 px-2 rounded-md">
          Test Aşamasında
        </h1>
        <hr />
        <div className="w-full flex flex-col gap-y-3 overflow-auto px-5">
          {test &&
          test.map((testItem) => (
            <div
              className="flex justify-between items-center border border-[#404040]/20 ring-2 ring-inset ring-black/5 rounded-md mb-2 py-6 px-5"
              key={testItem.id}
            >
              <span className="font-poppins font-medium w-full mr-5 break-words">
                {testItem.title}
              </span>
              <div className="flex gap-x-2">
                <button
                  className="p-2 bg-[#6ae943] rounded-full hover:bg-[#91ff70] transition-all duration-500 hover:ring-2 ring-offset-2 ring-green-500 shadow-green-700 complete-test-tooltip"
                  onClick={() => testToCompleteTodo(testItem.id)}
                >
                  <MdDone size={22} />
                  <Tooltip anchorSelect=".complete-test-tooltip" place="top">
                    Tamamlandı
                  </Tooltip>
                </button>
                <button
                  className="p-2 bg-[#f8d2d2] rounded-full hover:bg-red-300 transition-all duration-500 hover:ring-2 ring-offset-2 ring-[#ff3939] delete-test-tooltip"
                  onClick={() => deleteTestTodo(testItem.id)}
                >
                  <TiDeleteOutline size={22} className="text-[#ff3939]" />
                  <Tooltip anchorSelect=".delete-test-tooltip" place="top">
                    Sil
                  </Tooltip>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
