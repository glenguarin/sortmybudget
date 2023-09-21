// rrd imports
import { useLoaderData } from "react-router-dom";

// Library imports
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";

// helper functions
import { fetchData, waait, createBudget } from "../helpers";

//loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
}

//action
export async function dashboardAction({ request }) {
  await waait();

  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // new user submission
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`);
    } catch (e) {
      throw new Error("There was a problem creating your account.");
    }
  }

  if (_action === "createBudget") {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success("Budget created!");
    } catch (e) {
      throw new Error("There was a problem creating your budget.");
    }
  }
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();

  return (
    <>
      {userName ? (
        <div>
          <h1 className="h-100 display-2 py-4">
            Welcome back, <span className="text-purple"> {userName}</span>
          </h1>
          <div>
            {budgets && budgets.length > 0 ? (
              <div>
                <div>
                  <AddBudgetForm />
                </div>
                <h2>Existing Budgets</h2>
                <div>
                  {budgets.map((budget) => (
                    <BudgetItem key={budget.id} budget={budget} />
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <p className="fs-4">Want to unlock financial freedom?</p>
                <p className="fs-4">Start by crafting a budget today!</p>
                <AddBudgetForm />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;
