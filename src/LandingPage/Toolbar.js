import React from 'react';
import "../App.css";
import  FileUpload from './ToolbarComponents/FileUpload';

function Toolbar() {

  return (
  	<div id='toolbar'>
          <FileUpload/>
    </div>

  );
}

export default Toolbar;