import React, { useContext, useEffect, useState } from "react";
import { Map, TileLayer } from "react-leaflet";
import "../App.css";
import { FileContext } from "../LandingPage/ToolbarComponents/FileContext";
//import data from "../Layers/layer1.json";
import data1 from "../Layers/layer2.json";
import GeoJSONLayer from "./GeoJSONLayer";

function MapOslo() {
  const [layerList, setLayerList] = useContext(FileContext);
  //let [myData, setMyData] = useState([]);
  /*
  useEffect(() => {
    setTimeout(() => {
      setMyData([data1]);
    }, 1000);
  }, []);

  useEffect(() => {
    console.log(myData);
  }, [myData]);
  */
  useEffect(() => {
    console.log("dette er denne    ");
    console.log(layerList);
    setLayerList(layerList);
  }, [layerList]);

  return (
    <Map center={[59.93, 10.75]} zoom={2}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {layerList.map((data, index) => {
        return <GeoJSONLayer data={data} key={index} />;
      })}
    </Map>
  );
}

export default MapOslo;
