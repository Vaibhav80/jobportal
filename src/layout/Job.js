import React from "react";
import { Icon, Segment } from "semantic-ui-react";

function Job({ job, handleUpdate, handleDelete, handleView }) {
  return (
    <Segment className="job">
      <div className="job-col1 col-dir">
        <h2>{job.jobTitle}</h2>
        <label className="secondary-text">
          {job.companyName} - {job.jobLocation}
        </label>
      </div>

      <div className="job-col2">
        <Icon name="eye" size="large" onClick={() => handleView(job)} />
        <Icon
          name="edit"
          size="large"
          color="blue"
          onClick={() => handleUpdate(job)}
        />
        <Icon
          name="trash"
          size="large"
          color="red"
          onClick={() => handleDelete(job.id)}
        />
      </div>
    </Segment>
  );
}

export default Job;
