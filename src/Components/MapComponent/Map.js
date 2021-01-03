import React, { useContext, useEffect } from "react";
import { LayersControl, Map, TileLayer } from "react-leaflet";
import "../../App.css";
import { FileContext } from "../../Context/FileContext";
import GeoJSONLayer from "./GeoJSONLayer";

// Most important component. This component generates and handles the map and all the layers.
// Map is rerendered each time a layer is added or changed.
function MapOslo() {
  const { BaseLayer, Overlay } = LayersControl;
  const [layerList, setLayerList] = useContext(FileContext);

  //Function that updates the map with new layers each time layers are added or changed
  useEffect(() => {
    setLayerList(layerList);
  }, [layerList]);
  return (
    <Map center={[63.42963170221654, 10.39529800415039]} zoom={14}>
      <TileLayer
        url="https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFydHdhbiIsImEiOiJja2dodWFzazkwaDRnMnJsaTJ6NWN3bm8yIn0.IWZOHx04SkrB-abRPIUd6w"
        attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
      />
      <LayersControl position="topright">
        {layerList.map((data, index) => {
          // creates a geojsonlayer component for each layer in layerlist
          return (
            <Overlay name={data.name} key={data.id} checked={true}>
              <GeoJSONLayer
                data={data}
                uuid={data.id}
                color={data.color}
                index={layerList.findIndex((age) => age.id === data.id)}
              />
            </Overlay>
          );
        })}
      </LayersControl>
    </Map>
  );
}

export default MapOslo;
