import React from "react";
import "../App.css";
import FileUpload from "./ToolbarComponents/FileUpload";
import Layers from "./ToolbarComponents/Layers";
import GeoProcessingWindow from "../Components/GeoprocessingWindow/GeoProcessingWindow";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Button from "react-bootstrap/Button";

import HelpWindow from "../Components/HelpWindow/HelpWindow";

function Toolbar() {
  return (
    <div id="toolbar">
      <Layers />
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <FileUpload />
      </div>
      <GeoProcessingWindow />
      <div style={{ marginTop: "20px" }}>
        <HelpWindow />
      </div>
    </div>
  );
}

export default Toolbar;
