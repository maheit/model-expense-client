import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../store/redux/store";

interface params {
  loggedIn: boolean;
  component: any;
  exact: boolean;
  path: string;
}

export const PrivatePath = ({ loggedIn, component, ...rest }: params) => {
  let Page = component;
  return (
    <Route
      {...rest}
      component={(props: any) => {
        console.log("daasdsdas");
        return loggedIn ? <Page {...props} /> : <Redirect to="/signin" />;
      }}
    />
  );
};
