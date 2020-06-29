import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ExpenseReucers from "./reducers/ExpenseReducer";
import AuthReducers from "./reducers/AuthReducers";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = compose;

const rootReducer = combineReducers({
  expenses: ExpenseReucers,
  auth: AuthReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export default () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
