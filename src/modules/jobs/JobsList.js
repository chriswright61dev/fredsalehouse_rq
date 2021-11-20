import useJobs from "../../data/reactQueryHooks/useJobs";
import JobsShort from "./JobsShort/JobsShort";

function JobsList() {
  const jobs = useJobs();

  if (jobs.status === "success") {
    const jobsData = jobs.data;

    if (jobsData.length === 0) {
      return null;
    } else {
      return (
        <div className="jobslist">
          {jobsData.map((job) => {
            return (
              <JobsShort
                key={job.id}
                id={job.id}
                title={job.job_title}
                description={job.job_short_description}
              />
            );
          })}
        </div>
      );
    }
  } else {
    return null;
  }
}

export default JobsList;
