import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [creatingNewExpense, setCreatingNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setCreatingNewExpense(false);
  };

  const openForm = () => {
    setCreatingNewExpense(true);
  };

  const closeForm = () => {
    setCreatingNewExpense(false);
  };

  return (
    <div className="new-expense">
      {!creatingNewExpense && (
        <button onClick={openForm}>Add New Expense</button>
      )}
      {creatingNewExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCloseForm={closeForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
