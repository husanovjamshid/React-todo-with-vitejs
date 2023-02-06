import { Route, Routes } from "react-router-dom";
import { PublicHeader } from "../Public/PublicHeader";
import { PublicHome } from "../Public/PublicHome";
import { Login } from "../Registration/Login/Login";
import { Register } from "../Registration/Register/Register";
// import 'bootstrap/dist/css.bootstrap.min.css'


export const Public = () => {
  return (
    <>
      <PublicHeader />

      <Routes>
        <Route index path="/" element={<PublicHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
