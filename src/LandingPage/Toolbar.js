import React from "react";
import "../App.css";
import FileUpload from "./ToolbarComponents/FileUpload";
import Layers from "./ToolbarComponents/Layers";
import GeoProcessingWindow from "../Components/GeoprocessingWindow/GeoProcessingWindow";

function Toolbar() {
  return (
    <div id="toolbar">
      <Layers />
      <FileUpload />
      <div id="footer">
        <GeoProcessingWindow />
      </div>
    </div>
  );
}

export default Toolbar;
