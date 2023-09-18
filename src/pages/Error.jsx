import { Link, useNavigate, useRouteError } from "react-router-dom";

// library imports
import { ArrowUUpLeft, House } from "phosphor-react";
import "bootstrap/dist/css/bootstrap.min.css";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <h1 className="display-2 mt-5">There is a problem.</h1>
      <p className="fs-4 m-3">{error.message || error.statusText}</p>
      <div>
        <button
          className="btn btn-dark btn-lg m-2"
          onClick={() => navigate(-1)}
        >
          <ArrowUUpLeft className="pb-1" size={28} />
          <span> Go Back</span>
        </button>
        <Link className="btn btn-dark btn-lg m-2" to="/">
          <House className="pb-1" size={28} />
          <span> Go home</span>
        </Link>
      </div>
    </div>
  );
};

export default Error;
