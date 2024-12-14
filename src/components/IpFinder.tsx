import React from 'react';
import Map from './Map';
import axios from 'axios';


function IpFinder() {
    const [ipdetails, setIpdetails] = React.useState([])
    const [lat, setLat] = React.useState(22.5726)
    const [lon, setLon] = React.useState(88.3832)

    React.useEffect(()=> {
        axios.get('https://ipapi.co/json/')
        .then((res)=> {
            setIpdetails(res.data);
            setLat(res.data.latitude);
            setLon(res.data.longtitude);
        });
    },[])
  
    return (
    <>
    <div className='maps'>
        <div>
        <h1>IP Finder</h1>
        <h1 id='ip'>{ipdetails.ip}</h1>
        <p>Find your IP address</p>
        <p>{ipdetails.city}, {ipdetails.region}, {ipdetails.country_name}</p>
        </div>
        <Map lat={lat} lon={lon} />
    </div>
    </>
    
  )
}

export default IpFinder