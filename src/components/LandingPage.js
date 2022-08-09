import React, { useState } from 'react';
import '../../src/styling/main.css';
import MapComp from './MapComp';


const LandingPage = () => {
    const [ip, setIp] = useState('');

    const handleIp = (event) => {
        setIp(event.target.value)
    }

  return (
    <div>
        <main className="mainpage">
            <section className="section1">
                <h1 className="section1__h1-header">IP Address Tracker</h1>
                <form action="/"method='post' className="section__form" onSubmit={(e) => {e.preventDefault()}}>
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
            <MapComp />
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