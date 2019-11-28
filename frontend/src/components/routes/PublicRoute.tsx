// libraries
import React from "react";
import {
  Route,
  Redirect,
  RouteComponentProps,
  RouteProps
} from "react-router-dom";

export const PublicRoute = ({ component, ...rest }: RouteProps) => {
  if (!component) {
    throw Error("component is undefined");
  }

  const Component = component;
  return (
    <Route
      {...rest}
      render={(props: RouteComponentProps<any>): React.ReactNode =>
        !(localStorage.getItem("user") || sessionStorage.getItem("user")) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/dashboard", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
