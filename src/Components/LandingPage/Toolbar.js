import React from "react";
import "../../App.css";
import FileUpload from "./ToolbarComponents/FileUpload";
import Layers from "./ToolbarComponents/Layers";
import GeoProcessingWindow from "../GeoprocessingWindow/GeoProcessingWindow";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Button from "react-bootstrap/Button";

import HelpWindow from "../HelpWindow/HelpWindow";

//This component is the toolbar to the left in the application window
function Toolbar() {
  return (
    <div id="toolbar" style={{ height: "100%" }}>
      <Layers />
      <div style={{ marginBottom: "20px", marginTop: "20px" }}>
        <FileUpload />
      </div>
      <GeoProcessingWindow />
      <div style={{ marginBottom: "20px", marginTop: "20px" }}>
        <HelpWindow />
      </div>
    </div>
  );
}

export default Toolbar;
