import React, { useState, useEffect } from 'react';
import ReactMapGL, {marker} from 'react-map-gl' ;
import {RiUserLocationFill} from 'react-icons/ri';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Map = ({lat, lon}:any) => {
    const API_KEY = '';

    const [viewport, setViewport] = useState({
        latitude: lat,
        longtitude: lon,
        zoom: 14,
        width: '100%',
        height: '100%',
    })

    useEffect(()=> {
        const a = {...viewport}
        a.latitude = lat;
        a.longtitude = lon;
        setViewport(a)
    }, [lat, lon])
        

  return (
    <div className='maps'>
      <ReactMapGL 
        mapboxAccessToken={API_KEY}
        {...viewport}
        onViewportChange={(viewport:any) => setViewport(viewport)}
        style={}
        
        />
    </div>
  )
}

export default Map