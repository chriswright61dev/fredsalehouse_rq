import themeSelect from "../utilities/theme";
import JobsList from "../modules/jobs/JobsList";
import PageTop from "../components/PageTop/Pagetop";
function Jobs() {
  const themeName = themeSelect();
  return (
    <div className={themeName}>
      <div className="container">
        <PageTop />
        <div className="info_column">
          <JobsList />
        </div>
        <div className="info_column"> </div>
        <div className="info_column"> </div>
        <div className="info_column"> </div>
      </div>
    </div>
  );
}

export default Jobs;
