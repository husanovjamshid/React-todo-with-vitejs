import { List } from "../components/List/List";
import { Item } from "../components/Item/Item";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export const Todo = () => {
  let inputValue = useRef();
  let [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios.post("http://localhost:8080/todos", {
      text: inputValue.current.value,
      isCompleted: false,
    });

    setTodos([
      ...todos,
      {
        text: inputValue.current.value,
        isCompleted: false,
      },
    ]);

    inputValue.current.value = "";
    toast.success("Todo qo'shildi!!!");
  };

  localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <div className="container ">
      <h1 className="display-4 mt-5 fw-bold text-center text-white">
        Todo App
      </h1>

      <form onSubmit={handleSubmit} className="my-4 mx-auto todo__form">
        <div className="input-group">
          <input
            required
            ref={inputValue}
            className="form-control"
            type="text"
            placeholder="Add todo"
          />
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
      <List>
        {todos.length ? (
          todos.map((todo) => {
            return (
              <Item
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
                id={todo.id}
                text={todo.text}
                isComleted={todo.isCompleted}
              />
            );
          })
        ) : (
          <h1 className="text-center text-white h2">Todo list bo'sh 😕</h1>
        )}
      </List>
      <div className="toasts">
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};
