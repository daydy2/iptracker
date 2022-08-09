import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../../src/styling/main.css';
import MapComp from './MapComp';


const LandingPage = () => {
    const [ip, setIp] = useState('');
    const [post, setPost] = useState(null);

    const handleIp = (event) => {
        setIp(event.target.value)
    }

    const handleSubmit =(e) => {
        e.preventDefault()
        console.log(ip)
        // useEffect(()=>{
            // axios.get("https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_a8QREprc6A5MegcB6NEfbT9Uh5wrZ&ipAddress=", ip).then((response)=>{
            //     setPost(response.data)
            //     console.log(response.data)
            // });
            axios({
                url: "https://geo.ipify.org/api/v2/country,city,vpn?apiKey=",
                method: "GET",
                dataResponse: "json",
                params: {
                  client_id: "at_a8QREprc6A5MegcB6NEfbT9Uh5wrZ",
                  query: ip,
                  per_page: 10,
                },
              }).then((response) => {
                console.log(response.data);
                setPost(response.data);
              });
        // })
    }

    
  return (
    <div>
        <main className="mainpage">
            <section className="section1">
                <h1 className="section1__h1-header">IP Address Tracker</h1>
                <form className="section__form" onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    name= 'ipadd'
                    id='ipadd'
                    placeholder='Search for any IP address or domain'
                    value={ip}
                    onChange={handleIp} 
                    />
                    <button type="submit" className='buttonSub'><i className="fa-solid fa-2x fa-angle-right"></i></button>
                </form>
            </section>
            <section className="section2">
                <MapComp />
            </section>
            
            <div className="div-ipInfo">
                <ul className="infoList">
                    <li className="infoListItem">
                        <h3 className="div__h3-header">ip address</h3>
                        <p className="div__p-info">192.202.174.101</p>
                    </li>
                    <li className="infoListItem">
                        <h3 className="div__h3-header">location</h3>
                        <p className="div__p-info">Lorem ipsum dolor, sit amet </p>
                    </li>
                    <li className="infoListItem">
                        <h3 className="div__h3-header">timezone</h3>
                        <p className="div__p-info">Lorem ipsum dolor, sit amet </p>
                    </li>
                    <li className="infoListItem">
                        <h3 className="div__h3-header">isp</h3>
                        <p className="div__p-info">Lorem ipsum dolor, sit amet </p>
                    </li>
                </ul>
                
                    
            </div>
        </main>
    </div>
  )
}

export default LandingPage