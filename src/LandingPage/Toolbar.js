import React from "react";
import "../App.css";
import FileUpload from "./ToolbarComponents/FileUpload";
import Intersect from "./ToolbarComponents/Intersect";
import Difference from "./ToolbarComponents/Differrence";
import Union from "./ToolbarComponents/Union";
import Layers from "./ToolbarComponents/Layers";
import Buffer from "./ToolbarComponents/Buffer";

function Toolbar() {
  return (
    <div id="toolbar">
      <Union />
      <Intersect />
      <Difference />
      <Buffer />
      <Layers />
      <FileUpload />
    </div>
  );
}

export default Toolbar;
