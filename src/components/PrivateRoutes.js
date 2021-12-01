import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../hooks/useAuthentication";


const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {token} = useContext(AuthContext);
  console.log(token)
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!localStorage.getItem('token') ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute