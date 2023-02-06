import { Route, Routes } from "react-router-dom";
import { PrivateHeader } from "../Private/PrivateHeader";
import { PrivateHome } from "../Private/PrivateHome";
import { PublicHeader } from "../Public/PublicHeader";

export const Private = () => {
  return (
    <>
      <PrivateHeader />

      <Routes>
        <Route index path="/" element={<PrivateHome />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </>
  );
};
