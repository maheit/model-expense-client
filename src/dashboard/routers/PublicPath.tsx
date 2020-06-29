import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

interface params {
  loggedIn: boolean;
  component: any;
  exact: boolean;
  path: string;
}

export const PublicPath = ({ loggedIn, component, ...rest }: params) => {
  let Page = component;
  return (
    <Route
      {...rest}
      component={(props: any) => {
        console.log(JSON.stringify(props) + " sdfsf\n" + JSON.stringify(rest));
        return <Page {...props} />;
      }}
    />
  );
};
