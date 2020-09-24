import React, { useContext } from "react";
import "../../App.css";
import { FileContext } from "./FileContext";

function FileUpload() {
  const [layerList, setLayerList] = useContext(FileContext);

  const onFileChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      setLayerList((prevLayer) => [...prevLayer, JSON.parse(e.target.result)]);
    };
  };

  return (
    <div>
      <div id="fileupload">
        <input type="file" onChange={onFileChange} />
      </div>
    </div>
  );
}

export default FileUpload;
