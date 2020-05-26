import React from "react";
import routes from "./index.config";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            name={route.name}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
};
