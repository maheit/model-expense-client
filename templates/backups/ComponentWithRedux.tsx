// import React from "react";

// import { RootState } from "./store/redux/store";
// import { AddExpense } from "./store/redux/actions/Actions";
// import { Expense, ExpenseState } from "./store/redux/types";
// import { ThunkDispatch } from "redux-thunk";
// import { AnyAction } from "redux";
// import { connect } from "react-redux";

// interface prps {
//   test: any;
//   expenses: Expense[];
//   addExpense: (expense: Expense) => any;
// }
// type Props = prps;

// interface OwnState {}

// class App extends React.Component<Props, OwnState> {
//   constructor(props: Props) {
//     super(props);
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <div className="main">Test</div>
//       </React.Fragment>
//     );
//   }
// }

// const mapStateToProps = (state: RootState, ownProps: any) => {
//   return {
//     expenses: state.expenses.expenses,
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
