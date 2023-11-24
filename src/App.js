import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./Containers/Homepage";
import { Login } from "./Containers/Login";
import { Register } from "./Containers/Register";
import { NewPet } from "./Containers/NewPet";
import { ConfirmAdoption } from "./Containers/ConfirmAdoption";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/donatePet" element={<NewPet />}></Route>
          <Route path="/confirmAdoption" element={<ConfirmAdoption />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
