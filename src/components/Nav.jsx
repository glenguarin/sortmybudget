// rrd imports
import { Form, NavLink } from "react-router-dom";

// assets
import logomark from "/public/favicon.svg";

// library
import "bootstrap/dist/css/bootstrap.min.css";
import { Trash } from "phosphor-react";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <NavLink
          className="text-decoration-none text-dark fs-4"
          to="/"
          aria-label="Go to home"
        >
          <img fill="green" src={logomark} alt="logo" height={45} />
          <span> SortMyBudget</span>
        </NavLink>
        <Form>
          <button className="btn btn-outline-danger btn-lg" type="submit">
            <span>Delete User </span>
            <Trash className="pb-1" size={28} />
          </button>
        </Form>
      </div>
    </nav>
  );
};

export default Nav;
