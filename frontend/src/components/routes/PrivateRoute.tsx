import * as React from "react";
import { Redirect, Route, RouteProps, RouteComponentProps } from "react-router";

export const PrivateRoute = ({ component, ...rest }: RouteProps) => {
  if (!component) {
    throw Error("component is undefined");
  }

  const Component = component;
  return (
    <Route
      {...rest}
      render={(props: RouteComponentProps<any>): React.ReactNode =>
        localStorage.getItem("user") || sessionStorage.getItem("user") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
