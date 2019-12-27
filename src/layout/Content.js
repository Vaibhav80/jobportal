import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import JobsList from "./JobsList";
import CreateJob from "./CreateJob";
import JobView from "./JobView";

class Content extends Component {
  render() {
    return (
      <div id="main-content" className="app-container">
        <Switch>
          <Route exact path="/" component={JobsList} />
          <Route exact path="/createjob" component={CreateJob} />
          <Route exact path="/jobview" component={JobView} />
        </Switch>
      </div>
    );
  }
}

export default Content;
