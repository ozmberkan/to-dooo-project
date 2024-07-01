import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import Info from "../components/Info";
import useMedia from "../hooks/useMedia";

export default function Home() {
  const isMobile = useMedia(1024)
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [complete, setComplete] = useState([]);
  const [test, setTest] = useState([]);
  const [time, setTime] = useState(new Date());



  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
    setComplete(JSON.parse(localStorage.getItem("complete")));
    setTest(JSON.parse(localStorage.getItem("test")));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("complete", JSON.stringify(complete));
    localStorage.setItem("test", JSON.stringify(test));
  }, [todos, complete, test]);




  if (isMobile) {
    return (
      <div className="bg-white p-5 ">
        <div className="flex-1">
          <Form
            setTodo={setTodo}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            setTest={setTest}
            test={test}
            setComplete={setComplete}
            complete={complete}
          />
          <Info
            setTodo={setTodo}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            setTest={setTest}
            test={test}
            setComplete={setComplete}
            complete={complete}
          />
        </div>
    </div>
    )
  }



  return (
    <div className="bg-zinc-100 h-screen w-full ">
      <div className="p-6 flex justify-between flex-1 gap-x-5 bg ">
        <div className="flex-1">
          <Form
            setTodo={setTodo}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            setTest={setTest}
            test={test}
            setComplete={setComplete}
            complete={complete}
          />
          <Info
            setTodo={setTodo}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            setTest={setTest}
            test={test}
            setComplete={setComplete}
            complete={complete}
          />
        </div>
      </div>
    </div>
  );
}
