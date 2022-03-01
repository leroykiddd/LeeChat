import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { privateRoutes, publicRoutes } from "src/router";

const AppRouter = () => {
  const isAuth = false;

  return (
    <Router>
      {isAuth ? (
        <Switch>
          {privateRoutes.map((route) => (
            <Route
              path={route.link}
              component={route.component}
              key={route.link}
            />
          ))}
        </Switch>
      ) : (
        <Switch>
          {publicRoutes.map((route) => (
            <Route
              path={route.link}
              exact={route.exact}
              component={route.component}
              key={route.link}
            />
          ))}
        </Switch>
      )}
    </Router>
  );
};

export default AppRouter;
