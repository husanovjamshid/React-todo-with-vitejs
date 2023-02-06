import "./private.scss";
import { Todo } from "../../Todo/Todo";
export const PrivateHome = () => {
  return (
    <main
      id="intro"
      className="bg-image"
      style={{
        backgroundImage:
          "url(https://mdbootstrap.com/img/new/fluid/city/018.jpg)",
        height: "100vh",
      }}
    >
      <div className="todos">
        <Todo />
      </div>
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }} />
    </main>
  );
};
