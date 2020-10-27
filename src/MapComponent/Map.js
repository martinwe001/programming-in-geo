import { Edit } from "@material-ui/icons";
import React, { useContext, useEffect } from "react";
import { LayersControl, Map, TileLayer } from "react-leaflet";
import "../App.css";
import { FileContext } from "../Context/FileContext";
import GeoJSONLayer from "./GeoJSONLayer";

function MapOslo() {
  const { BaseLayer, Overlay } = LayersControl;
  const [layerList, setLayerList] = useContext(FileContext);

  useEffect(() => {
    setLayerList(layerList);
  }, [layerList]);
  return (
    <Map center={[37.77979164123535, -122.430124319877235]} zoom={11}>
      <TileLayer
        url="https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFydHdhbiIsImEiOiJja2dodWFzazkwaDRnMnJsaTJ6NWN3bm8yIn0.IWZOHx04SkrB-abRPIUd6w"
        attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
      />
      <LayersControl position="topright">
        {layerList.map((data, index) => {
          console.log(data);
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
