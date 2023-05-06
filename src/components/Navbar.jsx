import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul className="flex text-white gap-6 p-4 bg-black">
        <li>
          <Link to="post-files">crear expediente</Link>
        </li>
        <li>
          <Link to="get-files">listar expediente</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
