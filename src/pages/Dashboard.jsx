// rrd imports
import { useLoaderData } from "react-router-dom";

// Library imports
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Intro from "../components/Intro";

// helper functions
import { fetchData } from "../helpers";
import AddBudgetForm from "../components/AddBudgetForm";

//loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Dashboard = () => {
  const { userName } = useLoaderData();

  return (
    <>
      {userName ? (
        <div>
          <h1 className="h-100 display-2 py-4 align-content-start">
            Welcome back, <span className="text-purple"> {userName}</span>
          </h1>
          <div>
            <p className="fs-4">Want to unlock financial freedom?</p>
            <p className="fs-4">Start by crafting a budget today!</p>
            <AddBudgetForm />
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;
