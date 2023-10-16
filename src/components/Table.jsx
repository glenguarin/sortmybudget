// component import
import ExpenseItem from "./ExpenseItem";

const Table = ({ expenses, showBudget = true }) => {
  return (
    <div>
      <table className="table mx-auto text-center">
        <thead>
          <tr className="fs-4">
            {["Name", "Amount", "Date", showBudget ? "Budget" : "", ""].map(
              (i, index) => (
                <th key={index}>{i}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <ExpenseItem expense={expense} showBudget={showBudget} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
