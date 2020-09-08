import React, {createContext, useState, useEffect} from 'react';
import "../../App.css";
import data from '../../Layers/layer1.json'
import data1 from '../../Layers/layer2.json'


export const FileContext = createContext()

export const FileProvider = (props) => {

    const [layerList, setLayerList] = useState('');

    console.log(layerList)

   return(
        <FileContext.Provider value = {[layerList, setLayerList]}>
            {props.children}
        </FileContext.Provider>
    );
}