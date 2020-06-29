import { Expense, ExpenseState } from "../types/expenseTypes";
import {
  ExpenseActionType,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
} from "../types/expenseActionsType";

const initialState: ExpenseState = {
  expenses: [
    {
      id: "1",
      type: "income",
      amount: 200,
      date: "",
      time: "",
      desc: "train ticket cancel",
    },
    {
      id: "1",
      type: "expense",
      amount: 200,
      date: "",
      time: "",
      desc: "train ticket booked",
    },
  ],
};

const ExpenseReducer = (
  state: ExpenseState = initialState,
  action: ExpenseActionType
): ExpenseState => {
  switch (action.type) {
    case ADD_EXPENSE: {
      return {
        expenses: [...state.expenses, action.payload],
      };
    }
    default:
      return state;
  }
};

export default ExpenseReducer;
