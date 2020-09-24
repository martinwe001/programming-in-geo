import React from "react";
import { GeoJSON } from "react-leaflet";

function GeoJSONLayer(props) {
  return <GeoJSON data={props.data} style={["color", "#006400"]} />;
}

export default GeoJSONLayer;
