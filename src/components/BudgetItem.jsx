// rrd inputs
import { Form, Link } from "react-router-dom";

// helper functions
import {
  calculateSpentByBudget,
  formatCurrency,
  formatPercentage,
} from "../helpers";

const BudgetItem = ({ budget, showDelete = false }) => {
  const { id, name, amount, color } = budget;
  const spent = calculateSpentByBudget(id);

  return (
    <div className="container-fuid rounded shadow p-4 w-50 mt-4">
      <div className="d-flex justify-content-between ">
        <h2 className="">{name}</h2>
        <h3>{formatCurrency(amount)} Budgeted</h3>
      </div>
      <progress max={amount} value={spent}>
        {formatPercentage(spent / amount)}
      </progress>
      <div className="d-flex justify-content-between">
        <small>{formatCurrency(spent)} spent</small>
        <small>{formatCurrency(amount - spent)} remaining</small>
      </div>
      {showDelete ? (
        <div>
          <Form
            method="post"
            action="delete"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Are you sure you want to permanently delete this budget?"
                )
              ) {
                event.preventDefault;
              }
            }}
          >
            <button type="submit">
              <span>Delete Budget</span>
            </button>
          </Form>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <Link className="btn btn-danger" to={`/budget/${id}`}>
            <span>View Details</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BudgetItem;
