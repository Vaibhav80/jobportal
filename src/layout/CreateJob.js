import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditor from "react-froala-wysiwyg";

import { createJob, getSelectedJob, updateJob } from "./store";

class CreateJob extends Component {
  state = {
    jobTitle: "",
    jobDescription: "",
    openPositions: "",
    jobLocation: "",
    companyName: "",
    requiredSkills: "",
    isUpdate: false
  };

  componentDidMount() {
    const selectedJob = { ...getSelectedJob() };
    if (selectedJob && selectedJob.id) {
      // setTimeout is to set the FroalaEditor model
      setTimeout(
        () =>
          this.setState({
            ...selectedJob,
            isUpdate: true
          }),
        10
      );
    }
  }

  handleJobTitleChange = event => {
    this.setState({ jobTitle: event.target.value });
  };

  handleJobDescriptionChange = model => {
    this.setState({ jobDescription: model });
    console.log(model)
  };

  handleOpenPositionsChange = event => {
    this.setState({ openPositions: event.target.value });
  };

  handleLocationChange = event => {
    this.setState({ jobLocation: event.target.value });
  };

  handleCompanyNameChange = event => {
    this.setState({ companyName: event.target.value });
  };

  handleRequiredSkillsChange = event => {
    this.setState({ requiredSkills: event.target.value });
  };

  getFormData() {
    const {
      jobTitle,
      jobDescription,
      openPositions,
      jobLocation,
      companyName,
      requiredSkills,
      isUpdate
    } = this.state;
    let data = {
      jobTitle,
      jobDescription,
      openPositions,
      jobLocation,
      companyName,
      requiredSkills
    };
    const selectedJob = getSelectedJob();
    if (isUpdate) data.id = selectedJob.id;

    return data;
  }

  handleSave = () => {
    const data = this.getFormData();

    if (this.state.isUpdate) updateJob(data);
    else createJob(data);

    this.resetState();
    window.route("/");
  };

  handleCancel = () => {
    this.resetState();
    window.route("/");
  };

  resetState() {
    this.setState({
      jobTitle: "",
      jobDescription: "",
      openPositions: "",
      jobLocation: "",
      companyName: "",
      requiredSkills: "",
      isUpdate: false
    });
  }

  render() {
    const {
      jobTitle,
      jobDescription,
      jobLocation,
      openPositions,
      companyName,
      requiredSkills,
      isUpdate
    } = this.state;

    const config = {
      placeholderText: "Job description",
      charCounterCount: false
    };

    return (
      <div id="create-job" className="page">
        <h1>{isUpdate ? "Update Job" : "Create Job"}</h1>
        <div>
          <Form>
            <Form.Field>
              <label>Job title</label>
              <input
                placeholder="Job title"
                value={jobTitle}
                onChange={this.handleJobTitleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Job Description</label>
              <FroalaEditor
                tag="textarea"
                config={config}
                model={jobDescription}
                onModelChange={this.handleJobDescriptionChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Open positions</label>
              <input
                placeholder="Open positions"
                value={openPositions}
                onChange={this.handleOpenPositionsChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Location</label>
              <input
                placeholder="Location"
                value={jobLocation}
                onChange={this.handleLocationChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Company name</label>
              <input
                placeholder="Company name"
                value={companyName}
                onChange={this.handleCompanyNameChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Required skills</label>
              <input
                placeholder="Required skills"
                value={requiredSkills}
                onChange={this.handleRequiredSkillsChange}
              />
            </Form.Field>
          </Form>
          <div style={{ paddingTop: 20, textAlign: "end" }}>
            <Button
              primary
              content="Save"
              onClick={this.handleSave}
              style={{ marginRight: 20 }}
            />
            <Button secondary content="Cancel" onClick={this.handleCancel} />
          </div>
        </div>
      </div>
    );
  }
}

export default CreateJob;
