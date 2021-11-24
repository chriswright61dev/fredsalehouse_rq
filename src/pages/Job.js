import themeSelect from "../utilities/theme";
import JobDetail from "../modules/jobs/JobDetail/JobDetail";
import JobsList from "../modules/jobs/JobsList";
import PageTop from "../components/PageTop/Pagetop";
function Job() {
  const themeName = themeSelect();
  return (
    <div className={themeName}>
      <div className="container">
        <PageTop />
        <div className="detail_column">
          <JobDetail />
        </div>
        <div className="info_column">
          <JobsList />
        </div>
        <div className="info_column"> </div>
      </div>
    </div>
  );
}

export default Job;
