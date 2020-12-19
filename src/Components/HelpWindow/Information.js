import React from "react";

function Information() {
  return (
    <div>
      <h6>Introduction</h6>
      <p>
        This is a small GIS web application created in the course
        <a
          style={{ marginLeft: "5px" }}
          href="https://www.ntnu.no/studier/emner/TBA4251#tab=omEmnet"
          target="_blank"
        >
          TBA4251
        </a>
        . The goal of this course is to make a small GIS that includes important
        GIS functionality and should be easy to use. The application is buildt
        as an introduction for using GIS and should make geomatics students more
        prepared for QGIS and ArcGIS.
      </p>
    </div>
  );
}

export default Information;
