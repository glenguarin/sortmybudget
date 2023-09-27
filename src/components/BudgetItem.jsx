import { calculateSpentByBudget } from "../helpers";

const BudgetItem = ({ budget, showDelete = false }) => {
  const { id, name, amount, color } = budget;
  const spent = calculateSpentByBudget(id);

  return (
    <div>
      <div>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default BudgetItem;
