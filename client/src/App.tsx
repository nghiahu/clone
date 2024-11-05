import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import UserLogin from "./auth/userLogin/UserLogin";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/user-login" element={<UserLogin/>}></Route>
      </Routes>
    </>
  )
}
