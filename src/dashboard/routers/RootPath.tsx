import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { connect } from "react-redux";
import { PrivatePath } from "./PrivatePath";
import { PublicPath } from "./PublicPath";
import { RootState } from "../store/redux/store";

import Loader from "../../components/Loaders";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { LOG_IN } from "../store/redux/types/authActionTypes";

import HomePage from "../pages/HomePage";
import { publicPath, privatePath } from "./Paths";
import { fetchUser } from "../store/redux/actions/AuthActions";

export const history = createHistory();

// interface params {
//   loggedIn: boolean;
//   component: any;
//   rest: any;
//   exact: boolean;
//   path: string;
// }

interface Props {
  loggedIn: boolean;
  userValidate: any;
}

interface OwnState {
  isValidated: boolean;
}

class RootPath extends Component<Props, OwnState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isValidated: false,
    };
  }
  componentWillMount() {
    this.props.userValidate().then(() => {
      this.setState({ isValidated: true });
    });
  }
  render() {
    return (
      <Router history={history}>
        {this.state.isValidated ? (
          <Switch>
            {privatePath.map((path) => {
              return (
                <PrivatePath
                  exact={path.exact}
                  loggedIn={this.props.loggedIn}
                  path={path.path}
                  component={path.component}
                  key={path.path}
                />
              );
            })}
            {publicPath.map((path) => {
              return (
                <PublicPath
                  exact={path.exact}
                  loggedIn={this.props.loggedIn}
                  path={path.path}
                  component={path.component}
                  key={path.path}
                />
              );
            })}
          </Switch>
        ) : (
          <div> Loading....</div>
        )}
        {/* <Route
            exact={true}
            path="/"
            component={() => <div>Test sample</div>}
          /> */}
      </Router>
    );
  }
}

// const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => ({
//   logIn: () =>
//     dispatch({
//       type: LOG_IN,
//       payload: {
//         sessionId: "acdf12a",
//         user: {
//           userName: "Mahesh",
//           email: "sfgfd@gmail.com",
//           userId: "323",
//         },
//       },
//     }),
// });

const mapStateToProps = (state: RootState) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
  return {
    userValidate: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootPath);
