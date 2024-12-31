import { useState } from "react";

function IncomeExpenseForm() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [entryType, setEntryType] = useState("");

  return (
    <div>
      <h1>New Entry Page</h1>
      <form>
        <div>
          <label>Description:</label>
          <br />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Amount:</label>
          <br />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Entry Type:</label>
          <br />
          <select
            value={entryType}
            onChange={(e) => setEntryType(e.target.value)}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <br />
        <button>Add Entry</button>
      </form>
    </div>
  );
}

export default IncomeExpenseForm;
