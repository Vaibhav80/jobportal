let jobs = [];

let selectedJob = {};

export const createJob = data => {
  let id = jobs.length === 0 ? 1 : jobs.length + 1;
  jobs.push({ id, ...data });
};

export const updateJob = data => {
  const index = jobs.findIndex(job => job.id === data.id);
  if (index > -1) jobs[index] = { ...data };
};

export const deleteJob = id => {
  const filteredJobs = jobs.filter(job => job.id !== id);
  jobs = [...filteredJobs];
};

export const getJobs = () => {
  return jobs;
};

export const setSelectedJob = job => {
  selectedJob = job;
};

export const getSelectedJob = () => {
  return selectedJob;
};

export const clearSelectedJob = () => {
  selectedJob = {};
};
