// react imports
import { useEffect, useRef } from "react";

// rrd imports
import { useFetcher } from "react-router-dom";

const AddExpenseForm = ({ budgets }) => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      //clear form
      formRef.current.reset();

      // reset focus
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="container-fluid rounded shadow p-4 w-50 ms-5">
      <h2>
        Add New{" "}
        <span>
          {budgets.length === 1 && `${budgets.map((budg) => budg.name)}`}
        </span>{" "}
        Expense
      </h2>
      <fetcher.Form method="post" ref={formRef}>
        <div className="d-flex">
          <div>
            <label className="form-label fs-5" htmlFor="newExpense">
              Expense Name
            </label>
            <input
              type="text"
              name="newExpense"
              id="newExpense"
              placeholder="e.g., Coffee"
              ref={focusRef}
              required
              className="form-control fs-5 mb-3"
            />
          </div>
          <div className="mx-4">
            <label className="form-label fs-5" htmlFor="newExpenseAmount">
              Amount
            </label>
            <input
              type="number"
              step="0.01"
              inputMode="decimal"
              name="newExpenseAmount"
              id="newExpenseAmount"
              placeholder="e.g., 3.50"
              required
              className="form-control fs-5 mb-3"
            />
          </div>
        </div>
        <div hidden={budgets.length === 1}>
          <label className="form-label fs-5" htmlFor="newExpenseBudget">
            Budget Category
          </label>
          <select
            className="form-control fs-5 mb-3"
            name="newExpenseBudget"
            id="newExpenseBudget"
            required
          >
            {budgets
              .sort((a, b) => a.createdAt - b.createdAt)
              .map((budget) => {
                return (
                  <option key={budget.id} value={budget.id}>
                    {budget.name}
                  </option>
                );
              })}
          </select>
        </div>
        <input type="hidden" name="_action" value="createExpense" />
        <button type="submit" className="btn btn-dark" disabled={isSubmitting}>
          {isSubmitting ? (
            <span>Creating budget</span>
          ) : (
            <>
              <span>Add Expense</span>
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
};

export default AddExpenseForm;
