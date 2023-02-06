import axios from "axios";
import { useContext, useRef } from "react";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
export const Register = () => {
  let { setToken } = useContext(authContext);
  let nameRef = useRef();
  let lastRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();
  let navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post(`http://localhost:8080/register`, {
        firstname: nameRef.current.value,
        lastname: lastRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((data) => {
        if (data.status === 201) {
          setToken(data.data.accessToken);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

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
      <div className="container">
        <form
          onSubmit={handleSubmit}
          className="shadow register shadow-lg rounded-3 pt-3 p-5"
        >
          <h2 className="text-center mb-3">Register</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail11" className="form-label">
              First name
            </label>
            <input
              ref={nameRef}
              type="text"
              className="form-control"
              id="exampleInputEmail11"
              aria-describedby="emailHelp"
            />
            <label htmlFor="exampleInputEmail31" className="form-label">
              Last name
            </label>
            <input
              ref={lastRef}
              type="text"
              className="form-control"
              id="exampleInputEmail31"
              aria-describedby="emailHelp"
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              ref={emailRef}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      {/* <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }} /> */}
    </main>
  );
};
