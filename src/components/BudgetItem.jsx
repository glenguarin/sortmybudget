import { calculateSpentByBudget } from "../helpers";

const BudgetItem = ({ budget, showDelete = false }) => {
  const { id, name, amount, color } = budget;
  const spent = calculateSpentByBudget(id);

  return (
    <div className="container-fuid rounded shadow p-4 w-50">
      <div>
        <h3>{name}</h3>
        <p>{amount} Budgeted</p>
      </div>
      <progress max={amount} value={spent}></progress>
    </div>
  );
};

export default BudgetItem;
