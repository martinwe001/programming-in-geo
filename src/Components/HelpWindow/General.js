import React from "react";

function General() {
  return (
    <div>
      <h6>File Upload</h6>
      <p>
        The application only allows for one file to uploaded at a time.
        Furthermore the file must be on GeoJSON format. These file end with{" "}
        <i>.json</i>
      </p>
      <h6>Layers</h6>
      <p>
        For now the GIS only accepts single polygon layers. If you try to use
        multi polygon layers the program will not be able to process it.
      </p>
    </div>
  );
}

export default General;
