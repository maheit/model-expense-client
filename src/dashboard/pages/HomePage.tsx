import React from "react";

import { RootState } from "../store/redux/store";
import { connect } from "react-redux";

interface Props {
  loggedIn: boolean;
}

interface OwnState {}

class HomePage extends React.Component<Props, OwnState> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="main">Home page</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: any) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

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

export default connect(mapStateToProps)(HomePage);
