// rrd imports
import { Link, useFetcher } from "react-router-dom";

// library
import { Trash } from "phosphor-react";

// helper imports
import {
  formatCurrency,
  formatDateToLocaleString,
  getAllMatchingItems,
} from "../helpers";

const ExpenseItem = ({ expense, showBudget }) => {
  const fetcher = useFetcher();

  const budget = getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: expense.budgetId,
  })[0];

  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formatDateToLocaleString(expense.createdAt)}</td>
      {showBudget && (
        <td>
          <Link className="btn btn-danger" to={`/budget/${budget.id}`}>
            {budget.name}
          </Link>
        </td>
      )}
      <td>
        <fetcher.Form method="post">
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="expenseId" value={expense.id} />
          <button
            className="btn btn-outline-danger"
            type="submit"
            aria-label={`Delete ${expense.name} expense`}
          >
            <Trash className="pb-1" size={28} />
          </button>
        </fetcher.Form>
      </td>
    </>
  );
};

export default ExpenseItem;
