// rrd imports
import { Form, NavLink } from "react-router-dom";

// assets
import logomark from "/public/favicon.svg";

// library
import "bootstrap/dist/css/bootstrap.min.css";

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
            Delete User
          </button>
        </Form>
      </div>
    </nav>
  );
};

export default Nav;
