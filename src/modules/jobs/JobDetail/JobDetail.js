import "./JobDetail.css";
import { useParams } from "react-router-dom";
import useJobs from "../../../data/reactQueryHooks/useJobs";
import EmailLink from "../../../components/EmailLink/EmailLink";

function JobDetail() {
  let { job_id } = useParams();
  const jobs = useJobs();

  if (jobs.status === "success") {
    const jobsData = jobs.data;
    const jobData = jobsData.filter((job) => job.id === job_id)[0];
    return (
      <div className="jobsListItem">
        <h3> {jobData.job_title}</h3>
        <div
          className="jobsbody"
          dangerouslySetInnerHTML={{ __html: jobData.job_body }}
        />

        <EmailLink link={jobData.job_email} linkText={jobData.job_email} />
      </div>
    );
  } else {
    return null;
  }
}

export default JobDetail;
