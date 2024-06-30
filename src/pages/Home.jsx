import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import Info from "../components/Info";
import Navbar from "../components/Navbar";

export default function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [complete, setComplete] = useState([]);
  const [test, setTest] = useState([]);

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

  return (
    <div className="bg-zinc-100 h-screen w-full ">
      <div className="p-6 flex justify-between flex-1 gap-x-5 bg ">
        <Navbar />
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
