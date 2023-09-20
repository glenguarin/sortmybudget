// react imports
import { useRef } from "react";

// rrd imports
import { useFetcher } from "react-router-dom";

const AddBudgetForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  return (
    <div className="container-fluid rounded shadow p-4 w-50 m-0">
      <h2>Create budget</h2>
      <fetcher.Form method="post" ref={formRef}>
        <div>
          <label className="form-label fs-5" for="newBudget">
            Budget Name
          </label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g. Groceries"
            required
            ref={focusRef}
            className="form-control fs-5 mb-3"
          />
        </div>
        <div>
          <label className="form-label fs-5" for="newBudgetAmount">
            Amount
          </label>
          <input
            type="number"
            step="0.01"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="e.g., $350"
            required
            inputMode="decimal"
            className="form-control fs-5 mb-3"
          />
        </div>
        <input type="hidden" name="_action" value="createBudget" />
        <button type="submit" className="btn btn-dark">
          <span>Create budget</span>
        </button>
      </fetcher.Form>
    </div>
  );
};

export default AddBudgetForm;