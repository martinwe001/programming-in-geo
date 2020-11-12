import React from "react";
import { GeoJSON, Pane } from "react-leaflet";

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
