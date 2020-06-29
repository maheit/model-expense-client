export interface Expense {
  id: string;
  type: string;
  amount: number;
  date: string;
  time: string;
  desc: string;
}

export interface ExpenseState {
  expenses: Expense[];
}
