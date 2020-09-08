import React, { useContext, useEffect} from 'react';
import { Map, TileLayer, GeoJSON} from 'react-leaflet'
import "../App.css";
import { FileContext } from '../LandingPage/ToolbarComponents/FileContext';
import data from '../Layers/layer1.json'
import data1 from '../Layers/layer2.json'



function MapOslo() {

  const [layerList, setLayerList] = useContext(FileContext)

  useEffect(() => {
    setLayerList(FileContext);
   },[FileContext]);

  return (
      <Map center={[59.93, 10.75]} zoom={1}>
          <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <GeoJSON data={[layerList]} style={['color','#006400']} />
      </Map>
  );
}

export default MapOslo;
