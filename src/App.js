import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import TestComponent from "./Components/TestComponent/TestComponent";
import Home from "./Pages/Home/Home";
import Content from "./Pages/Content/Content";
import RecursiveTreeView from "./Components/TestComponent/RecursiveTreeView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="test" element={<TestComponent />} />
          <Route path="content" element={<Content />} />
          <Route path="treeview" element={<RecursiveTreeView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
