export const ADD_EXPENSE = "ADD_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";

import { Expense } from "./expenseTypes";

interface AddExpenseAction {
  type: typeof ADD_EXPENSE;
  payload: Expense;
}

interface RemoveExpenseAction {
  type: typeof REMOVE_EXPENSE;
  payload: {
    id: string;
  };
}

export type ExpenseActionType = AddExpenseAction | RemoveExpenseAction;
