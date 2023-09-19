// rrd imports
import { Form, NavLink } from "react-router-dom";

// library
import "bootstrap/dist/css/bootstrap.min.css";
import { Trash } from "phosphor-react";

// assets
import logomark from "/public/favicon.svg";

const Nav = ({ userName }) => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        aria-label="Go to home"
        className="text-decoration-none text-dark fs-4"
      >
        <img src={logomark} alt="logo" height={45} />
        <span> SortMyBudget</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="/logout"
          onSubmit={(event) => {
            if (!confirm("Delete user and all data?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn-outline-danger btn-lg">
            <span>Delete User </span>
            <Trash className="pb-1" size={28} />
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
