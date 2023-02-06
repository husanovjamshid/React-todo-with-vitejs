import { toast } from "react-toastify";
import "./item.scss";
export const Item = ({ id, text, isComleted, todos, setTodos }) => {
  const handleEdit = (todoId) => {
    const newTodos = prompt("Write new todo: ", text);
    let findTodos = todos.find((todo) => todo.id === todoId);
    findTodos.text = newTodos;

    setTodos([...todos]);
    toast.warning("Todo o'zgartirildi!!!");
  };

  const handleDelete = (todoId) => {
    let findTodos = todos.filter((todo) => todo.id !== todoId);

    setTodos([...findTodos]);
    toast.error("Todo o'chirildi!!!");
  };

  const handleInput = (todoId) => {
    let findTodos = todos.find((todo) => todo.id == todoId);

    findTodos["isCompleted"] = !findTodos["isCompleted"];
    setTodos([...todos]);

    if (findTodos["isCompleted"]) {
      toast.info("Todo belgilandi!!!");
    }
  };

  return (
    <li className="list-group-item d-flex align-items-center">
      <input
        checked={isComleted}
        onChange={() => handleInput(id)}
        className="form-check-input"
        type="checkbox"
      />
      <span
        className={
          isComleted
            ? "fw-bold  ms-3 text-decoration-line-through text-success"
            : "fw-bold  ms-3"
        }
      >
        {text}
      </span>
      <i
        onClick={() => handleEdit(id, text)}
        className="fa-solid fa-pen-to-square text-warning ms-auto shadow"
      ></i>
      <i
        onClick={() => handleDelete(id)}
        className="fa-solid fa-trash text-danger ms-3 shadow"
      ></i>
    </li>
  );
};
