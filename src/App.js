import React from 'react';
import Header from './LandingPage/Header'
import MapOslo from './MapComponent/Map';
import Toolbar from './LandingPage/Toolbar';
import {FileProvider}  from './LandingPage/ToolbarComponents/FileContext'


function App() {

  	return (
		<div id='page'>
			<Header/>
			<div id='map-tool'>		
				<FileProvider>
					<Toolbar/>
					<MapOslo></MapOslo>
				</FileProvider>
			</div>
		</div>
  );
}

export default App;
