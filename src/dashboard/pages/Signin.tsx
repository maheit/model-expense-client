import React from "react";

import { RootState } from "../store/redux/store";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Expense } from "../store/redux/types/expenseTypes";
import { AddExpense } from "../store/redux/actions/ExpenseActions";

interface Props {
  loggedIn: boolean;
}

interface OwnState {}

class Signin extends React.Component<Props, OwnState> {
  constructor(props: Props) {
    super(props);
  }

  getStart = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    console.log("zcz");
  };

  render() {
    return (
      <React.Fragment>
        <div className="d-flex align-items-center justify-content-center full-height">
          {/* <div className="card ">
            <div className="card-body"> */}
          <button className="btn btn-primary" onClick={this.getStart}>
            Get Start
          </button>
          {/* </div>
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: any) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
  props: any
) => {
  return {
    addExpense: (expense: Expense) => {
      dispatch(AddExpense(expense));
    },
  };
};

export default connect(mapStateToProps)(Signin);
