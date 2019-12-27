import React, { Component } from "react";
import { Button, Divider } from "semantic-ui-react";

import { getJobs, setSelectedJob, deleteJob } from "./store";
import Job from "./Job";

export default class JobsList extends Component {
  state = {
    jobs: []
  };

  componentDidMount() {
    this.setState({ jobs: getJobs() });
  }

  handleCreateJob = () => {
    window.route("/createjob");
  };

  handleUpdate = job => {
    // Save selected job in store
    setSelectedJob(job);
    //Route to edit job page
    window.route("/createjob");
  };

  handleDelete = id => {
    deleteJob(id);
    this.setState({ jobs: getJobs() });
  };

  handleView = job => {
    setSelectedJob(job);
    //Route to view page
    window.route("/jobview");
  };

  render() {
    const { jobs } = this.state;

    return (
      <div className="page">
        <div className="list-head">
          <h1>Jobs</h1>
          <Button primary content="Create Job" onClick={this.handleCreateJob} />
        </div>
        <Divider />
        <div>
          {jobs && jobs.length === 0 ? (
            <div>No jobs found</div>
          ) : (
            jobs.map((job, index) => {
              const jobProps = {
                job,
                handleView: this.handleView,
                handleUpdate: this.handleUpdate,
                handleDelete: this.handleDelete
              };
              return <Job key={index} {...jobProps} />;
            })
          )}
        </div>
      </div>
    );
  }
}
