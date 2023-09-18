import { Link, useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div>
      <h1>There is a problem.</h1>
      <p>{error.message || error.statusText}</p>
      <div>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <Link to="/">Go home</Link>
      </div>
    </div>
  );
};

export default Error;
