import React from "react";
import "./JobsShort.css";
import { Link } from "react-router-dom";
function JobsShort({ id, title, description }) {
  return (
    <Link to={`/jobs/${id}`}>
      <div className="jobsListItem">
        <h3> {title}</h3>
        <p>{description}</p>
        <p>Click for details</p>
      </div>
    </Link>
  );
}

export default JobsShort;
