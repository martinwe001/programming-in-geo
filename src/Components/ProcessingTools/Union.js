import React, { useContext, useState } from "react";
import "../../App.css";
import { FileContext } from "../../Context/FileContext";
import union from "@turf/union";
import booleanOverlap from "@turf/boolean-overlap";
import booleanContains from "@turf/boolean-contains";
import { v4 as uuidv4 } from "uuid";
import randomColor from "randomcolor";
import Button from "react-bootstrap/Button";

function Union() {
  const [layerList, setLayerList] = useContext(FileContext);
  const [errorM, setErrorM] = useState();

  const handleSubmit = () => {
    var layer1name = document.getElementById("unionSelect1").value;
    var layer2name = document.getElementById("unionSelect2").value;
    var layer1 = layerList.filter((e) => e.name === layer1name)[0];
    var layer2 = layerList.filter((e) => e.name === layer2name)[0];
    var name = document.getElementById("Name").value;
    console.log(layer1, layer2);

    try {
      if (
        booleanOverlap(layer1, layer2) ||
        booleanContains(layer1, layer2) ||
        booleanContains(layer2, layer1)
      ) {
        var json = union(layer1, layer2);
        console.log(json);

        json["id"] = uuidv4();
        json["name"] = name === "" ? "Union" : name;
        json["index"] = layerList.length;
        json["color"] = randomColor();
        setLayerList((prevLayer) => [...prevLayer, json]);
        document.getElementById("unionSelect1").value = "";
        document.getElementById("unionSelect2").value = "";
      } else {
        setErrorM("Do not overlap");
      }
    } catch (error) {
      setErrorM("Not enough layers");
    }
  };

  return (
    <div>
      <h6 style={{ color: "red" }}>{errorM}</h6>
      <h5>Union</h5>
      <div>
        <select id="unionSelect1" className="form">
          <option value="" selected disabled hidden>
            Choose here
          </option>
          {layerList.map((data, index) => {
            return (
              <option value={data.name} key={index}>
                {" "}
                {data.name}{" "}
              </option>
            );
          })}
        </select>
        <select id="unionSelect2" className="form2">
          <option value="" selected disabled hidden>
            Choose here
          </option>
          {layerList.map((data, index) => {
            return (
              <option value={data.name} key={index}>
                {" "}
                {data.name}{" "}
              </option>
            );
          })}
        </select>
      </div>
      <h6 style={{ marginTop: "30px" }}>Name</h6>
      <form className="form">
        <input
          type="string"
          id="Name"
          name="name"
          placeholder="Name of layer"
        />
      </form>
      <Button onClick={handleSubmit} className="form">
        Union
      </Button>
    </div>
  );
}

export default Union;
