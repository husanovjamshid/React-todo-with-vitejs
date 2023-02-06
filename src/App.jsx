import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.js";
import { Public } from "./components/pages/Public";
import { useContext } from "react";
import { authContext } from "./components/context/AuthContext";
import { Private } from "./components/pages/Private";
function App() {
  const { token } = useContext(authContext);
  return <div className="App ">{token ? <Private /> : <Public />}</div>;
}

export default App;
