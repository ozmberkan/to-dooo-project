import React from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import { MdOutlinePlaylistRemove } from "react-icons/md";
import { nanoid } from "nanoid";
import toast, { Toaster } from "react-hot-toast";
import useMedia from "../hooks/useMedia";

export default function Form({
  setTodo,
  todo,
  todos,
  setTodos,
  setTest,
  setComplete,
}) {
  const ClickHandle = (e) => {
    e.preventDefault();
    if (todo === "") {
      toast.error("Boş bir to-dooo! giremezsin!" , {duration : 1500})
    } else {
      toast.success("To-dooo! oluşturdun!")
      setTodos([
        ...todos,
        {
          title: todo,
          id: nanoid(),
        },
      ]);
    }
    setTodo("");
  };

  const deleteFullTodo = () => {
    setTodos([]);
    setComplete([]);
    setTest([]);
  };

  const isMobile = useMedia(1024)

  if (isMobile) {
    return (
      <form  className="flex justify-between items-center mb-5 gap-x-4">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="border px-1 py-1 h-12 flex-1"
        placeholder="Yapılacaklar Ekle..."
      />
      <Toaster position="top-right" reverseOrder={false} />
        <div className="flex gap-x-2">
                <button
        onClick={ClickHandle}
        className="bg-[#34b934] p-2 rounded-full text-white"
      >
        <BiMessageSquareAdd size={25} />
      </button>
      <button
        type="button"
        onClick={deleteFullTodo}
        className="bg-red-500 text-white p-2 rounded-full"
      >
        <MdOutlinePlaylistRemove size={25} />
      </button>
    </div>
    </form>
    )
  }


  return (
    <form  className="flex gap-x-5">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="outline-none placeholder:text-black w-[492px] p-3 rounded-md border-[#141414]/20 border focus:ring-2 ring-gray-700/60 ring-offset-[1.5px] focus:shadow-xl transition-all duration-500"
        placeholder="Yapılacaklar Ekle..."
      />
      <Toaster position="top-right" reverseOrder={false} />
      <button
        onClick={ClickHandle}
        className="flex justify-center items-center hover:text-[#1b491d] p-3 rounded-full cursor-pointer font-semibold hover:bg-[#69e943b0] hover:ring-2 ring-offset-2 ring-[#34b934] transition-all duration-500"
      >
        <BiMessageSquareAdd size={25} />
      </button>
      <button
        type="button"
        onClick={deleteFullTodo}
        className="p-3 flex gap-x-1 justify-center items-start bg-red-600 text-white rounded-xl hover:ring-2 ring-red-700 ring-offset-2 transition-all duration-500"
      >
        <MdOutlinePlaylistRemove size={25} />
        Tümünü Sil
      </button>
    </form>
  );
}
