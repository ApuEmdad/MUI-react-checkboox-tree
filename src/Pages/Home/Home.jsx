import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/test">Test</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/role">Roles</Link>
        </li>
        <li>
          <Link to="/role/permission/1">Role-1</Link>
        </li>
        <li>
          <Link to="/treeview">Tree</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
