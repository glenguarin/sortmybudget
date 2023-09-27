import { useRef } from "react";
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
    <div>
      <h2>Add New Expense</h2>
      <fetcher.Form>
        <div>
          <div>
            <label htmlFor="newExpense">Expense Name</label>
            <input
              type="text"
              name="newExpense"
              id="newExpense"
              placeholder="e.g., Coffee"
              ref={focusRef}
              required
            />
          </div>
          <div>
            <label htmlFor="newExpenseAmount">Amount</label>
            <input
              type="number"
              step="0.01"
              inputMode="decimal"
              name="newExpenseAmount"
              id="newExpenseAmount"
              placeholder="e.g., 3.50"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="newExpenseBudget">Budget Category</label>
          <select
            name="newExpenseBudget"
            id="newExpenseBudget"
            required
          ></select>
        </div>
        <input type="hidden" name="_action" value="createExpense" />
        <button type="submit">
          <span>Add Expense</span>
        </button>
      </fetcher.Form>
    </div>
  );
};

export default AddExpenseForm;
