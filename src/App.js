import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import TestComponent from "./Components/TestComponent/TestComponent";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import EditMenuPermission from "./Pages/EditMenuPermission/EditMenuPermission";
import Roles from "./Pages/Roles/Roles";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="test" element={<TestComponent />} />
          <Route path="menu" element={<Menu />} />
          <Route path="role" element={<Roles />} />
          <Route path="role/permission/:id" element={<EditMenuPermission />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;