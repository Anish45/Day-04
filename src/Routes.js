import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import NewHome from "./NewHome";

const Routes = () => {
  return (
    <Router>
      <Route>
        <Switch>
          <Route path="/newhome" component={NewHome}>
            <NewHome />
          </Route>
          <Route path="/contact" component={Contact}>
            <Contact />
          </Route>
          <Route path="/" component={Home} />
        </Switch>
      </Route>
    </Router>
  );
};

export default Routes;
