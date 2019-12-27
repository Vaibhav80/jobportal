import React, { Component } from "react";

import { getSelectedJob } from "./store";
import { Segment } from "semantic-ui-react";

const $ = window.$;

class JobView extends Component {
  state = {
    jobTitle: "",
    jobDescription: "",
    openPositions: "",
    jobLocation: "",
    companyName: "",
    requiredSkills: ""
  };

  componentDidMount() {
    this.setState({ ...getSelectedJob() });
  }

  render() {
    const {
      jobTitle,
      jobDescription,
      openPositions,
      jobLocation,
      companyName,
      requiredSkills
    } = this.state;

    return (
      <div id="job-view" className="page">
        <Segment className="col-dir job-head">
          <h2>{jobTitle}</h2>
          <label className="secondary-text">
            {companyName} - {jobLocation}
          </label>
          <label className="secondary-text">
            <span className="bold-text">Open positions: </span>
            {openPositions}
          </label>
          <label className="secondary-text">
            <span className="bold-text">Required skills: </span>{" "}
            {requiredSkills}
          </label>
        </Segment>
        <div
          dangerouslySetInnerHTML={{ __html: jobDescription }}
          style={{ padding: 20 }}
        />
      </div>
    );
  }
}

export default JobView;
