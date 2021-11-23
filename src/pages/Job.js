import themeSelect from "../utilities/theme";
import JobDetail from "../modules/jobs/JobDetail/JobDetail";
function Job() {
  const themeName = themeSelect();
  return (
    <div className={themeName}>
      <div className="container">
        <div className="detail_column">
          <JobDetail />
        </div>
        <div className="info_column"> </div>
        <div className="info_column"> </div>
      </div>
    </div>
  );
}

export default Job;
