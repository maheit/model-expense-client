import { Expense } from "../types/expenseTypes";
import {
  ADD_EXPENSE,
  ExpenseActionType,
  REMOVE_EXPENSE,
} from "../types/expenseActionsType";
export function AddExpense(newExpense: Expense): ExpenseActionType {
  return {
    type: ADD_EXPENSE,
    payload: newExpense,
  };
}

export function RemoveExpense(id: string): ExpenseActionType {
  return {
    type: REMOVE_EXPENSE,
    payload: { id },
  };
}
