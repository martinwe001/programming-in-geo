import React from "react";
import { GeoJSON, Pane } from "react-leaflet";

function GeoJSONLayer(props) {
  console.log(props.data.features);
  return (
    <Pane style={{ zIndex: 300 - props.index }}>
      <GeoJSON
        data={props.data}
        style={{ color: props.color }}
        id={props.uuid}
        className={props.uuid}
      />
    </Pane>
  );
}

export default GeoJSONLayer;
