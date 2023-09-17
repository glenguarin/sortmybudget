// rrd imports
import { Form } from "react-router-dom";

// library
import "bootstrap/dist/css/bootstrap.min.css";

// assets
import illustration from "../assets/illustration.jpg";

const Intro = () => {
  return (
    <div className="mt-5 d-flex align-items-center container">
      <div>
        <h1 className="display-2">
          Get a Grip of <span className="text-purple">Your Money</span>
        </h1>
        <p className="fs-4">
          Unlock financial freedom through personal budgeting, starting today!
        </p>

        <Form method="post">
          <input
            className="d-flex mb-3 form-control-lg w-75"
            type="text"
            name="userName"
            required
            placeholder="Enter your name"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button className="btn btn-dark btn-lg" type="submit">
            <span>Create Account</span>
          </button>
        </Form>
      </div>
      <img
        className="img-fluid"
        src={illustration}
        alt="people on finance"
        width={775}
      />
    </div>
  );
};

export default Intro;
