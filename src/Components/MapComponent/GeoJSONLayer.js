import React from "react";
import { GeoJSON, Pane } from "react-leaflet";

// Componentent of layer that is displayed on map
// GeoJSON is a leaflet layer for displaying geojson data in leaflet
// The geoJSON compontnt is wrapped inside a Pane component this is a method I found myself
// that allow for changing the z-index of the layer. This is not a functionality which is
// meant to exist for geojsons in leaflet.
function GeoJSONLayer(props) {
  return (
    <Pane style={{ zIndex: 300 - props.index }}>
      <GeoJSON
        data={props.data}
        style={{ color: props.color, stroke: false, fillOpacity: 0.7 }}
        id={props.uuid}
        className={props.uuid}
      />
    </Pane>
  );
}

export default GeoJSONLayer;
