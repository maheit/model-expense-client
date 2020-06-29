import React from "react";

import { RootState } from "./store/redux/store";
import { AddExpense } from "./store/redux/actions/ExpenseActions";
import { Expense, ExpenseState } from "./store/redux/types/expenseTypes";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { connect } from "react-redux";

import { PlainLayout } from "components/Layouts/Plain";

import RootPath from "./routers/RootPath";

interface Props {
  test: any;
  // expenses: Expense[];
  // loggedIn: boolean;
  // addExpense: (expense: Expense) => any;
}

interface OwnState {}

class App extends React.Component<Props, OwnState> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <PlainLayout>
        <RootPath />
      </PlainLayout>
    );
  }
}

// const mapStateToProps = (state: RootState, ownProps: any) => {
//   return {
//     expenses: state.expenses.expenses,
//     loggedIn: state.auth.loggedIn,
//   };
// };

// const mapDispatchToProps = (
//   dispatch: ThunkDispatch<{}, {}, AnyAction>,
//   props: any
// ) => {
//   return {
//     addExpense: (expense: Expense) => {
//       dispatch(AddExpense(expense));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
